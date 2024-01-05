import React, { useState } from 'react';
import './ImageUploaderLayout.css';
import Button from '@mui/joy/Button';
import * as tf from '@tensorflow/tfjs';
import exampleImage from '../../imagenes/tienda.png';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
  
    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
    };
  
    async function runModel() {
      const model = await tf.loadLayersModel('/modelo/model.json');

      // Asume que 'image' es un objeto File obtenido del input
      const imageElement = document.createElement('img');
      const imageUrl = URL.createObjectURL(image);
      imageElement.src = imageUrl;

      try {
        await new Promise((resolve, reject) => {
          imageElement.onload = resolve;
          imageElement.onerror = reject;
        });

        const tensorImagen = tf.browser.fromPixels(imageElement)
          .resizeNearestNeighbor([48, 48])
          .mean(2)
          .expandDims(2)
          .expandDims()
          .toFloat()
          .div(255.0);

        // Ejecutar el modelo con la imagen
        const predicciones = model.predict(tensorImagen);

        // Etiquetas de las emociones
        const etiquetas = ['angry', 'disgusted', 'fearful', 'happy', 'neutral', 'sad', 'surprised'];

        // Mostrar las predicciones con etiquetas en la consola
        predicciones.data().then(data => {
          const resultados = Array.from(data).map((prob, index) => {
            return { etiqueta: etiquetas[index], probabilidad: prob };
          });
          console.log("Resultados de la predicción con etiquetas:", resultados);
        });

      } catch (error) {
        console.error(error);
      } finally {
        // Limpieza
        URL.revokeObjectURL(imageUrl);
        imageElement.remove();
      }
    }
  
    return (
      <div className="imguploader-container">
        <input type="file" onChange={handleImageChange} accept="image/*" />
  
        {image && (
          <div className='imguploader-container-imagen'>
            <h2>Vista previa:</h2>
            <img src={URL.createObjectURL(image)} alt="Vista previa" height="400vh" />
            <Button variant='soft' onClick={runModel} style={{marginTop: '1vh'}}>Subir Imagen</Button>
          </div>
        )}
      </div>
    );
  };

export default ImageUploader;
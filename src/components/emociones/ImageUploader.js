import React, { useState } from 'react';
import './ImageUploaderLayout.css';
import Button from '@mui/joy/Button';
import * as tf from '@tensorflow/tfjs';
import exampleImage from '../../imagenes/tienda.png';

import Felicidad from '../../imagenes/felicidad.png';
import Tristeza from '../../imagenes/tristeza.png';
import Enfado from '../../imagenes/enfado.png';
import Neutro from '../../imagenes/neutral.png';
import Asqueo from '../../imagenes/asqueo.png';
import Sorpresa from '../../imagenes/sorpresa.png';
import Temeroso from '../../imagenes/temerosidad.png';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [resultados, setResultados] = useState([]);
  const [additionalImagesShown, setAdditionalImagesShown] = useState(false);
  const toPercentage = (probabilidad) => (probabilidad * 100).toFixed(2);
  const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
      setAdditionalImagesShown(false);  // Reset the display of additional images
  };

  async function runModel() {
      if (!image) return;

      const model = await tf.loadLayersModel('/modelo/model.json');
      const imageElement = document.createElement('img');
      const imageUrl = URL.createObjectURL(image);
      imageElement.src = imageUrl;

      try {
          await new Promise((resolve, reject) => {
              imageElement.onload = resolve;
              imageElement.onerror = reject;
          });

          const tensorImage = tf.browser.fromPixels(imageElement)
              .resizeNearestNeighbor([48, 48])
              .mean(2)
              .expandDims(2)
              .expandDims()
              .toFloat()
              .div(255.0);

          const predictions = model.predict(tensorImage);
          const etiquetas = ['angry', 'disgusted', 'fearful', 'happy', 'neutral', 'sad', 'surprised'];

          const resultados = await predictions.data();
          const mappedResults = Array.from(resultados).map((prob, index) => {
              return { etiqueta: etiquetas[index], probabilidad: prob };
          });

          // Sort the results by probability
          mappedResults.sort((a, b) => b.probabilidad - a.probabilidad);

          setResultados(mappedResults);
          setAdditionalImagesShown(true);

      } catch (error) {
          console.error(error);
      } finally {
          // Clean up
          URL.revokeObjectURL(imageUrl);
          imageElement.remove();
      }
  }

  function capitalize(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // Mapping from labels to image sources
  const labelToImageMap = {
      'angry': Enfado,
      'disgusted': Asqueo,
      'fearful': Temeroso,
      'happy': Felicidad,
      'neutral': Neutro,
      'sad': Tristeza,
      'surprised': Sorpresa,
  };

  return (
      <div className="imguploader-container">
          <div className="left-section">
              <input type="file" onChange={handleImageChange} accept="image/*" />
              {image && (
                  <div className='image-preview-container'>
                      <img src={URL.createObjectURL(image)} alt="Preview" className="uploaded-image" />
                      <Button variant='soft' onClick={runModel} className="upload-button">Analyze</Button>
                  </div>
              )}
          </div>
          {additionalImagesShown && resultados.length > 0 && (
              <div className="right-section">
                  <div className="main-emotion-container">
                      <img src={labelToImageMap[resultados[0].etiqueta]} alt={resultados[0].etiqueta} className="main-image" />
                      <p>{capitalize(resultados[0].etiqueta)} ({toPercentage(resultados[0].probabilidad)}%)</p>
                  </div>
                  <div className="additional-emotions-container">
                      {resultados.slice(1).map((emotion, index) => (
                          <div key={index} className="emotion-image-container">
                              <img src={labelToImageMap[emotion.etiqueta]} alt={emotion.etiqueta} className="additional-image" />
                              <p>{capitalize(emotion.etiqueta)} ({toPercentage(emotion.probabilidad)}%)</p>
                          </div>
                      ))}
                  </div>
              </div>
          )}
      </div>
  );
};

export default ImageUploader;
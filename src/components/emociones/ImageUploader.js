import React, { useState } from 'react';
import './ImageUploaderLayout.css';
import Button from '@mui/joy/Button';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
  
    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
    };
  
    const handleUpload = () => {
      // Lógica para subir la imagen
      if (image) {
        console.log('Imagen subida:', image);
        // Lógica para subir la imagen a tu servidor o almacenamiento
      } else {
        console.log('Por favor selecciona una imagen.');
      }
    };
  
    return (
      <div className="imguploader-container">
        <input type="file" onChange={handleImageChange} accept="image/*" />
  
        {image && (
          <div className='imguploader-container-imagen'>
            <h2>Vista previa:</h2>
            <img src={URL.createObjectURL(image)} alt="Vista previa" height="400vh" />
            <Button variant='soft' onClick={handleUpload} style={{marginTop: '1vh'}}>Subir Imagen</Button>
          </div>
        )}
      </div>
    );
  };

export default ImageUploader;
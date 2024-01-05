import React, { useState } from 'react';
import './MoodResult.css';
import Typography from '@mui/joy/Typography';
import Incognita from '../../imagenes/incognita.png';
import Felicidad from '../../imagenes/felicidad.png';
import Tristeza from '../../imagenes/tristeza.png';
import Enfado from '../../imagenes/enfado.png';
import Neutro from '../../imagenes/neutral.png';
import Asqueo from '../../imagenes/asqueo.png';
import Sorpresa from '../../imagenes/sorpresa.png';
import Temeroso from '../../imagenes/temerosidad.png';
// Importa las otras imágenes de manera similar

function MoodResult() {
  const [images, setImages] = useState([Incognita]); // Estado inicial con una imagen

  const updateImages = () => {
    setImages([
      Felicidad, // Esta será la imagen grande
      Tristeza,Enfado,Neutro,Asqueo,Sorpresa,Temeroso// Agrega aquí las otras 6 imágenes
    ]);
  }

  return (
    <div className="moodresult">
      <img src={images[0]} alt="Imagen grande" className="big-image" />
      <div className="small-images-container">
        {images.slice(1).map((image, index) => (
          <img key={index} src={image} alt={`Imagen pequeña ${index}`} className="small-image" />
        ))}
      </div>
      <Typography className='emociones-titulo' variant="h1" component="div" sx={{ color: 'black', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>Undefined</Typography>
      <button onClick={updateImages}>Actualizar Imágenes</button>
    </div>
  );
}

export default MoodResult;
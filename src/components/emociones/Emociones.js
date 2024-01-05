import React from 'react';
import './Emociones.css';
import './LayoutEmociones.css';
import Typography from '@mui/joy/Typography';
import ImageUploader from './ImageUploader';
import MoodResult from './MoodResult';
import flecha from '../../imagenes/flecha.png';

function Emociones() {
    return (
    <div className="emociones">
      <Typography className='emociones-titulo' variant="h1" component="div" sx={{ color: 'black', fontSize: '4rem', fontFamily: 'Arial, sans-serif' }}>Mood Identifier</Typography>
      <div className='emociones-container'>
        <ImageUploader className='emociones-container-izq'/>
      </div>
    </div>
  );
};

export default Emociones;
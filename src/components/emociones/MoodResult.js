import React from 'react';
import './MoodResult.css';
import Typography from '@mui/joy/Typography';
import Incognita from '../../imagenes/incognita.png';

function MoodResult() {
    return (
    <div className="moodresult">
      <img src={Incognita} alt="Imagen persona con interrogación" height="400vh" />
      <Typography className='emociones-titulo' variant="h1" component="div" sx={{ color: 'black', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>Undefined</Typography>
    </div>
  );
};

export default MoodResult;
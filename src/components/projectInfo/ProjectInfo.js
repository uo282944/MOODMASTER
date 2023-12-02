import React from 'react';
import './ProjectInfo.css';
import Typography from '@mui/joy/Typography';

function ProyectInfo() {
    return (
    <div className="info">
      <Typography variant="h1" component="div" sx={{ color: 'black', fontSize: '3rem', fontFamily: 'Arial, sans-serif' }}>Project Information</Typography>
    </div>
  );
};

export default ProyectInfo;
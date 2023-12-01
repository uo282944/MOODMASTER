import logo from './logo.svg';
import './Home.css';
import VentanaIzquierda from './VentanaIzquierda';
import Typography from '@mui/joy/Typography';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <Typography variant="h1" component="div" sx={{ color: 'black', fontSize: '3rem', fontFamily: 'Arial, sans-serif' }}>MoodMaster</Typography>
        <VentanaIzquierda></VentanaIzquierda>
      </header>
    </div>
  );
}

export default Home;

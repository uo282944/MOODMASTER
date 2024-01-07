import React from 'react';
import './Nav.css';
import Typography from '@mui/joy/Typography';
import VentanaIzquierda from './VentanaIzquierda';
import logo from '../../imagenes/logo.svg';
import { Outlet, Link } from "react-router-dom";

function Nav() {
    return (
    <div className="nav-bar">
        <div className='nav-icon'>
            <Link to='/MOODMASTER'>
                <img src={logo} className="nav-logo" alt="logo" />
            </Link>
            <Typography variant="h1" component="div" sx={{ color: 'black', fontSize: '3rem', fontFamily: 'Arial, sans-serif' }}>MoodMaster</Typography>
        </div>
        <div className='nav-ventana'>
            <VentanaIzquierda/>
        </div>
    </div>
  );
};

export default Nav;
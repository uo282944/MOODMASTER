import logo from '../../imagenes/logo.svg';
import './Home.css';
import VentanaIzquierda from '../fragments/VentanaIzquierda';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <Typography variant="h1" component="div" sx={{ color: 'black', fontSize: '3rem', fontFamily: 'Arial, sans-serif' }}>MoodMaster</Typography>
        <Button variant="soft" color="neutral" >
          Start
        </Button>
      </header>
    </div>
  );
}

export default Home;

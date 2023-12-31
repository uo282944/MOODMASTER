import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import AboutUs from './components/aboutus/Aboutus';
import ProjectInfo from './components/projectInfo/ProjectInfo';
import Contact from './components/contact/Contact';
import Nav from './components/fragments/Navegador';
import Emociones from './components/emociones/Emociones'
import ImageUploader from './components/emociones/ImageUploader'

function App() {
  return (
    
      
      <BrowserRouter className='app'>
        <Nav className='app-nav' />
        <Routes className="principal">
          <Route path="/MOODMASTER" element={<Home />}/>
          <Route path="/mood_identifier" element={<ImageUploader />} />
          <Route path="/about_us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import AboutUs from './components/aboutus/Aboutus';
import ProjectInfo from './components/projectInfo/ProjectInfo';
import Contact from './components/contact/Contact';
import Nav from './components/fragments/Navegador';
import Emociones from './components/emociones/Emociones'

function App() {
  return (
    
      
      <BrowserRouter className='app'>
        <Nav className='app-nav' />
        <Routes className="principal">
          <Route path="/" element={<Home />}/>
          <Route path="mood_identifier" element={<Emociones />} />
          <Route path="about_us" element={<AboutUs />} />
          <Route path="info" element={<ProjectInfo />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

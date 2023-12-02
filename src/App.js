import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import AboutUs from './components/aboutus/Aboutus';
import ProjectInfo from './components/projectInfo/ProjectInfo';
import Contact from './components/contact/Contact';
import Nav from './components/fragments/Navegador';

function App() {
  return (
    
      
      <BrowserRouter className='app'>
        <Nav className='app-nav' />
        <Routes className="principal">
          <Route path="/" element={<Home />}/>
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Info" element={<ProjectInfo />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

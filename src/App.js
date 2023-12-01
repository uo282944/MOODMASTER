import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import AboutUs from './components/aboutus/Aboutus';

function App() {
  return (
    <BrowserRouter>
      <Routes className="principal">
        <Route path="/" element={<Home />}/>
          <Route path="AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './Intro';
import MainContent from './MainContent'; 
import Map from './Map';
import List from './List';
import Contact from './Contact';
import OpenLetter from './OpenLetter';
import Survey from './Survey';
import Preloader from './components/Preloader';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/intro" element={<Intro />} />
        <Route path='/map' element={<Map/>}/>
        <Route path="/list" element={<List />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/open-letter" element={<OpenLetter />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

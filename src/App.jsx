import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './Intro';
import MainContent from './MainContent'; 
import Map from './Map';
import List from './List';
import Contact from './Contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/intro" element={<Intro />} />
        <Route path='/map' element={<Map/>}/>
        <Route path="/list" element={<List />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

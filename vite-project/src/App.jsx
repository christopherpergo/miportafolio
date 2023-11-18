import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Enlaces } from './components/Enlaces';
import { About } from './components/About';
import { Principal } from './components/Principal';
import { Main } from './components/Main';
import { Contact } from './components/Contact';
import './App.css'

function App() {
  const [language, setLanguage] = useState('es');
  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <BrowserRouter>
      <Enlaces language={language} toggleLanguage={toggleLanguage} />
      <Routes>
        <Route path='/' element={<Principal language={language} />} />
        <Route path='/about' element={<About language={language} />} />
        <Route path='/main' element={<Main language={language} />} />
        <Route path='/contacto' element={<Contact language={language} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
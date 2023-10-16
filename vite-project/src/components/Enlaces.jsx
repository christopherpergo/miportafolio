import React from 'react';
import { Link } from 'react-router-dom';
import { World } from 'tabler-icons-react';

export const Enlaces = ({ language, toggleLanguage }) => {
  return (
    <nav>
      <Link to="/">{language === 'es' ? 'Inicio' : 'Home'}</Link>
      <Link to="/about">{language === 'es' ? 'Sobre Mi' : 'About'}</Link>
      <Link to="/main">{language === 'es' ? 'Portafolio' : 'Portfolio'}</Link>
      <Link to="/contacto">{language === 'es' ? 'Contacto' : 'Contact'}</Link>

      <button className='botonTraduccion' onClick={toggleLanguage}>
        {language === 'es' ? 'EN' : 'ES'} <World size={35} strokeWidth={1.2} color={'#e95b23'} />
      </button>
    </nav>
  );
};
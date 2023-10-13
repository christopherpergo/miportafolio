import React from 'react'

export const Cabecera = () => {

const linkedin = 'https://www.linkedin.com/in/christopherpereiragomes1990';
const gitHub= 'https://github.com/christopherpergo';

  return (
    <>
<div className='contenedor'>
  <div className='fotoPrincipal'></div>
  <div className='contenido'>
    <h1 className='textoCabecera'>Christopher Pereira<br/><span className='textoSpan'>Desarrollador Web</span></h1>
     
  <div className='logosP-container'>
      <a href={linkedin} target='_blank' rel='noopener noreferrer'>
      <img className='logosIzq' src='https://res.cloudinary.com/daacb3ohi/image/upload/v1697187581/pngwing.com_hd3cly.png' alt='LinkedIn Logo' /> </a>
      <a href={gitHub} target="_blank" rel='noopener noreferrer'>
      <img className='logosDer' src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697187581/pngwing.com_1_xzonru.png" alt='GitHub Logo' />
      </a>
    </div>
  </div>
</div>


</>
  )
}

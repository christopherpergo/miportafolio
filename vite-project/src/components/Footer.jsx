import React from 'react'

export const Footer = () => {

const email = 'christopher.pg1990@gmail.com';
const linkedin = 'https://www.linkedin.com/in/christopherpereiragomes1990';
const gitHub= 'https://github.com/christopherpergo';

  return (
    <>
    <div className='footer'>
    <div className='contenedor2'>
  <div className='textoContenedor'>
    <h2  className='contacto'>Contacto</h2>
    <p className='textoFinal'>Estoy buscando activamente oportunidades para colaborar con empresas, agencias y personas, en lugar de simplemente trabajar para ellas. Mi objetivo es aportar mis habilidades al equipo, donde juntos podamos abordar desafíos empresariales reales de una manera que aproveche toda nuestra experiencia y conocimiento colectivos. Espero con entusiasmo la posibilidad de formar parte de un gran equipo, así que no dudes en ponerte en contacto a través de cualquiera de las plataformas que se detallan a continuación... </p>
    </div>
    <div className='logoWeb'>
    <div className='logoFondo'></div>
    <div className='logoFondo3'></div>
    </div>
    </div>
<div className='logoPadre'>

  <a href={`https://api.whatsapp.com/send?phone=0034651158543`} target="_blank" rel="noopener noreferrer">
  <img className='logos'src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697187581/pngwing.com_2_.png_aynuai.png"/></a>

  <a href={linkedin} target='_blank' rel='noopener noreferrer'>
  <img className='logos' src='https://res.cloudinary.com/daacb3ohi/image/upload/v1697187581/pngwing.com_hd3cly.png'/></a>

  <a href={gitHub} target="_blank" rel="noopener noreferrer">
  <img className='logos' src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697187581/pngwing.com_1_xzonru.png"/></a>

  <a href={email} target="_blank" rel="noopener noreferrer">
  <img className='logos' src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697187581/pngwing.com_2_.png_1_akiuvf.png"/></a>
   
    </div>
   
    </div>
    </>
  )
}

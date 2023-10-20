import React from 'react';

export const Pricipal = ({ language }) => {
  const linkedin = 'https://www.linkedin.com/in/christopherpereiragomes1990';
  const gitHub = 'https://github.com/christopherpergo';

  return (
    <>
      <div className='entradaPadre'>
        <div className='presentacion'>
          <p className='shortPresentacion1'>
            {language === 'es' ? '¡Hola, soy yo!' : 'Hi, it\'s me'}
          </p>
          <h2 className='myName'>
            I'm <span className="miNombre">Christopher</span>
          </h2>
          <p className='shortPresentacion'>
            {language === 'es'
              ? 'Soy un Desarrollador Web Full Stack Jr. Mi principal objetivo es contribuir al éxito de clientes mediante soluciones de desarrollo, mientras continúo aprendiendo cada día. Estoy comprometido en ofrecer soluciones tecnológicas efectivas y satisfactorias.'
              : 'I am a Jr. Full Stack Web Developer. My main mission is to assist and satisfy local and global clients with development solutions, while continuing to learn every day.'}
          </p>
          <div className='logosP-container1'>
            <a href={linkedin} target='_blank' rel='noopener noreferrer'>
              <img className='logosIzq1' src='https://res.cloudinary.com/daacb3ohi/image/upload/v1697187581/pngwing.com_hd3cly.png' alt='LinkedIn Logo' />
            </a>
            <a href={gitHub} target='_blank' rel='noopener noreferrer'>
              <img className='logosDer2' src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697187581/pngwing.com_1_xzonru.png" alt='GitHub Logo' />
            </a>
          </div>
        </div>
        <div className="foto">
          <img className="fotoEntrada" src='https://res.cloudinary.com/daacb3ohi/image/upload/v1697489986/pngwing.com_12_n4vkjl.png' />
        </div>
        {/* <div className='miniLogos'>
        <img className='loguitos' src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697489985/pngwing.com_10_uynfkm.png" alt="" /><br></br>
            <img className='loguitos' src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697489985/pngwing.com_9_c7ebhp.png" alt="" /><br></br>
           <img className='loguitos' src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697489985/pngwing.com_11_ebqwr8.png"/><br></br>
            <img  className='loguitos'src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697219954/pngwing.com_8_b9psle.png" alt="" /><br></br>
           <img  className='loguitos5'src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697219954/pngwing.com_6_kewix7.png" alt="" /><br></br>
           <img className='loguitos5' src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697219953/pngwing.com_7_s58mqi.png" alt="" />
        </div> */}
      </div>
    </>
  );
};

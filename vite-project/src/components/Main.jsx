import React, { useState } from 'react';
import { Footer } from './Footer';

export const Main = () => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <>
      <div className='mainBigscreen'>
   

      <div className='padreAboutme'>

      <button className='idioma' onClick={toggleLanguage}>
          {language === 'es' ? 'View in English' : 'Cambiar a español'}
        </button>
        
      </div>
        <div className='padreAboutme'>



          <div className='aboutMe1'>
            <hr />
            {language === 'es' ? 'SOBRE MI' : 'ABOUT ME'}
          </div>

          
          <div className='aboutMe2'>
            <p>
              {language === 'es'
                ? 'Hola!, Mi nombre es Christopher, nací en 1990 en Brasil y siempre he tenido una pasión por los idiomas y la tecnología. Hablo con fluidez portugués, inglés, francés y español. Recientemente, obtuve un Certificado Profesionalidad de Nivel 3 en Desarrollo Web y me enamoré instantáneamente de JavaScript y React. Me enorgullezco de mi capacidad para abordar desafíos complejos, brindar un servicio al cliente de primera calidad y mantener un enfoque firme en el logro de mis objetivos, sin sacrificar la calidad del servicio. Mi trayectoria también me ha llevado a ser competente en diversas aplicaciones de software, y estoy constantemente ampliando mis conocimientos, con un énfasis particular en el Desarrollo Web Full Stack.'
                : 'Hi! My name is Christopher, I was born in 1990 in Brazil, and I have always had a passion for languages and technology. I\'m fluent in Portuguese, English, French, and Spanish. Recently, I obtained a Level 3 Professional Certificate in Web Development and instantly fell in love with JavaScript and React. I take pride in my ability to tackle complex challenges, provide top-notch customer service, and maintain a strong focus on achieving my goals without sacrificing service quality. My journey has also made me proficient in various software applications, and I\'m constantly expanding my knowledge, with a particular emphasis on Full Stack Web Development.'}
            </p>
            <br />
            <p>
              {language === 'es'
                ? 'A continuación, te invito a explorar algunos de los proyectos que he creado.'
                : 'Below, I invite you to explore some of the projects I\'ve created.'}
            </p>
          </div>
          <div className='foto-texto'>
            <img className='miFoto' src='https://res.cloudinary.com/daacb3ohi/image/upload/c_crop,ar_16:9/v1697189901/foto1_s9o2vu.webp' />
            <ul className='puntos'>
              <p>
                <strong>
                  {language === 'es'
                    ? 'Tecnologías de Desarrollo Web:'
                    : 'Web Development Technologies:'}
                </strong>
              </p>
              <ul>
                <li>
                  {language === 'es'
                    ? 'Lenguajes de marcado y estilo: HTML / CSS'
                    : 'Markup and Styling Languages: HTML / CSS'}
                </li>
                <li>
                  {language === 'es'
                    ? 'Lenguajes de programación: JavaScript / PHP'
                    : 'Programming Languages: JavaScript / PHP'}
                </li>
                <li>
                  {language === 'es'
                    ? 'Bibliotecas y Frameworks: Express.js / React.js / Angular'
                    : 'Libraries and Frameworks: Express.js / React.js / Angular'}
                </li>
                <li>
                  {language === 'es'
                    ? 'Base de datos: MongoDB / SQL'
                    : 'Databases: MongoDB / SQL'}
                </li>
                <li>
                  {language === 'es'
                    ? 'Entorno de servidor: Node.js'
                    : 'Server Environment: Node.js'}
                </li>
              </ul>
            </ul>
          </div>
          <div className='aboutMe3'>
         
            {language === 'es' ? 'SOBRE MI' : 'ABOUT ME'}
            <hr />
          </div>
        </div>
      </div>
    
      <div className='portfolio'>
        <h2 className='portfolioNombre'>
          {language === 'es' ? 'PORTAFOLIO' : 'PORTFOLIO'}
        </h2>
        <div className='padreProjects'>
          <div className='projectUP'>
            <img className='imagenesProjects' src='https://res.cloudinary.com/daacb3ohi/image/upload/v1696964477/ProjectoNasafoto_pvck5h.png' />
            <div className='infoWrapper'>
              <p className='infoPorjects'>
                {language === 'es'
                  ? 'Proyecto especial basado en API la NASA. Cada día, la NASA publica una nueva imagen tomada por su sonda espacial, y en mi sitio web, puedes ver esta imagen actualizada todos los días. Además, tienes la opción de explorar imágenes desde 1995. Este proyecto, desarrollado con HTML, CSS y JavaScript, te brinda una ventana al espacio y la oportunidad de explorar el cosmos desde la comodidad de tu dispositivo.'
                  : 'Special project based on NASA API. Every day, NASA publishes a new image taken by its space probe, and on my website, you can see this updated image every day. You also have the option to explore images from 1995. This project, developed with HTML, CSS, and JavaScript, provides you with a window to space and the opportunity to explore the cosmos from the comfort of your device.'}
              </p>
              <a className='linkProjects' href='https://apinasa-umber.vercel.app/inicio.html' target="_blank" rel='noopener noreferrer'>
                {language === 'es' ? 'Ver NASA API' : 'View NASA API'}
              </a>
            </div>
          </div>
          <div className='projectUP'>
            <img className='imagenesProjects' src='https://res.cloudinary.com/daacb3ohi/image/upload/v1696964412/fotoBlog_jblveh.png' />
            <div className='infoWrapper'>
              <p className='infoPorjects'>
                {language === 'es'
                  ? 'En este proyecto, creado con la potencia de REACT y respaldado por una base de datos MongoDB. Aquí puedes compartir tus propias aventuras, leer relatos inspiradores de otros viajeros y obtener valiosos consejos para tus próximos destinos. Además, hemos incorporado una función de búsqueda que te ayudará a encontrar el destino perfecto para tu próximo viaje.'
                  : 'In this project, created with the power of REACT and backed by a MongoDB database. Here you can share your own adventures, read inspiring stories from other travelers, and get valuable tips for your next destinations. We\'ve also incorporated a search feature to help you find the perfect destination for your next trip.'}
              </p>
              <a className='linkProjects' href='https://viajes-phi.vercel.app/' target="_blank" rel='noopener noreferrer'>
                {language === 'es' ? 'Ver Travel Blog' : 'View Travel Blog'}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer language={language} />
    </>
  );
};

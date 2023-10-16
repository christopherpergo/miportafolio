import React, { useState } from 'react';


export const Main = ({ language }) => {


  return (
    <>
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
   
    </>
  );
};

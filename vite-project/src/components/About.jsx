import React, { useState } from 'react';


export const About = ({ language }) => {

  


  return (
    <>
     <div className='mainBigscreen'>
  <div className='padreAboutme'>

   </div>
        <div className='padreAboutme'>
        <div className='aboutMe1'>
            <hr />
            {language === 'es' ? 'SOBRE MI' : 'ABOUT ME'}
          </div>

<div className='aboutMe2'>
            <p>{language === 'es'
                ? 'Hola!, Mi nombre es Christopher, nací en 1990 en Brasil y siempre he tenido una pasión por los idiomas y la tecnología. Hablo con fluidez portugués, inglés, francés y español. Recientemente, obtuve un Certificado Profesionalidad de Nivel 3 en Desarrollo Web y me enamoré instantáneamente de JavaScript y React. Me enorgullezco de mi capacidad para abordar desafíos complejos, brindar un servicio al cliente de primera calidad y mantener un enfoque firme en el logro de mis objetivos, sin sacrificar la calidad del servicio. Mi trayectoria también me ha llevado a ser competente en diversas aplicaciones de software, y estoy constantemente ampliando mis conocimientos, con un énfasis particular en el Desarrollo Web Full Stack.'
                : 'Hi! My name is Christopher, I was born in 1990 in Brazil, and I have always had a passion for languages and technology. I\'m fluent in Portuguese, English, French, and Spanish. Recently, I obtained a Level 3 Professional Certificate in Web Development and instantly fell in love with JavaScript and React. I take pride in my ability to tackle complex challenges, provide top-notch customer service, and maintain a strong focus on achieving my goals without sacrificing service quality. My journey has also made me proficient in various software applications, and I\'m constantly expanding my knowledge, with a particular emphasis on Full Stack Web Development.'}
            </p>
            <br />
            <p>{language === 'es'
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
    
    </>
  )
}

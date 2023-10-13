import React from 'react'

export const Main = () => {
  return (
    <>
    <div className='mainBigscreen'>
    <div className='padreAboutme'>
    <div className='aboutMe1'><hr/>SOBRE MI </div>
   
    <div className='aboutMe2'><p> Hola!, Mi nombre es Christopher, nací en 1990 en Brasil y siempre he tenido una pasión por los idiomas y la tecnología. Hablo con fluidez portugués, inglés, francés y español.
Recientemente, obtuve un Certificado Profesionalidad de Nivel 3 en Desarrollo Web y me enamoré instantáneamente de JavaScript y React. 
Me enorgullezco de mi capacidad para abordar desafíos complejos, brindar un servicio al cliente de primera calidad y mantener un enfoque firme en el logro de mis objetivos, sin sacrificar la calidad del servicio. Mi trayectoria también me ha llevado a ser competente en diversas aplicaciones de software, y estoy constantemente ampliando mis conocimientos, con un énfasis particular en el Desarrollo Web Full Stack.
<br/>A continuación, te invito a explorar algunos de los proyectos que he creado.</p></div>
<div className='foto-texto'>
<img className='miFoto' src='https://res.cloudinary.com/daacb3ohi/image/upload/c_crop,ar_16:9/v1697189901/foto1_s9o2vu.webp'/>
<ul className="puntos">
<p><strong>Tecnologías de Desarrollo Web:</strong></p>
       <li>Lenguajes de marcado y estilo: HTML / CSS</li>
        <li>Lenguajes de programación: JavaScript / PHP</li>
        <li>Bibliotecas y Frameworks: Express.js / React.js / Angular</li>
        <li>Base de datos: MongoDB / SQL</li>
        <li>Entorno de servidor: Node.js</li>
      </ul>
</div> 
   
    <div className='aboutMe3'>SOBRE MI <hr/></div>
    </div>
    </div>
<div className='portfolio'>

    <h2 className='portfolioNombre'>PORTAFOLIO</h2>
   <div className='padreProjects'>

<div className='projectUP'>
<img className='imagenesProjects' src='https://res.cloudinary.com/daacb3ohi/image/upload/v1696964477/ProjectoNasafoto_pvck5h.png'></img>
<div className='infoWrapper'>
<p className='infoPorjects'>Proyecto especial basado en API la NASA. Cada día, la NASA publica una nueva imagen tomada por su sonda espacial, y en mi sitio web, puedes ver esta imagen actualizada todos los días. Además, tienes la opción de explorar imágenes desde 1995.
Este proyecto, desarrollado con HTML, CSS y JavaScript, te brinda una ventana al espacio y la oportunidad de explorar el cosmos desde la comodidad de tu dispositivo."</p>
<a className='linkProjects' href="https://apinasa-umber.vercel.app/inicio.html" target="_blank" rel="noopener noreferrer">Ver NASA API </a>
</div>
</div>
<div className='projectUP'>
<img className='imagenesProjects' src='https://res.cloudinary.com/daacb3ohi/image/upload/v1696964412/fotoBlog_jblveh.png'></img>
<div className='infoWrapper'>
<p className='infoPorjects'>En este proyecto, creado con la potencia de REACT y respaldado por una base de datos MongoDB. Aquí puedes compartir tus propias aventuras, leer relatos inspiradores de otros viajeros y obtener valiosos consejos para tus próximos destinos. Además, hemos incorporado una función de búsqueda que te ayudará a encontrar el destino perfecto para tu próximo viaje. </p>
<a className='linkProjects' href='https://viajes-phi.vercel.app/' target="_blank" rel="noopener noreferrer">Ver Travel Blog</a>
</div> 
</div>
</div>
    </div>

  

    </>
  )
}

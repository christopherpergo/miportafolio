import React, { useState } from 'react';
import axios from 'axios';

export const Contact = ({ language }) => {
  const email = 'christopher.pg1990@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/christopherpereiragomes1990';
  const gitHub = 'https://github.com/christopherpergo';

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comentario) {
      setError('Por favor, ingresa tu comentario antes de enviar.');
      return;
    }

    axios
      .post('https://basedatosportfolio.onrender.com/createContacto', { nombre, correo, comentario })
      .then((result) => {
        setEnviado(true);
        setNombre('');
        setCorreo('');
        setComentario('');
      })
      .catch((err) => {
        setError('Error al enviar el comentario. Por favor, inténtalo de nuevo.');
      });
  };
const handleCloseEnviado = () => {
    setEnviado(false);
  };
const handleCloseError = () => {
    setError('');
  };


  return (
    <>
      <div className='paginaContacto'>
        <div className='contenedor2'>

    

          <div className='textoContenedor'>
            <h2 className='contacto'>
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h2>
            <div className='padreContacto'>

            <p className='textoFinal'>
              {language === 'es'
                ? 'Estoy buscando activamente oportunidades para colaborar con empresas, agencias y personas, en lugar de simplemente trabajar para ellas. Mi objetivo es aportar mis habilidades al equipo, donde juntos podamos abordar desafíos empresariales reales de una manera que aproveche toda nuestra experiencia y conocimiento colectivos. Espero con entusiasmo la posibilidad de formar parte de un gran equipo, así que no dudes en ponerte en contacto a través de cualquiera de las plataformas que se detallan a continuación...'
                : 'I am actively looking for opportunities to collaborate with companies, agencies, and individuals, rather than just work for them. My goal is to contribute my skills to the team, where together we can address real business challenges in a way that leverages all our collective experience and knowledge. I eagerly look forward to the possibility of being part of a great team, so feel free to get in touch through any of the platforms detailed below...'}
            </p>
        


<form onSubmit={handleSubmit}>

<div className='formContacto'>
  <h2>Let's Chat</h2>
<input className="input-control" placeholder="Tu Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input> <br />
<input className="input-control" placeholder="Tu Correo Electronico" value={correo} onChange={(e) => setCorreo(e.target.value)}></input> <br />
<textarea type="text" placeholder='Dejame tu comentario...' className="form-control" value={comentario} onChange={(e) => setComentario(e.target.value)}></textarea> <br />
<button className='botonForm'>Enviar</button>
</div>
       
      </form>
{enviado && ( <div className="message success">
          <p>Comentario ENVIADO con éxito.</p>
          <button className='close-button'onClick={handleCloseEnviado}> Cerrar </button>
        </div>
      )}
      {error && (
        <div className="message error">
          <p>{error}</p>
          <button className='close-button' onClick={handleCloseError}>
            Cerrar
          </button>
        </div>
      )}
</div>
</div>
 <div className='logoWeb'>
          <div className='logoFondo'></div>
             <div className='logoFondo3'></div>
            </div>
 
            </div>

  <div className='logoPadre'>
 <a href={`https://api.whatsapp.com/send?phone=+34651158543`} target="_blank" rel="noopener noreferrer">
   <img className='logosContacto' src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697187581/pngwing.com_2_.png_aynuai.png" />
  </a>
  <a href={linkedin} target='_blank' rel='noopener noreferrer'>
   <img className='logosContacto' src='https://res.cloudinary.com/daacb3ohi/image/upload/v1697187581/pngwing.com_hd3cly.png' />
  </a>
  <a href={gitHub} target="_blank" rel="noopener noreferrer">
   <img className='logosContacto' src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697187581/pngwing.com_1_xzonru.png" />
 </a>
 <a href={email} target="_blank" rel="noopener noreferrer">
   <img className='logosContacto' src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697187581/pngwing.com_2_.png_1_akiuvf.png" />
 </a>
        </div>
      </div>
    </>
  );
};

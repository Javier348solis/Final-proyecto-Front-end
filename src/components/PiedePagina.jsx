import React from 'react';

function PiedePagina() {
  // Función para manejar el clic en las imágenes y redireccionar
  const handleClick = (url) => {
    window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
  };

  return (
    <>
      <footer>
        {/* 
          Aquí se usa la función handleClick para cada imagen, pasando el URL correspondiente
          como argumento a la función.
        */}
        <img
          onClick={() => handleClick('https://www.facebook.com/')}
          src="src/Images/facebook (1).png"
          alt="Facebook"
          width={50}
          height={50}
        />
        <img
          onClick={() => handleClick('https://www.instagram.com/')}
          src="src/Images/social (1).png"
          alt="Instagram"
          width={50}
          height={50}
        />
        <img
          onClick={() => handleClick('https://web.whatsapp.com/')}
          src="src\Images\whatsapp.png"
          alt="WhatsApp"
          width={50}
          height={50}
        />
      </footer>
    </>
  );
}

export default PiedePagina;


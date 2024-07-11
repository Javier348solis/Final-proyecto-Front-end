import React from 'react'
import NavBar from '../components/NavBar'


function QuienesSomos() {
  return (
    <>
     <NavBar/>
    <main className='fondo3'>
     
     <div className='imagen-howarewe'>
     <h1 className='Titulo-quienes-somos'>Quienes Somos</h1> 
     <h4 className='Cambio-color-letra'>
         Elixir perfumes C.R nace como un emprendimiento de venta de las mejores marcas de perfumes del mercado, ofreciendo gran variedad de perfumes y con los mejores precios de toda Costa Rica. <br/>
         Nuestro proyecto inicio como una tienda virtual en 2020, justo cuando inicio la pandemia del covid-19, y hasta la fecha nos hemos consolidado tanto virtual como en tienda fisica. <br />
         Actualmente contamos con 120 de las mejores marcas de perfumes en el mercado como Carolina Herrera, Paco Rabanne, Giorgio Armani, Versace, Issey Miyake, Azzaro y 15 casas de perfumes arabes.
     </h4>
     </div>
    </main>
    </>
  )
}

export default QuienesSomos

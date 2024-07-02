import Carousel from 'react-bootstrap/Carousel';
import ImgC from './ImgC';
const CarouselC=()=>{
    return(
        <>
  <h3>Promociones</h3>
    <div className='Navbar-space'>
    <Carousel>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/chmen212.jpg"} text="₡40.000" />
        <Carousel.Caption>
          <h3>Carolina Herrera 212 men EDT 100 ml. ₡40.000"</h3>
          <p>CH 212 Men es una colonia citrica creada por el maestro de la perfumeria Alberto Morillas en 1999. Un clasico que jamas pasara de moda.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/CHWomen.jpg"}  text="₡42.000" />
        <Carousel.Caption>
          <h3>Carolina Herrera Women EDT 100ml. ₡42.000</h3>
          <p>Un perfume de verano especial para aquellas damas que les gusta lo citrico y lo floral.</p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/versaceeros.jpg"} text="₡55.000(200ml)" />
        <Carousel.Caption>
          <h3>Versace Eros EDT 100ml: ₡44.000. 200ml: ₡55.000</h3>
          <p>Eros, el dios del amor en un frasco de perfume? Descubre esta dulce y citrica fragancia. Una obra de arte!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/JPG.jpg"} text="Third slide" />
        <Carousel.Caption>
          <h3>Jean Paul Gaultier Ultra Male EDTI 100ml. ₡55.000</h3>
          <p>Toda la elegancia de JPG en un perfume</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/JPGWomen.jpg"} text="Third slide" />
        <Carousel.Caption>
          <h3>Scandal Women JPG EDP 100ml. ₡60.000</h3>
          <p>
            Una fragancia dulce y seductora para esas damas atrevidas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
     <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/Dior.jpg"} text="" />
        <Carousel.Caption>
          <h3>Sauvage Elixir C.Dior 50ml. ₡130.000</h3>
          <p>Es Sauvage pero Elixir, no necesita presentacion..!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/JPG Merry.jpg"} text="Third slide" />
        <Carousel.Caption>
          <h3>JPG Christmas collector limited edition 100ml. EDPI ₡65.000</h3>
          <p>Un perfume con la esencia de navidad, avainillado con toques amaderados y citricos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/JPG Le beau.jpg"} text="" />
        <Carousel.Caption>
          <h3>JPG Le beau Garden Paradise EDP 100ml. ₡60.000</h3>
          <p>Un nuevo lanzamiento de JPG, afrutado, citrico y notas verdes que lo convierte en un perfume muy versatil.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/Kylian.jpg"} text="" />
        <Carousel.Caption>
          <h3>Black Phantom By Kilian Parfum 50ml. ₡280.000</h3>
          <p>
            Un perfume poderoso y elegante para ocasiones especiales.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/Bad boy.jpg"} text="" />
        <Carousel.Caption>
          <h3>Bad Boy Le Parfum EDP 100ml. ₡60.000</h3>
          <p>Una fragancia dulce, amaderada con notas de cuero y cannabis.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/Bad boy2.jpg"} text="" />
        <Carousel.Caption>
          <h3>Bad Boy cobalt EDP 100ml. ₡55.000</h3>
          <p>Un perfume afrutado con notas verdes, ideal para verano.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/ombre le.jpg"} text="" />
        <Carousel.Caption>
          <h3>Tom Ford Ombre Lether Parfum 100ml. ₡205.000</h3>
          <p>Deliciosas notas de cuero y amaderadas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/Tom Ford.jpg"} text="" />
        <Carousel.Caption>
          <h3>Tom Ford Costa Azzura 100ml. ₡170.000</h3>
          <p>Todo el verano italiano en un frasco de perfume, notas acuaticas se mezclan don notas verdes y frutales.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/Dolce.jpg"} text="" />
        <Carousel.Caption>
          <h3>l'imperatrice D&G 100ml. ₡70.000</h3>
          <p>
          Un perfume dulce y elegante para las damas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/Yves.jpg"} text="" />
        <Carousel.Caption>
          <h3>Libre Yves Saint Laurent Parfum Women 100ml. ₡70.000</h3>
          <p>Una fragancia dulce y poderosa para momentos especiales.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImgC src={"src/Images/Azzaro.jpg"} text="" />
        <Carousel.Caption>
          <h3>Azzaro Wanted EDT 100ml. ₡50.000</h3>
          <p>Citrica y amaderada, ideal para cualquier tiempo o ocasion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
        </>
    )
}
export default CarouselC
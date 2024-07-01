import Carousel from 'react-bootstrap/Carousel';
import ImgC from './ImgC';
const CarouselC=()=>{
    return(
        <>
  <h3>Promociones</h3>
    <div className='Navbar-space'>
    <Carousel>
      <Carousel.Item interval={3000}>
        <ImgC src={"src/Images/chmen212.jpg"} text="₡40.000" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ImgC src={"src/Images/CHWomen.jpg"}  text="₡42.000" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ImgC src={"src/Images/versaceeros.jpg"} text="₡55.000(200ml)" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ImgC src={"src/Images/JPG.jpg"} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ImgC src={"src/Images/JPGWomen.jpg"} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
        </>
    )
}
export default CarouselC
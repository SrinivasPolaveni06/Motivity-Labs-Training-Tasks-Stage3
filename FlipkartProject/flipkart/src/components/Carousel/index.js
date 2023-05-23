import Carousel from "react-bootstrap/Carousel";
import "./index.css";
function UncontrolledExample() {
  return (
    <Carousel
      variant="dark"
      nextIcon={
        <span
          aria-hidden="true"
          className="btn btn-success carousel-control-next-icon"
        />
      }
      prevIcon={
        <span
          aria-hidden="true"
          className="btn btn-primary carousel-control-prev-icon"
        />
      }
    >
      {/* <span aria-hidden="true" className="btn btn-primary carousel-control-next-icon" /> */}
      {/* <span className="glyphicon glyphicon-glass"></span> */}
      <Carousel.Item>
        <img
          className="d-block carouselImage"
          src="https://blog.talkcharge.com/wp-content/uploads/2020/09/Flipkart-Upcoming-Sale.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselImage"
          src="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/flipkart-sp-deal-1.png"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselImage "
          src="https://assets.mspimages.in/wp-content/uploads/2021/10/Flipkart-Big-billion-days-2021-featured-image-1.jpeg"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselImage"
          src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/nmiveabcr0iu2mwv_1615273044.jpeg"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselImage"
          src="https://www.shopickr.com/wp-content/uploads/2018/08/flipkart-offers-banner.png"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

import { Carousel } from "react-bootstrap";

//TODO:
//- width: 100vw and height 70vh for mobile
//- discover good values for landscape
//- these values should go do div.carousel.slide.carousel-dark
//- force div.carousel-caption to bottom of grandfather, might need to change div.carousel-inner and div.carousel-item sizes.
//- decent title
//- add neogelk
//- add Portal do Jurisdicionado
//- add this portfolio (NEXTjs)
export default function Apps() {
  return (<>
    <p>apps page</p>
    <Carousel variant="dark" interval={10000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/numeroum-main.png"
          alt="Número Um"
        />
        <Carousel.Caption>
          <h3>Número Um</h3>
          <p>Webapp designed to work as a small CRM for door-to-door sales representatives.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="/imgs/numeroum-detail1.png"
          alt="Número Um"
        />

        <Carousel.Caption>
          <h3>Número Um</h3>
          <p>Frontend written using VueJS and Material Design. Backend powered by NestJS, TypeORM, Postgres.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/msltracker-main.png"
          alt="MSL Tracker"
        />

        <Carousel.Caption>
          <h3>MSL Tracker</h3>
          <p>Health tracker built using VueJS and Firebase for all backend needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>);
}
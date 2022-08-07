import { Carousel } from "react-bootstrap";
import styles from '../styles/Apps.module.css'

//TODO:
//- fix vertical image centering
//- discover good values for landscape
//- add neogelk
//- add Portal do Jurisdicionado
//- add this portfolio (NEXTjs)
export default function Apps() {
  return (<section className={styles.section}>
    <h1 className="text-center">Apps</h1>
    <Carousel variant="dark" interval={10000}>
      <Carousel.Item>
        <img
          className="img-fluid"
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
          className="img-fluid mx-auto"
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
          className="img-fluid"
          src="/imgs/msltracker-main.png"
          alt="MSL Tracker"
        />

        <Carousel.Caption>
          <h3>MSL Tracker</h3>
          <p>Health tracker built using VueJS and Firebase for all backend needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>);
}
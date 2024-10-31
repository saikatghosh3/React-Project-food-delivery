import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from "../../assets/about/pizza.png"
import Salad from "../../assets/about/salad.png"
import Delivery from "../../assets/about/delivery-bike.png"

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  // Add more mock data objects as needed
];

export const Section2 = () => {
  return (
    <> 
   <section className='about_section'>
    <Container>
      <Row>
        <Col lg={{span:8, offset:2}} className='text-center'>
          <h2>The burger taste better when you eat it with your friends</h2>
          <p>This is the very special burger,once you eat, you'll never gona forget. 
            No additional suger is added. It is totally organic, and fat free. Instead of animal meat
            the artificial meat is used . which is reach in more protin. 
          </p>
          <Link to="/" className="btn order_now btn_red">
            Explore Full Menu
          </Link>
        </Col>
      </Row>
    </Container>
   </section>
   <section className='about_wrapper'>
    <Container>
      <Row className='Justify-content-md-center'>{mockData.map((cardData, index)=>(
        <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
          <div className='about_box text-center'>
            <div className='about_icon'>
              <img src = {cardData.image} className='img-fluid' alt='icon' />
            </div>
            <h4>{cardData.title}</h4>
            <p>{cardData.paragraph}</p>
          </div>

        </Col>
      ))}

      </Row>
    </Container>
   </section>
   </>
  )
}
export default Section2
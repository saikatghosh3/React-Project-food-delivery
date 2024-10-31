import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Burger from "../../assets/hero/hero-2.png";
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <section className='hero_section'>
        <Container>
            <Row>
                <Col lg={7}className='mb-5 mb-lg-0'>
                  <div className='position-relative'>
                    <img src={Burger} className='img-fluid' alt='Hero'/>
                     <div className='price_badge'>
                    <div className='badge_text'>
                        <h4 className='h4_xs'>Only</h4>
                        <h4 className='h4_lg'>$6.99</h4>
                    </div>
                     </div>
                  
                  </div>
                </Col>
                <Col lg={5}>
                    <div className='hero-Text text-center'>
                        <h1 className='text-white'>New Burger</h1>
                        <h2 className='text-white'>With Onion</h2>
                        <p className='text-white pt-2 pb-4'>standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and
                              scrambled it to make a type specimen book.
                               It has survived not only five centuries, 
                               but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                             It was popularised in the 1960s with the 
                        </p>
                        <Link to = "/" className='btn order_now'>
                            Order Now
                        </Link>
                    </div>
                </Col>
                </Row>
                </Container> 

    </section>
  )
}

export default Section1
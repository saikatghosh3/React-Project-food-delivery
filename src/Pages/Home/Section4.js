import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PromotionImage from "../../assets/promotion/pro.png"

function Section4() {
  return (
   <>
   <section className='Promotion_section'>
    <Container>
        <Row className='align-items-center'>
            <Col lg={6} className='text-center mb-5 mb-lg-0'>
                   <img src={PromotionImage} className='img-fluid' alt='Promotion' />   
            </Col>
            <Col lg={6} className='px-5'>
            <h2> Nothing brings people together like a good burger</h2>
            <p> t is a long established fact that a reader will be distracted by the readable content of 
                a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                 Many desktop publishing packages and</p>
                 <ul>
                    <li>
                        <p>The point of using Lorem Ipsum is that it ha, opposed to using 'Content here, content here',
                             making it look like readable English. </p>
                    </li>
                    <li>
                        <p>The point of using Lorem Ipsum is that it ha, opposed to</p>
                    </li>
                    <li>
                        <p>The point of using Lorem Ipsum is that it ha, opposed to using 'Content here, content here',
                             making it look like readable English. </p>
                    </li>
                 </ul>
            </Col>
        </Row>
    </Container>
   </section>
   {/* BG parallax scroll */}
   <section className='bg_parallax_scroll'></section>
   </>
  )
}

export default Section4
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function About() {

  return(
    <>
    <Container>
      <Row md={2} sm={1}>
        <Col><img src="" alt=""></img></Col>
        <Col>
          <div className="about">
            <p>Hi, I'm Max! I'm a Full Stack Developer based out of Portland, OR. I began my journey as a developer back in 2019, teaching myself all the basics. From there I took mulitple online courses, and eventually went to a coding bootcamp. Along the way I helped a friend start their freelance business <a href="https://www.umbrellaavenue.com/">Umbrella Avenue</a>, worked on projects of my own, and got to have an amazing internship with a local software development company.</p>
            <p></p>
          </div>
          
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default About;
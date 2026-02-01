import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from 'react-bootstrap/Image';

import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import me from './assets/mecrop.jpg';
import preview_jobtracker from './assets/jobtracker.png';
import preview_jobtracker1 from './assets/jobtracker1.png';


function App() {

  return (
    <>
      {/* Title */}
      <Container style={{ paddingTop: '50px', paddingBottom: '24px' }} >
        <Row className="justify-content-center align-items-center">
          <Col xs="auto">
            <Image src={me} style={{ height: '200px', borderRadius: '10px' }} fluid />
          </Col>
          <Col xs="auto" style={{ textAlign: 'left' }}>
            <h1>Fasku's Portfolio</h1>
            <p style={{ fontSize: '1.2rem' }}>Hello! this is just a little portfolio of projects I have worked on! <br /> A little about me is I love to sing, game and do content creation :)</p>
            <p style={{ fontSize: '1.2rem' }}>GitHub: Fasku1 | Discord: Fasku</p>

          </Col>
        </Row>
      </Container>

      {/* Porfolio */}
      <Container >
        <Row style={{ paddingBottom: '50px' }} className="justify-content-center">
          <Col xs="auto" className="mb-4">
            <a href="https://github.com/fasku1/job-tracker-project" target="_blank" style={{ textDecoration: 'none' }} className="card-link">
              <Card style={{ width: '35rem' }} className="card">
                <Carousel>
                  <Carousel.Item>
                    <Card.Img variant="top" src={preview_jobtracker} className="portfolio-img" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={preview_jobtracker1} className="portfolio-img" />
                  </Carousel.Item>
                </Carousel>
                <Card.Body>
                  <Card.Title style={{ fontSize: '2rem' }}>Job Tracker App</Card.Title>
                  <Card.Text style={{ fontSize: '1.5rem' }}>
                    A full-stack web application that is designed to make it easy for people to keep track of all the jobs that they apply to built of React using google cloud platform API.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs="auto" className="mb-4">
            <Card style={{ width: '35rem' }}>
              <Carousel>
                <Carousel.Item>
                  <Card.Img variant="top" src={preview_jobtracker} className="portfolio-img" />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img variant="top" src={preview_jobtracker1} className="portfolio-img" />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title style={{ fontSize: '2rem' }}>Fraud Detection App</Card.Title>
                <Card.Text style={{ fontSize: '1.5rem' }}>
                  A real-time transaction monitoring app built with AWS and Twilio that detects potentially fraudulent transactions and notifies users in real-time via SMS.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto" className="mb-4">
            <Card style={{ width: '35rem' }}>
              <Carousel>
                <Carousel.Item>
                  <Card.Img variant="top" src={preview_jobtracker} className="portfolio-img" />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img variant="top" src={preview_jobtracker1} className="portfolio-img" />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title style={{ fontSize: '2rem' }}>Campus Rating App</Card.Title>
                <Card.Text style={{ fontSize: '1.5rem' }}>
                  Another full-stack web application to help students discover campus locations suited for specific activities like studying, relaxing, or napping built of React, Spring Boot, and MySQL.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto" className="mb-4">
            <Card style={{ width: '35rem' }} className="border-white">
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App

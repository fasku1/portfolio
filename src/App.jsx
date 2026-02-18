import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import Image from 'react-bootstrap/Image';
import { useEffect, useRef } from 'react';

import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import me from './assets/pictures/icons/mecrop.jpg';
import github_logo from './assets/pictures/icons/github-logo.svg'
import linkedin_logo from './assets/pictures/icons/linkedin-logo.png'
import discord_logo from './assets/pictures/icons/discord-logo.png'

import preview_jobtracker from './assets/pictures/jobtracker/jobtracker.png';
import preview_jobtracker1 from './assets/pictures/jobtracker/jobtracker1.png';

import preview_fraud from './assets/pictures/fraud/aws-lambda-logo.png';
import preview_fraud1 from './assets/pictures/fraud/common-phone-scams.avif';

import preview_campusrating from './assets/pictures/campusrating/CampusRatingAppFigma.jpg'
import preview_campusrating0 from './assets/pictures/campusrating/CampusRatingAppFigma0.jpg'
import preview_campusrating1 from './assets/pictures/campusrating/CampusRatingAppFigma1.jpg'

import wiiSound from './assets/sounds/wii-disc.mp3';
import wiiClick from './assets/sounds/wii-click.mp3'
import wiiHover from './assets/sounds/wii-hover.wav'



function App() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);



  function play() {
    new Audio(wiiSound).play()
  }
  function click() {
    const audio = new Audio(wiiClick)
    audio.volume = 0.5 // 20% volume
    audio.play()
  }

  function hover() {
    new Audio(wiiHover).play()
  }

  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <>
      {/* <div class="fade-overlay"></div> */}


      {/* Title */}
      {/*  onAnimationStart={play} // trying to play audio at start of launch for webpage */}
      <Container style={{ paddingTop: '50px', paddingBottom: '24px' }} className="pushdown-overlay">
        <Row className="justify-content-center align-items-center">
          <Col xs="auto">
            <Image src={me} style={{ height: '200px', borderRadius: '10px' }} fluid />
          </Col>
          <Col xs="auto" style={{ textAlign: 'left' }}>
            <h1>Fasku's Portfolio</h1>

            <p style={{ fontSize: '1.2rem' }}>Hello! this is just a little portfolio of projects I have worked on! <br /> A little about me is I love to sing, game and do content creation :)</p>


            <Row className="gx-2 "> {/* gx-2 keeps them close like we discussed */}
              <Col xs="auto">
                <Image src={github_logo} style={{ height: '20px' }} />
              </Col>
              <Col xs="auto">
                <p className="mb-0" style={{ fontSize: '1.2rem' }}>
                  <strong>GitHub</strong>: <a href="https://github.com/fasku1" target="_blank">Fasku1</a> |
                </p>
              </Col>

              <Col xs="auto">
                <Image src={linkedin_logo} style={{ height: '20px' }} />
              </Col>
              <Col xs="auto">
                <p className="mb-0" style={{ fontSize: '1.2rem' }}>
                  <strong>Linked In</strong>: <a href="https://www.linkedin.com/in/ethan-l-yang/" target="_blank">Ethan Yang</a> |
                </p>
              </Col>

              <Col xs="auto">
                <Image src={discord_logo} style={{ height: '20px' }} />
              </Col>
              <Col xs="auto">
                <p className="mb-0" style={{ fontSize: '1.2rem' }}>
                  <strong>Discord</strong>: <a>Fasku</a>
                </p>
              </Col>

            </Row>

          </Col>
        </Row>
      </Container>

      {/* Porfolio */}
      <Container >
        <Row style={{ paddingBottom: '50px' }} className="justify-content-center ">
          <Col xs="auto" style={{ '--delay': 1 }} className="mb-4 stagger-item">
            <a href="https://github.com/fasku1/job-tracker-project" target="_blank" style={{ textDecoration: 'none' }} className="card-link" onClick={click} onMouseEnter={hover}>
              <Card style={{ width: '35rem' }} className="card" >
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
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs="auto" style={{ '--delay': 3 }} className="mb-4 stagger-item">
            <Card style={{ width: '35rem' }}>
              <Carousel onClick={click}>
                <Carousel.Item>
                  <Card.Img variant="top" src={preview_fraud} className="portfolio-img" style={{ height: 'auto' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img variant="top" src={preview_fraud1} className="portfolio-img" />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title style={{ fontSize: '2rem' }}>Fraud Detection App</Card.Title>
                <Card.Text style={{ fontSize: '1.5rem' }}>
                  A real-time transaction monitoring app built with AWS and Twilio that detects potentially fraudulent transactions and notifies users in real-time via SMS.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto" style={{ '--delay': 5 }} className="mb-4 stagger-item">
            <Card style={{ width: '35rem' }}>
              <Carousel onClick={click}>
                <Carousel.Item>
                  <Card.Img variant="top" src={preview_campusrating} className="portfolio-img" />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img variant="top" src={preview_campusrating0} className="portfolio-img" />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img variant="top" src={preview_campusrating1} className="portfolio-img" />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title style={{ fontSize: '2rem' }}>Campus Rating App</Card.Title>
                <Card.Text style={{ fontSize: '1.5rem' }}>
                  Another full-stack web application to help students discover campus locations suited for specific activities like studying, relaxing, or napping built of React, Spring Boot, and MySQL.
                </Card.Text>
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

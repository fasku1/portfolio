import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import preview_jobtracker from './assets/jobtracker.png';


function App() {

  return (
    <>
      <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <h1>Fasku's Portfolio</h1>
      </div>
      <Container >
        <Row style={{ paddingBottom: '50px' }} className="justify-content-center">
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={preview_jobtracker} className="portfolio-img"/>
            <Card.Body>
              <Card.Title>Job Tracker App</Card.Title>
              <Card.Text>
                A full-stack web application that is designed to make it easy for people to keep track of all the jobs that they apply to built of React using google cloud platform API.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>

    </>
  )
}

export default App

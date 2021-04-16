import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Counter } from './features/counter/Counter';
import { AircraftList } from './features/aircrafts/AircraftList';
import { FlightList } from './features/flights/FlightList';

import './App.css';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { Row, Col, ProgressBar } from "react-bootstrap";
import CSS from 'csstype';

const headerStyles: CSS.Properties = {
  padding: '0.5rem',
  margin: '5px',
  height: '100px',
};

const ps: CSS.Properties = {
  height: '40px',
};

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
        {/* className="App-header" */}
          <header >
          <h1> Aircraft Scheduling </h1>
          </header>
        </Row>

        <Row>
          <Col xs={6} md={3}>
          <AircraftList/>

          </Col>
          <Col xs={6} md={6}>
            {[
              'primary',
            ].map((variant, idx) => (
              <Alert key={idx} variant={variant}>
                This is a {variant} alert—check it out!
              </Alert>
            ))}
            <div>
              <ProgressBar style={ps}>
                <ProgressBar striped variant="success" now={35} key={1} label={"Test"} />
                <ProgressBar variant="warning" now={20} key={2} />
                <ProgressBar striped variant="danger" now={10} key={3} />
              </ProgressBar>
            </div>
          </Col>
          <Col xs={6} md={3}>
              <FlightList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

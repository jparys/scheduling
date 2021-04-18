import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import { AircraftList } from './features/aircrafts/AircraftList';
import { FlightList } from './features/flights/FlightList';
import { RotationDetails } from './features/rotation/RotationDetails';
import Container from 'react-bootstrap/Container';
import { Row, Col} from "react-bootstrap";

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
            <RotationDetails/>            
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

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import React from 'react';
import { AircraftList } from './features/aircrafts/AircraftList';
import { FlightList } from './features/flights/FlightList';
import { RotationDetails } from './features/rotation/RotationDetails';
import { Notification } from './features/notification/Notification';
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";
//import DatePicker from "react-bootstrap-date-picker"
import DatePicker from "react-datepicker";


function addDays(date: Date, days: number): Date {
  date.setDate(date.getDate() + days);
  return date;
}

function App() {
  return (
    <div className="App">
      <Notification/>
      <Container>
        <Row>
          {/* className="App-header" */}
          <header >
            <h1> Aircraft Scheduling </h1>
          </header>
        </Row>

        <Row>
          <Col xs={6} md={3}>
          </Col>
          <Col xs={6} md={6}>
            <div className={'date-picker-container'}>
            <DatePicker  dateFormat={"P"} disabled={true} selected={addDays(new Date(),1)} onChange={() => { }}>
            </DatePicker>
            <br />
            
            </div>
          </Col>
          <Col xs={6} md={3}>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <AircraftList />

          </Col>
          <Col xs={6} md={6}>
            <RotationDetails />
          </Col>
          <Col xs={6} md={3}>
            <FlightList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

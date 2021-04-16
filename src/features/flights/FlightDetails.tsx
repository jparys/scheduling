import React from 'react';
import Alert from 'react-bootstrap/Alert';
//import ' /App.css';
// import {
//     selectAircraft,
//     fetchAircraftsAsync,
//     selectAircrafts
// } from './flightSlice'

import Container from 'react-bootstrap/Container';
import { Row, Col, ProgressBar } from "react-bootstrap";
import CSS from 'csstype';

import { Flight, } from './types'

import { useAppSelector, useAppDispatch } from '../../app/hooks';

export function FlightDetails(props: Flight) {
    const dispatch = useAppDispatch();
    return (
        <div>
            <Alert
                key={props.id}
                variant={'success'}
            >
                <b>
                {props.id}
                </b>
                <Container>
                    <Row>
                        <Col>
                            <div>{props.origin}</div>
                            <div>{props.readable_departure}</div>
                        </Col>
                        <Col>
                            <div>{props.destination}</div>
                            <div>{props.readable_arrival}</div>
                        </Col>
                    </Row>
                </Container>
            </Alert>
        </div>
    );
}
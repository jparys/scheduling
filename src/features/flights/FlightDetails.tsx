import React from 'react';
import Alert from 'react-bootstrap/Alert';
//import { ArrowRight } from 'react-bootstrap-icons';
import * as Icon from 'react-bootstrap-icons';

import {
    schedule
} from './flightSlice'

import {
    scheduleFlightAction
} from '../rotation/rotationSlice'

import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";


import { Flight, } from '../../common/types'
import { useAppDispatch } from '../../app/hooks';

export function FlightDetails(props: Flight) {
    const dispatch = useAppDispatch();
    return (
        <div>
            <Alert
                key={props.id}
                variant={'success'}
            >

                <Icon.PlusCircle 
                onClick={() =>{
                    dispatch(schedule(props.id))
                    dispatch(scheduleFlightAction(props))

                }} 
                 size={30} ></Icon.PlusCircle>
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
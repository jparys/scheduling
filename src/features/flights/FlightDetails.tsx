import React from 'react';
import Alert from 'react-bootstrap/Alert';
import * as Icon from 'react-bootstrap-icons';
import { schedule } from './flightSlice'
import { scheduleFlightAction } from '../rotation/rotationSlice'
import { Row, Col,Container } from "react-bootstrap";
import { Flight, } from '../../common/types'
import { useAppDispatch } from '../../app/hooks';

export function FlightDetails(props: Flight) {
    const dispatch = useAppDispatch();
    return (
        <div>
            <Alert
                key={props.id}
                variant={'success'} >
                <Container>
                    <Row>
                        <Col className={'text-left left'}>
                            <Icon.ArrowLeftCircle
                                onClick={() => {
                                    dispatch(schedule(props.id))
                                    dispatch(scheduleFlightAction(props))
                                }}
                                size={30} >
                            </Icon.ArrowLeftCircle>
                        </Col>
                        <Col>
                            <b>{props.id}</b>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
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
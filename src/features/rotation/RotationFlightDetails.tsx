import React from 'react';
import Alert from 'react-bootstrap/Alert';
import * as Icon from 'react-bootstrap-icons';
import { removeFlightAction } from './rotationSlice'
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";
import { Flight, } from '../../common/types'
import { useAppDispatch } from '../../app/hooks';

import { FlightTakeoff, FlightLand } from '@material-ui/icons';

export function RotationFlightDetails(props: Flight) {
    const dispatch = useAppDispatch();
    return (
        <div>
            <Alert
                key={props.id}
                variant={'success'} >
                <Container>
                    <Row>
                        <Col>
                            <div className={'float-left'}>
                                <b>
                                    Flight: {props.id}
                                </b>
                            </div>
                        </Col>
                        <Col >
                            <Icon.FileMinus
                                className={'float-right'}
                                onClick={() => {
                                    dispatch(removeFlightAction(props.id))
                                }} size={30}
                            ></Icon.FileMinus>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>{props.origin}</div>
                            <div>{props.readable_departure}</div>
                        </Col>
                        <Col>
                            <FlightTakeoff />
                        </Col>
                        <Col>
                            <Icon.ArrowRight></Icon.ArrowRight>
                        </Col>
                        <Col>
                            <FlightLand />
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
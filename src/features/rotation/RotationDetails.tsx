import React, { useEffect } from 'react';
import { selectCurrentRotation, createIfNotExists } from './rotationSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectedAircraft } from '../aircrafts/aircraftSlice'
import { RotationFlights } from './RotationFlights'
import Alert from 'react-bootstrap/Alert';

export function RotationDetails() {
    const dispatch = useAppDispatch();
    const rotationDetaild = useAppSelector(selectCurrentRotation)
    const selectedAicraft = useAppSelector(selectedAircraft);

    useEffect(() => {
        if (selectedAicraft)
            dispatch(createIfNotExists(selectedAicraft?.ident || ""));
    }, [selectedAicraft, dispatch]);

    return (
        <div>
            <Alert
                key={0}
                variant={'success'} >
                Aircraft: <b> {rotationDetaild?.aircraftId} </b>
                <br />
            </Alert>
            <RotationFlights flights={rotationDetaild?.flights || []}></RotationFlights>
        </div>
    );
}
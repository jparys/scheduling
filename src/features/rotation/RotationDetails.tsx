import React, { useEffect } from 'react';
import {selectCurrentRotation, createIfNotExists} from './rotationSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectedAircraft } from '../aircrafts/aircraftSlice'
import {RotationFlights} from './RotationFlights'

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
            Rotation id: {rotationDetaild?.id}
            <br />
            Aircraft id: {rotationDetaild?.aircraftId}
            <br />
            Rotation for aircraft: {selectedAicraft?.ident}

            <br/>  
            <RotationFlights flights={rotationDetaild?.flights|| []}></RotationFlights>      
        </div>
    );
}
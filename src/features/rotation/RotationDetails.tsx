import React from 'react';
import Alert from 'react-bootstrap/Alert';
// import {
//     selectAircraft,
//     fetchAircraftsAsync,
//     selectAircrafts
// } from './aircraftSlice'
// import { Aircraft, AircraftState } from './types'
import { useAppSelector } from '../../app/hooks';
import {
    selectFlights
} from '../flights/flightSlice'

import {selectedAircraft} from '../aircrafts/aircraftSlice'

export function RotationDetails() {
    //const dispatch = useAppDispatch();
    const aircraftsListState = useAppSelector(selectFlights);
    const selectedAicraft = useAppSelector(selectedAircraft);
    return (
        <div>
            Rotation for aircraft: {selectedAicraft?.ident}
            {aircraftsListState.flights
                .filter(e => e.scheduled === true)
                .map((value) => (
                    <Alert variant={'secondary'}>
                        {value.id} - From {value.origin} To {value.destination}
                    </Alert>
                ))}

        </div>
    );
}
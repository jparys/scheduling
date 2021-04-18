
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchFlightsAsync, selectFlights } from './flightSlice'
import { selectedAircraft } from '../aircrafts/aircraftSlice'
import { selectLastLocation, selectLastArrivalTime } from '../rotation/rotationSlice'
import { FlightDetails } from './FlightDetails'
import Alert from 'react-bootstrap/Alert';

export function FlightList() {
    const dispatch = useAppDispatch();
    const flightSliceState = useAppSelector(selectFlights);
    const selectedAicraft = useAppSelector(selectedAircraft);
    const lastArrivalTime = useAppSelector(selectLastArrivalTime);
    const lastLocation = useAppSelector(selectLastLocation)

    useEffect(() => {
        let origin = selectedAicraft?.base
        if (lastLocation)
            origin = lastLocation
        dispatch(fetchFlightsAsync({ origine: origin || "", time: lastArrivalTime }));
    }, [selectedAicraft, lastArrivalTime, lastLocation, dispatch]);

    const listHeader = (<Alert
        variant={'success'} >
        Flights from: <b> {lastLocation || selectedAicraft?.base} </b>
    </Alert>)

    if (flightSliceState.status === 'loading') {
        return (<div>
            {listHeader}
            <br />
            Loading...
        </div>)
    }
    return (
        <div>
            {listHeader}
            {flightSliceState
                .flights
                .filter(e => e.scheduled !== true)
                .map((value, idx) => (
                    <FlightDetails {...value}></FlightDetails>
                ))}

        </div>
    );
}
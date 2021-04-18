
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchFlightsAsync, selectFlights } from './flightSlice'
import { selectedAircraft } from '../aircrafts/aircraftSlice'
import { selectLastLocation, selectLastArrivalTime } from '../rotation/rotationSlice'
import { FlightDetails } from './FlightDetails'

export function FlightList() {
    const dispatch = useAppDispatch();
    const flightSliceState = useAppSelector(selectFlights);
    const selectedAicraft = useAppSelector(selectedAircraft);
    const lastArrivalTime = useAppSelector(selectLastArrivalTime);
    const lastLocation = useAppSelector(selectLastLocation)

    useEffect(() => {

        console.log(lastLocation)
        console.log(selectedAicraft)
        console.log(lastArrivalTime)
        let origin = selectedAicraft?.base
        if (lastLocation)
            origin = lastLocation
        //const origin = selectedAicraft?.base
        dispatch(fetchFlightsAsync({ origine: origin || "", time: lastArrivalTime }));
    }, [selectedAicraft, lastArrivalTime, lastLocation, dispatch]);

    if (flightSliceState.status === 'loading') {
        return (<div>Loading...</div>)
    }
    return (
        <div>
            Flight list: for base {selectedAicraft?.base}
            {flightSliceState
                .flights
                .filter(e => e.scheduled !== true)
                .map((value, idx) => (
                    <FlightDetails {...value}></FlightDetails>
                ))}

        </div>
    );
}
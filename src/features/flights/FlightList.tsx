
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { store } from '../../app/store';
import {
    fetchFlightsAsync,
    selectFlights
} from './flightSlice'

import {selectedAircraft} from '../aircrafts/aircraftSlice'
import { FlightDetails } from './FlightDetails'

setTimeout(() => {
    store.dispatch(fetchFlightsAsync("LFSB"));
}, 0);

export function FlightList() {
    const dispatch = useAppDispatch();
    const aircraftsListState = useAppSelector(selectFlights);
    const selectedAicraft = useAppSelector(selectedAircraft);

    useEffect(() => {
        dispatch(fetchFlightsAsync(selectedAicraft?.base|| ""));
      }, [selectedAicraft, dispatch]); 

    if (aircraftsListState.status === 'loading') {
        return (<div>Loading...</div>)
    }
    return (
        <div>
            Flight list: for base {selectedAicraft?.base}
            {aircraftsListState
                .flights
                .filter(e => e.scheduled !== true)
                .map((value, idx) => (
                    <FlightDetails {...value}></FlightDetails>
                ))}

        </div>
    );
}
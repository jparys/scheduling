
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { store } from '../../app/store';
import {
    fetchAircraftsAsync,
    selectAircrafts
} from './aircraftSlice'
import { AircraftDetails } from './AircraftDetails'

setTimeout(() => {
    store.dispatch(fetchAircraftsAsync());
}, 0);

export function AircraftList() {
    const aircraftsListState = useAppSelector(selectAircrafts);
    if (aircraftsListState.status === 'loading') {
        return (<div>Loading...</div>)
    }
    return (
        <div>
            Aircraft list:
            {aircraftsListState
                .aircrafts
                .map((value, idx) => (
                    <AircraftDetails {...value}></AircraftDetails>
                ))}

        </div>
    );
}

import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { store } from '../../app/store';
import {
    fetchAircraftsAsync,
    selectAircrafts
} from './aircraftSlice'
import { AircraftDetails } from './AircraftDetails'
import Alert from 'react-bootstrap/Alert';

setTimeout(() => {
    store.dispatch(fetchAircraftsAsync());
}, 0);

export function AircraftList() {
    const aircraftsListState = useAppSelector(selectAircrafts);
    if (aircraftsListState.status === 'loading') {
        return (<div>
            <Alert
                variant={'success'} >
                <b> Aircrafts </b>
            </Alert>
            <br/>
            Loading...</div>)
    }
    return (
        <div>
            <Alert
                variant={'success'} >
                <b> Aircrafts </b>
            </Alert>
            {aircraftsListState
                .aircrafts
                .map((value, idx) => (
                    <AircraftDetails {...value}></AircraftDetails>
                ))}

        </div>
    );
}
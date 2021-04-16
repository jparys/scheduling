import React from 'react';
import Alert from 'react-bootstrap/Alert';
import {
    selectAircraft,
    fetchAircraftsAsync,
    selectAircrafts
} from './aircraftSlice'
import { Aircraft, AircraftState } from './types'
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export function AircraftDetails(props: Aircraft) {
    const dispatch = useAppDispatch();
    return (
        <div>
            <Alert
                key={props.ident}
                variant={props.selected ? 'primary' : 'secondary'}
                onClick={(event: any) => {
                    dispatch( selectAircraft(props.ident));
                  }}>
                 {props.ident} - Base: {props.base}
                 <br/>
                 ({props.utilization} %)
            </Alert>
        </div>
    );
}
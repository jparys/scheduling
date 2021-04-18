import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { selectAircraft, } from './aircraftSlice'
import { Aircraft } from '../../common/types'
import { useAppDispatch } from '../../app/hooks';

export function AircraftDetails(props: Aircraft) {
    const dispatch = useAppDispatch();
    return (
        <div>
            <Alert
                key={props.ident}
                variant={props.selected ? 'primary' : 'secondary'}
                onClick={() => {
                    dispatch(selectAircraft(props.ident));
                }}>
                {props.ident} 
                <br />
                ({props.utilization?.toFixed(2)||0} %)
            </Alert>
        </div>
    );
}
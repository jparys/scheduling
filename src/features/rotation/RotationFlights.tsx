
import React from 'react';
import { Flight, } from '../../common/types'
import { RotationFlightDetails } from './RotationFlightDetails'
import { Utilization } from './Utilization'

export function RotationFlights(props: { flights: Flight[] }) {
    return (
        <div>
            { props &&
                props.flights
                    .map((value) => (
                        <RotationFlightDetails {...value}  > </RotationFlightDetails>
                    ))}

            <Utilization flights={props.flights} />
        </div>
    );
}
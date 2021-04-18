import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { RotationState, Flight } from '../../common/types'
import { nanoid } from 'nanoid'

import {
    setUtilization
} from '../aircrafts/aircraftSlice'

const initialState: RotationState = {
    status: 'idle',
    rotationList: []
};

export const rotationSlice = createSlice({
    name: 'rotation',
    initialState,
    reducers: {
        createRotation: (state, action: PayloadAction<string>) => {
            const newRotation = {
                id: nanoid(6),
                aircraftId: action.payload,
                date: (new Date()).toString(),
                flights: []
            }
            state.currentRotationId = newRotation.id
            state.rotationList = [...state.rotationList, newRotation]
        },
        scheduleFlight: (state, action: PayloadAction<Flight>) => {
            const current = state.rotationList.find(item => item.id === state.currentRotationId)
            if (current)
                current.flights.push(action.payload)
        },
        setCurrentRotation: (state, action: PayloadAction<string>) => {
            state.currentRotationId = action.payload
        },
        removeFlight: (state, action: PayloadAction<string>) => {
            const current = state.rotationList.find(item => item.id === state.currentRotationId)
            if (current)
                current.flights = current?.flights.filter(e => e.id !== action.payload)
        }
    },
});

export const selectCurrentRotation = (state: RootState) => state.rotation.rotationList.find(el => el.id === state.rotation.currentRotationId);
export const selectRotationState = (state: RootState) => state.rotation
export const selectRotationList = (state: RootState) => state.rotation.rotationList

export const selectLastLocation = (state: RootState) =>  {
     const currentRotation = selectCurrentRotation(state)
     if(currentRotation && currentRotation.flights.length>0)
        return currentRotation.flights[currentRotation.flights.length -1].destination;
     return null; 
}

export const selectLastArrivalTime = (state: RootState) =>  {
    const currentRotation = selectCurrentRotation(state)
    if(currentRotation && currentRotation.flights.length>0)
       return currentRotation.flights[currentRotation.flights.length -1].arrivaltime;
    return 0
}

const { createRotation, scheduleFlight, setCurrentRotation, removeFlight } = rotationSlice.actions;

export const createIfNotExists = (aircraftId: string): AppThunk => (
    dispatch,
    getState
) => {
    const currentState = selectRotationState(getState());
    const aircraftRotation = currentState.rotationList?.find(item => item.aircraftId === aircraftId);
    if (aircraftRotation) {
        dispatch(setCurrentRotation(aircraftRotation.id))
    }
    else {
        dispatch(createRotation(aircraftId))
    }
};

export const scheduleFlightAction = (flight: Flight): AppThunk => (
    dispatch,
    getState
) => {

    dispatch(scheduleFlight(flight))
    const current = selectCurrentRotation(getState())
    if (current) {
        let utilization: number = 0;
        current.flights.forEach((item) => {
            utilization = utilization + item.arrivaltime - item.departuretime;
        })
        utilization = (100 * utilization / 86400)
        dispatch(setUtilization({ aircraftId: current?.aircraftId, utilizaton: utilization }))
    }
}

export const removeFlightAction = (id: string): AppThunk => (
    dispatch,
    getState
) => {

    dispatch(removeFlight(id))
    const current = selectCurrentRotation(getState())
    if (current) {
        let utilization: number = 0;
        current.flights.forEach((item) => {
            utilization = utilization + item.arrivaltime - item.departuretime;
        })
        utilization = (100 * utilization / 86400)
        dispatch(setUtilization({ aircraftId: current?.aircraftId, utilizaton: utilization }))
    }
}

export default rotationSlice.reducer;
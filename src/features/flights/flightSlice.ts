import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

import {Flight, FlightState} from './types'
import { fetchAircrafts, fetchFlightsByOrigin, fetchFlights } from '../../api/aircraftAPI';
//import { fetchAircrafts } from './aircraftAPI';
//[{"ident":"GABCD","type":"A320","economySeats":186,"base":"EGKK"}]

//{"id":"AS1002","departuretime":27900,"arrivaltime":32100,"readable_departure":"07:45","readable_arrival":"08:55","origin":"LFMN","destination":"LFSB"},

export const fetchFlightsAsync = createAsyncThunk(
    'flight/fetchFlights',
    async (origine: string) => {
      const response = await fetchFlightsByOrigin(origine);
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
  );


const initialState: FlightState = {
   flights : [],
   status: 'idle'
};

export const aircraftSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    // selectAircraft: (state, action: PayloadAction<string>) => {
    //    state.aircrafts.forEach(el => el.selected = false)
    //    let result = state.aircrafts.filter(el => el.ident === action.payload)
    //    result[0].selected = true;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlightsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFlightsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.flights = action.payload;
      });
    },
});

export const selectFlights = (state: RootState) => state.flight;

//export const { selectAircraft } = aircraftSlice.actions;

export default aircraftSlice.reducer;

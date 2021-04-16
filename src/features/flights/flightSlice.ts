import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { FlightState} from './types'
import {  fetchFlightsByOrigin} from '../../api/aircraftAPI';

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
    schedule: (state, action: PayloadAction<string>) => {
       //state.aircrafts.forEach(el => el.selected = false)
       let result = state.flights.find(el => el.id === action.payload)
       if(result)
            result.scheduled = true;
    },
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

export const { schedule } = aircraftSlice.actions;

export default aircraftSlice.reducer;

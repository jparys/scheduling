import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { FlightState } from '../../common/types'
import { fetchFlightsByOriginAndTime } from '../../api/aircraftAPI';

export interface Parameters {
  origine: string;
  time: number
}

export const fetchFlightsAsync = createAsyncThunk(
  'flight/fetchFlights',
  async (parameter: Parameters) => {
    const response = await fetchFlightsByOriginAndTime(parameter.origine, parameter.time);
    return response;
  }
);

const initialState: FlightState = {
  flights: [],
  status: 'idle'
};

export const aircraftSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    schedule: (state, action: PayloadAction<string>) => {
      let result = state.flights.find(el => el.id === action.payload)
      if (result)
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

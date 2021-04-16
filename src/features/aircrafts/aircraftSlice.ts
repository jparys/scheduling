import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

import {Aircraft, AircraftState} from './types'
import { fetchAircrafts } from '../../api/aircraftAPI';

//[{"ident":"GABCD","type":"A320","economySeats":186,"base":"EGKK"}]

export const fetchAircraftsAsync = createAsyncThunk(
    'aircraft/fetchAircrafts',
    async () => {
      const response = await fetchAircrafts();
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
  );

const initialState: AircraftState = {
   aircrafts : [],
   status: 'idle'
};

export const aircraftSlice = createSlice({
  name: 'aircraft',
  initialState,
  reducers: {
    selectAircraft: (state, action: PayloadAction<string>) => {
       state.aircrafts.forEach(el => el.selected = false)
       let result = state.aircrafts.filter(el => el.ident === action.payload)
       result[0].selected = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAircraftsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAircraftsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.aircrafts = action.payload;
      });
    },
});

export const selectAircrafts = (state: RootState) => state.aircraft;
export const selectedAircraft = (state: RootState) => state.aircraft.aircrafts.find(e=> e.selected ===true);

export const { selectAircraft } = aircraftSlice.actions;

export default aircraftSlice.reducer;

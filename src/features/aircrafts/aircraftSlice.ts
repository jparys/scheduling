import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';
import {AircraftState} from '../../common/types'
import { fetchAircrafts } from '../../api/aircraftAPI';

export const fetchAircraftsAsync = createAsyncThunk(
    'aircraft/fetchAircrafts',
    async () => {
      const response = await fetchAircrafts();
      return response;
    }
  );

const initialState: AircraftState = {
   aircrafts : [],
   status: 'idle'
};

export interface AircraftInfo {
   aircraftId : string;
   utilizaton : number;
}

export const aircraftSlice = createSlice({
  name: 'aircraft',
  initialState,
  reducers: {
    selectAircraft: (state, action: PayloadAction<string>) => {
       state.aircrafts.forEach(el => el.selected = false)
       let result = state.aircrafts.filter(el => el.ident === action.payload)
       result[0].selected = true;
    },
    setUtilization: (state, action: PayloadAction<AircraftInfo>) =>{
        const aircraft =  state.aircrafts.find(el => el.ident === action.payload.aircraftId)
        if(aircraft)
          aircraft.utilization = action.payload.utilizaton
    }
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
export const { selectAircraft, setUtilization } = aircraftSlice.actions;
export default aircraftSlice.reducer;

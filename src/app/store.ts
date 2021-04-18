import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import aircraftReducer from '../features/aircrafts/aircraftSlice'
import flightReducer from '../features/flights/flightSlice'
import rotationReducer from '../features/rotation/rotationSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    aircraft: aircraftReducer,
    flight: flightReducer,
    rotation: rotationReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

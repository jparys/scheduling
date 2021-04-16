
import {Aircraft, AircraftState} from './types'

import aircraftReducer, {
    selectAircraft
  } from './aircraftSlice';
  
  describe('aircraft reducer', () => {
    const initialState: AircraftState = {
      aircrafts : [{"ident":"GABCD","type":"A320","economySeats": 186,"base":"EGKK", "selected": false},
      {"ident":"GABCD1","type":"A320","economySeats": 186,"base":"EGKK", "selected": false}],
      status: 'idle'
    };
    let actual: AircraftState
    it('should handle select', () => {
        actual = aircraftReducer(initialState, selectAircraft("GABCD"));
        expect(actual.aircrafts[0].selected).toEqual(true);
        expect(actual.aircrafts[1].selected).toEqual(false);
      });
    //   it('should handle select 1', () => {
    //     actual = aircraftReducer(actual, select("GABCD1"));
    //     expect(actual.aircrafts[0].selected).toEqual(false);
    //     expect(actual.aircrafts[1].selected).toEqual(true);
    //   });
    
  });
  
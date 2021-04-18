import { RotationState} from '../../common/types'
import rotationReducer, { 
   
  } from './rotationSlice';
  
  describe('rotation reducer', () => {

    // const initialState: RotationState = {
    //     status: 'idle'
    // };

    it('should handle initial state', () => {
      expect(rotationReducer(undefined, { type: 'unknown' })).toEqual({
      });
    });
    

  });
  
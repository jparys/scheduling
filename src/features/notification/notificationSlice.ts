import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { store } from '../../app/store';

export interface NotificationState {
  message: string;
  title: string;
  show: boolean;
  userFeetback: 'Yes'|'Cancel'|'Empty'
}

export interface Message {
    title: string;
    message: string;
}

const initialState: NotificationState = {
  show: false,
  message: "",
  title: "Question",
  userFeetback: 'Empty', 
};

export const counterSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showMessage:  (state, action: PayloadAction<Message>) => {
        state.message = action.payload.message;
        state.title = action.payload.title;
        state.show= true;
        state.userFeetback =  'Empty';
      },
    cancel: (state) =>{
        state.show= false;
        state.userFeetback = 'Cancel'
    },
    confirm: (state) =>{
        state.show= false;
        state.userFeetback = 'Yes'
    },  
  },
});

export const { showMessage, cancel, confirm} = counterSlice.actions;

export const selectNotification = (state: RootState) => state.notification;

export default counterSlice.reducer;

function userFeetbackAsync(title: string, message: string) {
    return new Promise<'Yes'|'Cancel'|'Empty'>((resolve) => {
        store.dispatch(showMessage({title: title, message: message}))
        const unsubscribe =
            store.subscribe(() => {
                if (store.getState().notification.userFeetback !== 'Empty') {
                    resolve(store.getState().notification.userFeetback)
                    unsubscribe();
                }
            })
    }
    );
}

export const userFeetbackActionAsync = createAsyncThunk(
    'notification',
    async (message: Message) => {
        const response = await userFeetbackAsync(message.title,message.message);
        return response;
    }
);

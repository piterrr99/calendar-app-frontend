import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    checking: true
    // name: null,
    // uid: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        authLogin: (state, {payload})=>{
            return state = {
                ...state,
                checking: false,
                ...payload
            }
        },
        authDoneChecking: ( state )=>{
            state.checking = false;
        }
    }
});

export const { authLogin, authDoneChecking } = authSlice.actions;
export default authSlice.reducer
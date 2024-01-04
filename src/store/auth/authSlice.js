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
        authLogout: (state)=>{
            return state = {
                checking: false
            };
        },
        authDoneChecking: ( state )=>{
            state.checking = false;
        }
    }
});

export const { authLogin, authLogout, authDoneChecking } = authSlice.actions;
export default authSlice.reducer
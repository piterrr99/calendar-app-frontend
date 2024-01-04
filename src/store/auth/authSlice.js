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
        }
    }
});

export const { authLogin } = authSlice.actions;
export default authSlice.reducer
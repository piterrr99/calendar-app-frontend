import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openModal: (state)=>{
            
            return state = {
                ...state,
                isModalOpen: true
            }
            
        },
        closeModal: (state)=>{
            return state = {
                ...state,
                isModalOpen: false
            }
        }
    }
});

export const { closeModal, openModal } = uiSlice.actions
export default uiSlice.reducer
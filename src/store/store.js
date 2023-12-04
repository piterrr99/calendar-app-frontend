import { configureStore } from '@reduxjs/toolkit';
import ui from './ui/uiSlice';


const rootReducer = {
    ui
};

export const store = configureStore({reducer: rootReducer});
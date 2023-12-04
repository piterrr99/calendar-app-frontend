import { configureStore } from '@reduxjs/toolkit';
import calendar from './calendar/calendarSlice'
import ui from './ui/uiSlice';



const rootReducer = {
    ui,
    calendar
};

export const store = configureStore({reducer: rootReducer});
import { configureStore } from '@reduxjs/toolkit';

import auth from './auth/authSlice'
import calendar from './calendar/calendarSlice'
import ui from './ui/uiSlice';



const rootReducer = {
    ui,
    calendar,
    auth
};

export const store = configureStore({
                            reducer: rootReducer,
                            middleware: (getDefaultMiddleware) =>
                                getDefaultMiddleware({
                                    serializableCheck: false
                                })
                        });
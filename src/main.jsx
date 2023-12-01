import React from 'react'
import ReactDOM from 'react-dom/client'
import { CalendarApp } from './CalendarApp'
import { AppRouter } from './router/AppRouter'


ReactDOM.createRoot(document.getElementById('root')).render(
	<AppRouter>
    	<CalendarApp />
    </AppRouter>
)

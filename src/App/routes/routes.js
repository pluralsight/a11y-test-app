import { createBrowserRouter } from 'react-router-dom'

// Routes
import homeRoute from './home'
import skillIqRoute from './skillIq'

// Config
const routes = [homeRoute, skillIqRoute]

export const router = createBrowserRouter(routes)

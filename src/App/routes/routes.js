import { createBrowserRouter } from 'react-router-dom'

// Routes
import homeRoute from './home'
import skillIqRoute from './skillIq'
import browseRoute from './browse'

// Config
const routes = [homeRoute, skillIqRoute, browseRoute]

export const router = createBrowserRouter(routes)

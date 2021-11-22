import React from 'react'
import { Routes } from 'routes'
import { AppProvider } from 'context'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/main.css'

export const App: React.FC = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
)

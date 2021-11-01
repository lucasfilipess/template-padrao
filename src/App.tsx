import React from 'react'
import { Routes } from 'routes'
import { AppProvider } from 'context'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/custom.scss'

export const App: React.FC = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
)

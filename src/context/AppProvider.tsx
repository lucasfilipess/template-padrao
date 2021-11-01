import React from 'react'
import AuthProvider from './Auth'
import InterceptorProvider from './Interceptor'
import ToastProvider from './Toast'
import LayoutProvider from './Layout'
import ThemeProvider from './Theme'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ThemeProvider>
      <ToastProvider>
        <InterceptorProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </InterceptorProvider>
      </ToastProvider>
    </ThemeProvider>
  </AuthProvider>
)

export default AppProvider

import React from 'react'
import AuthProvider from './Auth'
import InterceptorProvider from './Interceptor'
import ToastProvider from './Toast'
import LayoutProvider from './Layout'
import ThemeProvider from './Theme'
import SimpleReactLightbox from 'simple-react-lightbox'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ThemeProvider>
      <SimpleReactLightbox>
        <ToastProvider>
          <InterceptorProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </InterceptorProvider>
        </ToastProvider>
      </SimpleReactLightbox>
    </ThemeProvider>
  </AuthProvider>
)

export default AppProvider

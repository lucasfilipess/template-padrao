import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// Se quiser que seu aplicativo funcione offline e carregue mais rápido, você pode mudar
// unregister() to register() abaixo. Observe que isso vem com algumas armadilhas.
// Saiba mais sobre service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// Se você quiser começar a medir o desempenho em seu aplicativo, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals (console.log))
// ou enviar para um endpoint analítico. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals()

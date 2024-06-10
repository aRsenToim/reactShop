import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss'
import RoutesApp from './provider/routes'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from './appStore'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={setupStore()}>
      <RoutesApp />
    </Provider>
  </BrowserRouter>
)

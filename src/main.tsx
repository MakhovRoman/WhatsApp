import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components/app/App'
import { BrowserRouter } from 'react-router-dom'

import 'normalize.css';
import '@styles/main.scss'
import { Provider } from 'react-redux';
import { createStore } from './store/store';

const store = createStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)

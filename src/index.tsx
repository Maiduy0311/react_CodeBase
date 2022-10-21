import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from '@apps/store'
import i18n from '@locales/i18n'
import App from './App'

import 'antd/dist/antd.less'
// import 'antd/dist/antd.css'
import './assets/styles/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

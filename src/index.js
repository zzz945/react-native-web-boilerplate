// src/index.js is the JavaScript entry point
import './web/Config/ReactotronConfig'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './web/Containers/App'
import './index.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

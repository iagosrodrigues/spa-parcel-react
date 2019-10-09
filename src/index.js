import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { render } from 'react-dom'

import './postcss/main.pcss'

import App from './App'

render(
  <>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </>,
  document.getElementById('app')
)

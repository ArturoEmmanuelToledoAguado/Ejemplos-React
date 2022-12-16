import React from 'react'
import ReactDOM from 'react-dom/client'
//import { Counter } from './01-useState/Counter'
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
//import { HooksApp } from './HooksApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHooks/>
  </React.StrictMode>,
)
CounterWithCustomHooks
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MemoHook } from './06-memos/MemoHook'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLAyoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
//import { Counter } from './01-useState/Counter'
//import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { HooksApp } from './HooksApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <MemoHook/>
  //</React.StrictMode>,
)

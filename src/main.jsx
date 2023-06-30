import React from 'react'
import ReactDOM from 'react-dom/client'
import { Buffer } from 'buffer'
import App from './App'

globalThis.Buffer = Buffer
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/**
 * // TODO: Add provistion to edit agent account details
 * // TODO: Handle Bad Network
 */

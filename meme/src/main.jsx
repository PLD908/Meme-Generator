import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Content from './Content.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Content btn="Get a new meme image"/>
  </React.StrictMode>,
)

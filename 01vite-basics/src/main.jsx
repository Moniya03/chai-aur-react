import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import App from './App.jsx'
import Youtube from './Youtube.jsx';

function MyApp(){
  return(
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}

const AmotherElement = (
  <a href = "http://google.com" target='_blank'>Visit Google</a>
)
const areactelement = React.createElement(
  'a',
  {href: 'https://google.com',target:"_blank"},'click to visit google'
)

createRoot(document.getElementById('root')).render(
  <App />
)

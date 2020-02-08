import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'
// import DefaultErrorBoundary from './DefaultErrorBoundary'
import './styles.css'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

const elem = App
// eslint-disable-next-line no-console
console.log(elem)

// ReactDOM.render(
//   <React.StrictMode>
//     <DefaultErrorBoundary>
//       <App />
//     </DefaultErrorBoundary>
//   </React.StrictMode>,
//   document.getElementById('app')
// )

ReactDOM.render(App, document.getElementById('app'))

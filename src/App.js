import React from 'react'
// import { hot } from 'react-hot-loader'

// # 9: Override the props.className:
const props = {
  className: 'siteLayout',
  children: 'Baselisne Site 8'
}
const App = (
  <div {...props} className="fancyClass">
    New Baseline Site
  </div>
)

// // # 8
// const props = {
//   className: 'siteLayout',
//   children: 'Baselise Site 8'
// }
// const App = <div { ...props } />

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello World.</h1>
//       </div>
//     )
//   }
// }

// export default hot(module)(App)
export default App

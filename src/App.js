import React from 'react'
// import { hot } from 'react-hot-loader'

// # 7
// const elemClass = 'siteLayout2'
// const elem = 'Baseline 5'
// const App = <div className={ elemClass + ' layout--modifier'}>{ (() => elem) () }</div>

// # 6
// const elemClass = 'siteLayout2'
// const elem = 'Baseline 4'
// const App = <div className={ elemClass }>{ (() => elem) () }</div>

// # 5
// const elem = 'Baseline 3'
// const App = <div className="siteLayout">{ (() => elem) () }</div>

// # 4
// const elem = 'Baseline 2'
// const App = <div className="siteLayout">{ elem }</div>

// # 3
// const App = <div className="siteLayout">Baseline Site</div>

// # 2
// const App = React.createElement('div', {
//   className: 'siteLayout',
//   children: ['Baseline Site', 'Just a starting point']
// })

// #1
const App = React.createElement(
  'div',
  { className: 'siteLayout' },
  'Baseline Site',
  ' Just a starting point'
)

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

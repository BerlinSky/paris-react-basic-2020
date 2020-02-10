import React from 'react'
import { PropTypes } from 'prop-types'
// import { hot } from 'react-hot-loader'

// # 11: Compose and propTypes validation:
const Baseline = props => <div>{props.children}</div>

const App = (
  <div className="fancyClass">
    <Baseline>Baseline Site 10 a</Baseline>
    <Baseline>Baseline Site 10 b</Baseline>
    <Baseline>
      <div>Nested Site Info</div>
      <Baseline>Child baseline site 10</Baseline>
    </Baseline>
  </div>
)

Baseline.propTypes = {
  children: PropTypes.string
}
// # 10: Compose and nest:
// const Baseline = props => <div>{props.content}</div>

// const App = (
//   <div className="fancyClass">
//     <Baseline content="Baseline Site 10"/>
//   </div>
// )

// # 9: Override the props.className:
// const props = {
//   className: 'siteLayout',
//   children: 'Baselisne Site 8'
// }
// const App = (
//   <div {...props} className="fancyClass">
//     New Baseline Site
//   </div>
// )

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

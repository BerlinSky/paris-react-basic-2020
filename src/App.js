import React from 'react'
import { PropTypes } from 'prop-types'
// import { hot } from 'react-hot-loader'

// #12: Fragment
function Baseline({ title }) {
  return (
    <>
      <h1>The site is called {title}</h1>
      <div>Let us set the site up</div>
    </>
  )
}

Baseline.propTypes = {
  title: PropTypes.string
}

const App = (
  <div className="fancyClass">
    <Baseline title="Baseline">Baseline Site 11</Baseline>
  </div>
)

// # 11: Compose and propTypes validation:
// const Baseline = props => <div>{props.children}</div>

// const App = (
//   <div className="fancyClass">
//     <Baseline>Baseline Site 10 a</Baseline>
//     <Baseline>Baseline Site 10 b</Baseline>
//     <Baseline>
//       <div>Nested Site Info</div>
//       <Baseline>Child baseline site 10</Baseline>
//     </Baseline>
//   </div>
// )

// Baseline.propTypes = {
//   children: PropTypes.string
// }

export default App

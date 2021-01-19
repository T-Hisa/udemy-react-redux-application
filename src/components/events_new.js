import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { postEvent }from '../actions'

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Foo</div>
      </React.Fragment> 
    )
  }
}


// const mapDispatchToProps = ({ postEvents })

export default connect(null, null)(EventsNew)

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, World!</h1>
//       <Cat name="value" />
//     </div>
//   );
// }

// function Cat(props) {
//   return <div>
//     {props.name}
//   </div>
// }


import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { readEvents }from '../actions'
import { Link } from 'react-router-dom'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }
  renderEvents() {
    return _.map(this.props.events, event => {
      return (
        <tr key={event.id}>
          <td>{ event.id }</td>
          <td>{ event.title }</td>
          <td>{ event.body }</td>
        </tr>
      )
    })
  }
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            { this.renderEvents() }
          </tbody>
        </table>
        <Link to="/events/new">New Event</Link>
      </React.Fragment> 
    )
  }
}

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

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


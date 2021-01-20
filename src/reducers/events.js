import _ from 'lodash'
import {  READ_EVENTS,
          DELETE_EVENT,
          READ_EVENT,
          UPDATE_EVENT,
          CREATE_EVENT 
        } from '../actions'

// const initialState = { value: 0 }

export default (events = {}, action) => {
  switch(action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      console.log({events})
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}


// [
//  {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
//  {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
// ]

// これではなく

// {
//   1: {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
//   2: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
// }
// の方が取り扱いやすい
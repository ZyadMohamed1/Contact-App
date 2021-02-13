import React, { Component } from 'react'
import { movies, profiles, users } from './data'
import ListContacts from './ListContacts'
import ListData from './ListData'
import PopularMovie from './PopularMovie'

const contacts = [
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    handle: '@tylermcginnis',
    avatarURL: 'http://localhost:5001/tyler.jpg'
  },
  {
    id: 'karen',
    name: 'Karen Isgrigg',
    handle: '@karen_isgrigg',
    avatarURL: 'http://localhost:5001/karen.jpg'
  },
  {
    id: 'richard',
    name: 'Richard Kalehoff',
    handle: '@richardkalehoff',
    avatarURL: 'http://localhost:5001/richard.jpg'
  },
]


class App extends Component {
  render() {
    return (
      <div>
        {/* <ListContacts contacts={contacts} /> */}
        <h2>Favorite Movie</h2>
        <PopularMovie profiles={profiles} users={users} movies={movies} />
        
        </div>
    )
  }
}

export default App;
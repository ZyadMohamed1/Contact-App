import React, { Component } from 'react'

export default class ListData extends Component {
    render() {

        const {profiles, users, movies} = this.props;

        return (
            

           <ol className='Data-list'>
               {profiles.map(profile => (
                   <li key={profile.id}>
                      {users[profile.userID].name}'s favorite movie is{' '}
                       {movies[profile.favoriteMovieID].name}
                    </li>
               ))}
           </ol>
        )
    }
}

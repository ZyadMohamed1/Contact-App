import React, { Component } from 'react'

export default class UserList extends Component {
    render() {
        
        const {movieID, profiles, users} = this.props;

        const filterProfiles = profiles.filter(
            profile => Number(profile.favoriteMovieID) === movieID
          );


          if(!filterProfiles || filterProfiles.length === 0){
              return <p>No one Liked This Movie</p>
          }

        return (
            <div>
                <p>Liked By:</p>
                <ul>
                    {filterProfiles.map(profile => (
                        <li key={profile.userID} >
                            {users[profile.userID].name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

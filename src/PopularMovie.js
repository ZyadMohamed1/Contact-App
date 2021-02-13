import React, { Component } from 'react'
import UserList from './UserList';

export default class PopularMovie extends Component {
    render() {

        const {profiles, users, movies} = this.props;
        const moviesArr = Object.values(movies);

        return (
            <div className='Popular-movie-container'>
                {moviesArr.map(movie => (
                    <div key={movie.id} className='movie-cell'>
                    <h3>{movie.name}</h3>
                    <UserList movieID={movie.id} users={users} profiles={profiles} />
                    </div>
                ))}
            </div>
        )
    }
}

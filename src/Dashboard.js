import React, { Component } from 'react';
import MovieCard from './MovieCard';

class Dashboard extends Component {  
  
  render() {
    const { movies, usersByMovie, users } = this.props;
    const movieCards = Object.keys(movies).map(id => (
      <MovieCard 
        key={id}
        users={users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
    ));
      
    return (
      <ul>
        { movieCards }
      </ul>
    )
  }
}

export default Dashboard;
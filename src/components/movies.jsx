import React, { Component } from 'react';
import {getMovies} from './moviesApi';
import Like from './../common/like'
class Movies extends Component {
    state = { 
        movies:getMovies()
     }
    handleDelete=(movie)=>{
        const movieDel=this.state.movies.filter(m=>m.id!==movie.id);
        this.setState({movies:movieDel})
    }
    handleLike=(movie)=>{
        const movieArr=[...this.state.movies];
        const index=movieArr.indexOf(movie);
        movieArr[index]={...movieArr[index]};
        movieArr[index].liked=!movieArr[index].liked;
        this.setState({movies:movieArr});
    }
    render() { 
        if(this.state.movies.length==0)return 'There are no movies in the list';
        return ( 
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies</p>
                <table className="table">
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Number In Stock</th>
                        <th>Published Date</th>
                        <th/>
                        <th/>
                        </tr>
                    </thead>
                    
                {this.state.movies.map(movie=>(
                    <tr key={movie.id}>
                        <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.publishedDate}</td>
                            <td><Like liked={movie.liked} onClick={()=>this.handleLike(movie)}/></td>
                            <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger">Delete</button></td>
                            
                    </tr>
                ))}
                </table>
            </React.Fragment>
         );
    }
}
 
export default Movies;
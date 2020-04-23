import React, { Component } from 'react';
import Like from './common/like';
const MoviesTable = (props) => {
    const {movies,onLike,onDelete,onSort}=props
    return (                     
    <table className="table">
    <thead>
        <tr>
        <th onClick={()=>onSort('title')}>Title</th>
        <th onClick={()=>onSort('genre.name')}>Genre</th>
        <th onClick={()=>onSort('numberInStock')}>Number In Stock</th>
        <th onClick={()=>onSort('publishedDate')}>Published Date</th>
        <th/>
        <th/>
        </tr>
    </thead>
    
{movies.map(movie=>(
    <tr key={movie.id}>
        <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.publishedDate}</td>
            <td><Like liked={movie.liked} onClick={()=>this.onLike(movie)}/></td>
            <td><button onClick={()=>this.onDelete(movie)} className="btn btn-danger">Delete</button></td>
            
    </tr>
))}
</table> );
}
 
export default MoviesTable;
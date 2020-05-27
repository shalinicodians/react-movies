import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import {Link} from "react-router-dom"
//import TableBody from './common/tableBody';

class MoviesTable extends Component {
    coloumns=[
        {path:'title' ,name:'Title'},
        {path:'genre', name:'Genre'},
        {path:'numberInStock', name:'Number In Stock'},
        {path:'publishedDate', name:'Published Date'},
        {key:'like'},
        {key:'delete'}
    ]
    render() { 
    const {movies,onLike,onDelete,sortColoumn,onSort}=this.props
    return (                     
        <table className="table">
            <TableHeader
            coloumns={this.coloumns}
            sortColoumn={sortColoumn}
            onSort={onSort}
            />
        {movies.map(movie=>(
            <tr key={movie.id}>
                <td><Link to={`/movies/new/${movie.id}`}>{movie.title}</Link></td>
                    <td>{movie.genre}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.publishedDate}</td>
                    <td><Like liked={movie.liked} onClick={()=>onLike(movie)}/></td>
                    <td><button onClick={()=>onDelete(movie)} className="btn btn-danger">Delete</button></td>
                    
            </tr>
        ))}
        </table> 
);
    }
}
 
 
export default MoviesTable;
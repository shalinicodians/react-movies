import React, { Component } from 'react';
import {getMovies} from './moviesApi';
import Pagination from '../common/pagination';
import {paginate} from '../utils/paginate';
import {getGenres} from './moviesApi'
import ListGroup from '../common/listGroup';
import MoviesTable from '../moviesTable';
class Movies extends Component {
    state = { 
        movies:[],
        genres:[],
        currentPage:1,
        pageSize:3,
        selectedGenre:[]
     }
     componentDidMount(){
         const genres=[{names:'All Genre'},...getGenres()]
         this.setState({movies:getMovies(),genres})
     }
    handleDelete=(movie)=>{
        const movieDel=this.state.movies.filter(m=>m.id!==movie.id);
        this.setState({movies:movieDel})
    }
    handleLike=(movie)=>{
        const movieArr=[...this.state.movies];
        const index=movieArr.indexOf(movie);
        //movieArr[index]={...movieArr[index]};
        movieArr[index].liked=!movieArr[index].liked;
        this.setState({movies:movieArr});
    }
    handlePageChange=(page)=>{
        this.setState({currentPage:page})
        //console.log(page);
    }
    handleSelectedItem=(genres)=>{
        this.setState({selectedGenre:genres})
    }
    handleSort=(sortItem)=>{
        console.log(sortItem);
    }
    render() { 
        if(this.state.movies.length==0)return 'There are no movies in the list';
        const filtered=this.state.selectedGenre && this.state.selectedGenre.id ? this.state.movies.filter(m=>m.genre===this.state.selectedGenre.names) : this.state.movies;
        const movies=paginate(filtered,this.state.currentPage,this.state.pageSize);
        return ( 
            <div className="row">
                <div className="col-3">
                    <ListGroup
                    items={this.state.genres}
                    onItemSelected={this.handleSelectedItem}
                    selectedItem={this.state.selectedGenre}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies</p>
                    <MoviesTable
                    movies={movies}
                    onLike={this.handleLike}
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}

                    />
                    {/* <tr> */}
                        <Pagination 
                        itemsCount={filtered.length} 
                        pageSize={this.state.pageSize}
                        currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange} />
                    {/* </tr> */}
                    
                </div>
                
            </div>
         );
    }
}
 
export default Movies;
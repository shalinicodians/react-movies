import React, { Component } from 'react';
import {getMovies} from './moviesApi';
import Pagination from '../common/pagination';
import {paginate} from '../utils/paginate';
import {getGenres} from './moviesApi'
import ListGroup from '../common/listGroup';
import MoviesTable from '../moviesTable'; 
import {Link} from 'react-router-dom'
import _ from 'lodash'
class Movies extends Component {
    state = { 
        movies:[],
        genres:[],
        sortColoumn:{path:'title',order:'asc'},
        currentPage:1,
        pageSize:3,
        selectedGenre:[]
     }
     componentDidMount(){
         const genres=[{names:'All Genre'},...getGenres()]
         this.setState({movies:getMovies(),genres})
     }
     getPagedData=()=>{
        const {sortColoumn}=this.state;
        const filtered=this.state.selectedGenre && this.state.selectedGenre.id ? this.state.movies.filter(m=>m.genre===this.state.selectedGenre.names) : this.state.movies;
        const sorted=_.orderBy(filtered,[sortColoumn.path],[sortColoumn.order])
        const movies=paginate(sorted,this.state.currentPage,this.state.pageSize);
        return {totalCount:filtered.length,data:movies}
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
    handleSort=(sortColoumn)=>{
       
        this.setState({sortColoumn})
    }
    render() { 
        if(this.state.movies.length==0)return 'There are no movies in the list';
        const {sortColoumn}=this.state;
        const {totalCount,data:movies}=this.getPagedData()
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
                    <span>Showing {totalCount} movies</span><div style={{float:"right",marginRight:'10px',marginBottom:'10px'}}><Link className="btn btn-primary" to="/movies/new/new">New Movie</Link></div>
                    <MoviesTable
                    movies={movies}
                    sortColoumn={sortColoumn}
                    onLike={this.handleLike}
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}

                    />
                    {/* <tr> */}
                        <Pagination 
                        itemsCount={totalCount} 
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
import React, { Component } from 'react';
const MoviesForm = ({match,history}) => {
return <div>
    <h1>MoviesForm{match.params.id}</h1>
    <button className="btn btn-success" onClick={()=>history.push('/movies')}>Save</button>
</div>;
}
 
export default MoviesForm;
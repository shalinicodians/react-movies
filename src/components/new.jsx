import React, { Component } from 'react';
import Input from '../common/input';
import Joi from 'joi-browser';
import {getGenres} from './moviesApi';
import {getMovies} from './moviesApi';

class New extends Component {
    state = { 
        genres:getGenres(),
        data:{
            title:"",
            numberInStock:"",
            rate:'',
            genress:''
        },
        errors:{}
     }
     schema={
        title:Joi.string().required(),
        numberInStock:Joi.number().required(),
        rate:Joi.number().min(1).max(10),
        genress:Joi.string().required()
     }
     componentDidMount(){
         const movieId=this.props.match.params.id;
         if(movieId==='new')return;
         const movie=getMovies(movieId);
         if(!movie)return this.props.history.replace('/not-found');
         this.setState({data:this.mapViewModal(movie)})
     }
     mapViewModal(movie)
     {
         return{
             //id:movie.id,
             title:movie.title,
             genre:movie.genre,
             numberInStock:movie.numberInStock,
         };
     }
     validate=()=>{
         const result=Joi.validate(this.state.data,this.schema,{abortEarly:false});
         if(!result.error)return null;
         const errors={};
        for(let items of result.error.details) return errors[items.path[0]]=items.message;
        return errors;
     }
     validateProperty=({name,value})=>{
        const obj={[name]:value};
        const schema={[name]:this.schema[name]}
        const {error}=Joi.validate(obj,schema);
        return error?error.details[0].message:null;
     }
    handleChange=({currentTarget:input})=>{
        const data={...this.state.data}
        const errors={...this.state.errors}
        const errorMessage=this.validateProperty(input);
        if(errorMessage)errors[input.name]=errorMessage;
        else delete errors[input.name];
        
        data[input.name]=input.value;
        this.setState({data,errors});
        //console.log(errorMessage);
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const errors=this.validate();
        //console.log(errors);
        this.setState({errors:errors||{}});
        this.doSumit()
    }
    doSumit=()=>{
        this.props.history.push('/movies');
    }
    
    render() { 
        const{data,errors,genres}=this.state
        let genra=data.genress;
        genra=genres;

        return ( 
            <div className="col">
                <form onSubmit={this.handleSubmit}>
                <Input
                type="text"
                name="title"
                label="Name"
                value={data.title}
                handleChange={this.handleChange}
                errors={errors.title}
                />
                <div class="form-group">
                    <label htmlfor="exampleFormControlSelect2">Genre</label>
                    <select class="form-control" name="genress" onChange={this.handleChange}>
                        <option value="">Select Genre</option>
                        {genra.map(genre=>
                            
                            <option key={genre.id} value={genre.id}>{genre.names}</option>
                            )}
                    </select>
                        {errors.genress && <div className="alert alert-danger">{errors.genress}</div>}
                </div>
                <Input
                type="text"
                name="numberInStock"
                label="Number In Stock"
                value={data.numberInStock}
                handleChange={this.handleChange}
                errors={errors.numberInStock}
                />
                <Input
                type="text"
                name="rate"
                label="Rate"
                value={data.rate}
                handleChange={this.handleChange}
                errors={errors.rate}
                />
                <button disabled={this.validate()} className="btn btn-primary"  type="submit">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default New;
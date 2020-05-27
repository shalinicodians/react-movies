import React, { Component } from 'react';
import Form from './form';
import Joi from 'joi-browser'
class RegisterForm extends Form {
    state = { 
        data:{
            username:'',
            password:'',
            name:''
        },
        errors:{}      
     }
     schema={
         username:Joi.string().email().required(),
         password:Joi.string().min(5).required(),
         name:Joi.string().required()

     }
     doSumit=()=>{
        console.log('submit')
    }
    render() { 
        return <div className="container">
            <h1>Register Form</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('username','Username','email')}
                {this.renderInput('password','Password','password')}
                {this.renderInput('name','Name')}
                {this.renderButton('Register')}
            </form>
        </div> ;
    }
}
 
export default RegisterForm;
import React, { Component } from 'react';
import Joi from 'joi-browser';
// import Input from './input';
import Form from './form';
import { render } from '@testing-library/react';
class LoginForm extends Form {
    state = { 
        data:{
            username:"",
            password:""
        },
        errors:{}
     }
     schema={
         username:Joi.string().alphanum().required().label('Username'),
         password:Joi.string().required().label('Password')
     }
    doSumit=()=>{
        console.log('submit')
    }
    render() { 
        
        return <div className="container">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('username','Username')}
                {this.renderInput('password','Password','password')}

                {this.renderButton('Login')}
            </form>
        </div>;
    }
}
 
export default LoginForm;

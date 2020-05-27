import React, { Component } from 'react';
const Input = ({type,name,label,value,errors,handleChange}) => {
    return <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input value={value} onChange={handleChange} name={name} id={name} type={type} className="form-control"/>
    {errors &&<div className="alert alert-danger">{errors}</div>}
</div>;
}
 
export default Input;
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Like = props => {
    let color='black';
    if(props.liked) color='red';
    return ( <i onClick={props.onClick} style={{cursor:'pointer'}}><FontAwesomeIcon icon={faHeart} color={color}/></i>);
}
 
export default Like;
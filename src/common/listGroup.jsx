import React, { Component } from 'react';
const ListGroup = (props) => {
    const {items,onItemSelected,selectedItem}=props
    return ( 
        
        <React.Fragment>
            <ul className="list-group">
                {items.map(item=> <li key={item.id} 
                className={item===selectedItem?"list-group-item active":"list-group-item"} onClick={()=>onItemSelected(item)}>{item.names}</li>)}
               
            </ul>
        </React.Fragment>
     );
}

 
export default ListGroup;
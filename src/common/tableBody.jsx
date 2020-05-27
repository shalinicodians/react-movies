import React, { Component } from 'react';
import _ from 'lodash';
class TableBody extends Component {
    // state = {  }
    renderCell=(item,coloumn)=>{
        if(coloumn.content) return coloumn.content(item);
        return _.get(item,coloumn)
    }
    render() { 
        const {data,coloumns}=this.props
        return ( 
            <tbody>
                {data.map(items=>
                    <tr>
                        {coloumns.map(coloumn=><td>{this.renderCell(items,coloumn)}</td>)}
                    </tr>
                )}
            </tbody>
         );
    }
}
 
export default TableBody;
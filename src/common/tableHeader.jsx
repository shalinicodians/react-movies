import React, { Component } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
//import { faSortUp } from '@fortawesome/free-solid-svg-icons';

class TableHeader extends Component {
    raisedBy=(sortItem)=>{
        const sortColoumn={...this.props.sortColoumn};
        console.log(sortColoumn);
        if(sortColoumn.path===sortItem)
        {
            sortColoumn.order=sortColoumn.order==='asc'?'desc':'asc'
        }
        else{
            sortColoumn.path=sortItem;
            sortColoumn.order='asc';
        }
        this.props.onSort(sortColoumn);
    }
    renderSortIcon=(col)=>{
        if(col.path!==this.props.sortColoumn.path) return null;
        if(this.props.sortColoumn.order==='asc')
            return <i><FontAwesomeIcon icon={faSortDown}/></i>;
            return <i><FontAwesomeIcon icon={faSortUp}/></i>;
        
    }
    render() { 
        return (
            <thead>
                <tr>
                    {this.props.coloumns.map(col=>
                        (<th key={col.key||col.path} onClick={()=>this.raisedBy(col.path)}>
                            {col.name}{this.renderSortIcon(col)}
                            </th>
                        ))}
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;
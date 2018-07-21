import React,{Component} from 'react';

class List extends Component{
    render(){
        return (
            <ol>
            {this.props.orderedElements.map((elements,index) => <li key={index}> {elements} </li>)}
            </ol>
        )
    }
}

export default List
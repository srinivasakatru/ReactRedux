import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const orderedElements = ['Boil milk','Add Coffee Powder','let it bowl & then you have it hot coffee'];

// const element = React.createElement('ol',"Hello world",orderedElements.map((elements,index)=>
// {   
//    return React.createElement('li',{key:index},elements)
// }
// ))

// const element = 
//     <div>
//         <h1> Way to prepare coffe</h1>
//         <ol>
//         {orderedElements.map((elements,index) => <li key={index}> {elements} </li>)}
//         </ol>
//     </div>

// ReactDOM.render(
//     element,document.getElementById('root')
// );

class List extends Component{
    render(){
        return (
            <ol>
            {this.props.orderedElements.map((elements,index) => <li key={index}> {elements} </li>)}
            </ol>
        )
    }
}

class Title extends Component{
    render(){
        return (<h1> Way to prepaer coffee</h1>)
    }
}

class Main extends Component{
    render(){
        return (
            <div>
                <Title/>
                <List orderedElements={orderedElements}/>
                <List orderedElements={['Step1','Step 2']}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>,document.getElementById('root')
);
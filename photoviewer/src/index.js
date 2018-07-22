import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Title from "./Components/Title";
import  "./styles/style.css";
import PhotoViewer from './Components/PhotoViewer';
import {BrowserRouter} from 'react-router-dom';
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

ReactDOM.render(
    <div>
        <BrowserRouter><Title title="Photo Viewer"/></BrowserRouter>
        <BrowserRouter><PhotoViewer/></BrowserRouter>
    </div> 
    ,document.getElementById('root')
);
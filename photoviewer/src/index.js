import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Title from "./Components/Title";
import  "./styles/style.css";
import PhotoViewer from './Components/PhotoViewer'
const posts = [{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    "3919321_1443393332_n.jpg"
    }, {
    id: "1",
    description: "Aliens???",
    imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
    "08323785_735653395_n.jpg"
    }, {
    id: "2",
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
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
        <Title title="Photo Viewer"/>
        <PhotoViewer posts={posts}/>
    </div> 
    ,document.getElementById('root')
);
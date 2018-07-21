import React,{Component} from 'react';
import List from "./List"
import Title from "./Title"
const orderedElements = ['Boil milk','Add Coffee Powder','let it bowl & then you have it hot coffee'];

class Main extends Component{
    render(){
        return (
            <div>
                <Title title = "Way to prepare coffee"/>
                <List orderedElements={orderedElements}/>
                <Title title = "Steps"/>
                <List orderedElements={['Step1','Step 2']}/>
            </div>
        )
    }
}

export default Main
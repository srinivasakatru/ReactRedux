import React,{Component} from 'react';

class AddPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault()
        console.log(event.target.elements.link.value)
        console.log(event.target.elements.desc.value)
        let item = {
            id: Number(new Date()),
            description: event.target.elements.desc.value,
            imageLink: event.target.elements.link.value
        };
        this.props.onAddPhoto(item);
    }
    render(){
        return <div>

                <h1> This is AddPhoto 
                </h1>
                    <form onSubmit={this.handleSubmit}>
                        <input name='link' placeholder='link'></input>
                        <input name='desc' placeholder='Description'></input>
                        <button> Submit </button>
                    </form>
                </div>
    }
}

export default AddPhoto;
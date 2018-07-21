import React,{Component} from 'react';

class Photo extends Component{
    render(){
        const post = this.props.post;

        return(
           <figure className='photoFrame'>
            <img className= 'photo' src={post.imageLink}/>
            <figcaption className='caption'> {post.description}</figcaption>
            <div className='buttonContainer'>
            <button className="remove-button">remove</button>
            </div>
           </figure>
        )
    }    
}

export default Photo
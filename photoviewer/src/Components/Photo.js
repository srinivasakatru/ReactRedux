import React,{Component} from 'react';
import Proptypes from 'prop-types';
import PhotoViewer from './PhotoViewer';
class Photo extends Component{
    render(){
        const post = this.props.post;

        return(
           <figure className='photoFrame'>
            <img className= 'photo' src={post.imageLink}/>
            <figcaption className='caption'> {post.description}</figcaption>
            <div className='buttonContainer'>
            <button className="remove-button" onClick={
            ()=>{
                this.props.onRemovePhoto(post);
            }
            }>remove</button>
            </div>
           </figure>
        )
    }    
}
Photo.propTypes ={
    post:Proptypes.array.isRequired,
    onRemovePhoto: Proptypes.func.isRequired
}
export default Photo
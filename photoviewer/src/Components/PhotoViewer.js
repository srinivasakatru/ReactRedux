import React,{Component} from 'react';
import Photo from "./Photo";
class PhotoViewer extends Component{
    render(){
        return (
            <div className='photoViewer'>
                {this.props.posts.map(post=><Photo post={post}/>)}
            </div>
        )
    }
}

export default PhotoViewer
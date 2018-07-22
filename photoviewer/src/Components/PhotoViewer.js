import React,{Component} from 'react';
import Photo from "./Photo";
import AddPhoto from './AddPhoto';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
class PhotoViewer extends Component{
    constructor(){
        super()
        this.state = {
           posts: [{
            id: Number(new Date()),
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
            }, {
            id: Number(new Date()),
            description: "Aliens???",
            imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
            "08323785_735653395_n.jpg"
            }, {
            id: Number(new Date()),
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }]
        }
        const item = {id: Number(new Date()),
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }
        this.state.posts.push(item)
        this.removePhoto = this.removePhoto.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
    }
    removePhoto(removedPost){
        console.log("Inside removePhoto");
        this.setState((state)=>({
            posts: state.posts.filter(post => post.id !== removedPost.id)
        }))
        console.log(this.state.posts)
    }

    addPhoto(photoAdded){
        this.setState((state)=>({
            posts: state.posts.concat(photoAdded)
        }))
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    render(){
        return (
                <div>
                    <Route exact path = '/' render={()=>
                            <div>
                                <Link className='addIcon' to="/addPhoto">+</Link>
                                <div className='photoViewer'>
                                    {this.state.posts.map(post=><Photo post={post} onRemovePhoto={this.removePhoto}/>)}
                                </div>
                            </div>
                    }/>
                    <Route path='/addPhoto' render={({history})=>
                        <AddPhoto onAddPhoto={(addedPost)=>{
                            this.addPhoto(addedPost)
                            history.push('/')
                        }}/>
                    }/>
                </div>
        )
        
    }
}

export default PhotoViewer
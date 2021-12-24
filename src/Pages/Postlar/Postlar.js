import doGet from "../Service";
import {useState,useEffect} from "react";

function Postlar(){
    const [posts, setPosts] = useState([])
    async function getPhotos(){
        const result = await doGet('/posts')
        setPosts(result)
    }
    useEffect(()=>{
        getPhotos()
    },[])
    return(
        <div className={'row'}>
            {posts.map((item, index)=><div className={'col-md-3 mt-4'} key={index}>
                <div className={'card'} >
                    <div className="card-header bg-dark text-white" style={{height:'60px'}}>{item.id}. {item.title}</div>
                    <div className="card-body" style={{height:'250px'}}>{item.body}</div>
                </div>
            </div>)}
        </div>
    )
}export default Postlar;
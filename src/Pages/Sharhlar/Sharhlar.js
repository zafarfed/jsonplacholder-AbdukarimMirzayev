import {useEffect,useState} from "react";
import doGet from "../Service";
function Sharhlar(){

    const [comment, setComment] = useState([])

    async function getComment(){
       const result= await doGet('/comments')
        setComment(result)
    }
    useEffect(()=>{
        getComment()
    },[])

    return(
        <div className={'row'}>
            {comment.map((item, index)=><div className={'col-md-3 mt-4'} key={index}>
                <div className={'card'} >
                    <div className="card-header bg-dark text-white" style={{height:'60px'}}>{item.id}. {item.email}</div>
                    <div className="card-body" style={{height:'250px'}}>{item.body}</div>
                </div>
            </div>)}
        </div>
    )
}export default Sharhlar;
import './Talabalar.css'
import {useState,useEffect} from "react";
import doGet from "../Service";
function Talabalar(){
    const [users, setUsers] = useState([])

    async function getUsers(){
        const res = await doGet('/users')
        setUsers(res)

    }

    useEffect(()=>{
        getUsers()
    },[])

    return(
        <div className={'row'}>
            <table className={'table bg-white'}>
                <tr>
                    <th>№</th>
                    <th>F.I.Sh</th>
                    <th>Talaba ismi</th>
                    <th>Email</th>
                </tr>

                {
                    users.map((item, index)=> <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                    </tr>)
                }
            </table>
         </div>
    )
}export default Talabalar;
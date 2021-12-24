import axios from "axios";
function doGet(url){
           return axios.get('https://jsonplaceholder.typicode.com'+url).then((result)=>{
               return result.data
           })
}export default doGet;
import React,{ useState,useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './index.css'
 function Add(props) {
     const [todo,setTodo] = useState(null)

    const handleChange = (e) =>{
        setTodo(e.target.value)
    }


    const submit = (e) => {
        e.preventDefault()

        const title = 'title'
        const user_id = 1;
        axios.post(`https://todolist-auth-express-server.herokuapp.com/api/todo/create`,{title,todo,user_id})
             .then(res =>{

                 console.log(res.data)
                 setTimeout(() =>{
                    props.history.push('/')
                 },500)
 
             })
             .catch(err =>{
 
                 console.log(err.messege)
 
             })

     }
 
    return (
        <React.Fragment>
        <div class="p-4 add-todo">
            <h3>Add Todo </h3> 
        <div class="todo">
            <input type="text" onChange={handleChange} placeholder="enter todo" />
            <button onClick={submit}> submit </button>
        </div>  
        </div> 
        
        </React.Fragment>
    )
}
export default withRouter(Add);
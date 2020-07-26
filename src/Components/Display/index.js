import React,{ useState, useEffect } from 'react'
import './index.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Display() {

    const [todos,fetchTodos] = useState(null);
    useEffect(()=>{

        const getTodos = async() => {

            await axios.get('https://todolist-auth-express-server.herokuapp.com/api/todo/all/1')
            .then(res => {

                console.log(res.data)
                fetchTodos(res.data)

            })

        }
        getTodos();

    },[])

    const result = todos;
    console.log(result);

    return (
        <div class="display-todos">
                <h3 class="p-4"> My Todos </h3>
                <ul class="p-4">
                    {result != null ? 
                    
                        result.map((todo)=>(
                            
                        
                  <Link to={`edit/${todo.id}`}> 
                    <li class="p-4"> {todo.todo} </li> 
                 </Link>  
                     

                        ))
                    
                    : <p> Loading... </p>
                    
                    }
                
                
                </ul>
        </div>
    )
}

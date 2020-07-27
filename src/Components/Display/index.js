import React,{ useState, useEffect } from 'react'
import './index.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Display(props) {

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

   

    const deleteTodo = (e) => {
        e.preventDefault()
        const id = e.target.id;
       const deleteTodo = async() => {

            await axios.delete(`https://todolist-auth-express-server.herokuapp.com/api/todo/${id}`)
            .then(res =>{

                console.log(res.data)

                setTimeout(() =>{

                  //  props.history.push('/')
                 window.location.reload('/')

                },500)

            })
            .catch(err =>{

                console.log(err.messege);

            })

        }
        deleteTodo();

    }

    const result = todos;
    console.log(result);

    return (
        <div class="display-todos">
                <h3 class="p-4"> My Todos </h3>
                <Link to="/add"> + </Link>
                <ul class="p-4">
                    {result != null ? 
                    
                        result.map((todo)=>(
                            
                    <div class="display container mx-auto flex"> 
                        <Link to={`edit/${todo.id}`}> 
                            <li class="p-4"> {todo.todo} </li> 
                        </Link>  
                        <button id={todo.id} onClick={deleteTodo} class="p-4"> - </button>
                    </div>          
                    
                        ))
                    
                    : <p> Loading... </p>
                    
                    }
                
                
                </ul>
        </div>
    )
}

import React,{ useState, useEffect } from 'react'
import './index.css'
import axios from 'axios'
export default function Edit(props) {


    const [todo,getTodo] = useState(null)
    useEffect(()=>{

        const id = props.match.params.id
       console.log(id)
        const editTodo = async() => {


            await axios.get(`https://todolist-auth-express-server.herokuapp.com/api/todo/${id}`)
            .then(res => {


                console.log(res.data)
                getTodo(res.data)

            })

        }
        editTodo();


    },[])

    console.log(todo);
    return (
        <React.Fragment>
        <div class="p-4 edit-todo">
            <h3>Edit Todo </h3> 
        <div class="todo">
                {todo != null ? 
                    
                    <input type="text" value={todo.todo} />
                
                    :
                    
                    <p> Loading ..</p>
                }   
                <button class="p-4"> submit </button>
        </div>  
        </div> 
        
        </React.Fragment>
    )
}

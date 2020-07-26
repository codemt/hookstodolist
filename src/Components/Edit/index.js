import React,{ useState, useEffect } from 'react'
import './index.css'
import axios from 'axios'
export default function Edit(props) {


    const [todo,setTodo] = useState(null)
    useEffect(()=>{

        const id = props.match.params.id
       console.log(id)
        const editTodo = async() => {


            await axios.get(`https://todolist-auth-express-server.herokuapp.com/api/todo/${id}`)
            .then(res => {


                console.log(res.data)
                setTodo(res.data)

            })

        }
        editTodo();


    },[])

   const submit = (e) => {
        e.preventDefault();
        const id = e.target.id;
        alert(id)

        const updateTodo = async() => {

                //await axios.put(``)

        }
        updateTodo();

    }
    const HandleChange = (e) => {
        setTodo(e.target.value)
    }

    console.log(todo);
    return (
        <React.Fragment>
        <div class="p-4 edit-todo">
            <h3>Edit Todo </h3> 
        <div class="todo">
                {todo != null ? 
                    
                    <div class="item">
                    <input type="text" value={todo.todo} onChange={HandleChange} />
                    <button onClick={submit} id={todo.id} class="p-4"> submit </button>
                    </div>
                    :
                    
                    <p> Loading ..</p>
                }   
        
        </div>  
        </div> 
        
        </React.Fragment>
    )
}

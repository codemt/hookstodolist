import React,{ useState, useEffect } from 'react'
import './index.css'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
function Edit(props) {


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

       //const id = e.target.id;
       const id = props.match.params.id
       console.log(e.target)
       console.log(e.target.id)
        console.log(id)
        console.log(todo)
            const updateTodo = async() => {

                await axios.put(`https://todolist-auth-express-server.herokuapp.com/api/todo/`+id,{todo})
                .then(res => {
        
                    console.log(res.data)
                    setTimeout(()=>{
                        props.history.push('/')
                    },500)
                })
                .catch(err =>{

                    console.log(err)

                })
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
export default withRouter(Edit)

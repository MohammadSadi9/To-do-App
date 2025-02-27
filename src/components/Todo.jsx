    import React, { use, useEffect, useState } from 'react'
    import Todo_icon from '../assets/Todo_icon.png'
import TodoItems from './TodoItems'



    const Todo = () => {
    const[Todos,setTodos]=React.useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[])


    const inputRef=React.useRef();

    const [Text,setText]=useState("")
    const add=(e)=>{
        const inputText=inputRef.current.value.trim()
        if(inputText===""){
            return alert("Please add a task")
        }


       const newTodo={id:crypto.randomUUID(),text:inputText,iscomplete:false}

       setTodos([...Todos,newTodo])
       setText("")
    
    }

    const deletetodo=(id)=>{
        setTodos((prvtodos)=>{
            return prvtodos.filter((e)=> e.id!==id)  
        })
    }   
        

    const toggle=(id)=>{
        setTodos((prvtodos)=>{
            return prvtodos.map((todo)=>{
                if(todo.id===id){
                    return {...todo,iscomplete:!todo.iscomplete}
                }
                return todo
            }) 
        })
    }   

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(Todos))
  },[Todos])        

    return (
        <div className="bg-slate-300 place-self-center w-11/12 max-w-md flex
        flex-col p-7 min-h-[550px] max-h-[550px] rounded-xl shadow-2xl  border-solid
        overflow-y-auto ">

    {/*.....title.....*/}
    <div className='flex items-center mt-7  gap-2'>
        <img className="w-10 h-10 pr-1" src={Todo_icon} alt="" />
        <h1 className="text-3xl font-bold text-center text-slate-900">TODO APP</h1>
        </div>


    {/*.....inputbox.....*/}

    <div className='my-7 flex items-center bg-gray-200 rounded-full'>
        <input onChange={(e)=>setText(e.target.value)} value={Text} ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text"  placeholder='Add a task'/>
        <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white font-medium text-lg cursor-pointer'>ADD+</button>
    </div>


    {/*.....todolist.....*/}

    <div>
        {Todos.map((e)=>{
            return(
                <TodoItems id={e.id} text={e.text} iscomplete={e.iscomplete} deletetodo={deletetodo}
                key={e.id} toggle={toggle}/>
            )
        })}
      
    </div>

        </div>
    )
    }
    
    export default Todo
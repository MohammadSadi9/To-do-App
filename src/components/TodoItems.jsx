import React from 'react'
import Tick from '../assets/tick.png'
import Not_Tick from '../assets/not_tick.png'
import Delete from '../assets/delete.png'

const TodoItems = ({text,id,iscomplete,deletetodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2' key={id}>
     <div className='flex flex-1 items-center gap-2 cursor-pointer' onClick={()=>toggle(id)}>
        <img src={iscomplete?Tick:Not_Tick} alt="" className='w-7' />
        <p className={`text-slate-700 text-lg ${iscomplete?"line-through":""}`}> {text}</p>
     </div>

     <div>
        <img src={Delete} alt="" onClick={()=>deletetodo(id)} className='w-5 cursor-pointer'/>
     </div>
    </div>
  )
}

export default TodoItems
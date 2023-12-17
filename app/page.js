"use client"
import React, { useState } from 'react'

const page = () => {
  const [Description, setDescription] = useState("")
  const [title, settitle] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submithandler = (e)=>{
   e.preventDefault()
   setmainTask([...mainTask, {title,Description}])
   console.log(mainTask);
   settitle("")
   setDescription("")
  }
  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

  }

  let renderTask = <h2> No Task Available</h2>
  if(mainTask.length>0)
  renderTask= mainTask.map((t,i)=>{
    return(
      <li key={i} className="flex items-center justify-between">
              <div className='flex item-center justify-between mb-5 w-2/3'>
              <h5 className="text-2xl font-semibold">{t.title}</h5>
              <h6 className="text-xl font-semibold"> {t.Description} </h6>
               </div>
               <button
               onClick={()=>{
                deleteHandler(i)
               }}
               className="bg-red-400 text-white px-4 py-2 rounded font-bold ">Delete</button>
      </li>
 
  )
    
  })

 
  return (
    <>
    <h1 className='bg-black text-white p-5 text-4xl text-center'>Anurag's todolist</h1>
    <form onSubmit={submithandler}>
      <input type="text" 
      className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder="Enter Title Here.."
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
         <input type="text" 
         className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
         placeholder="Enter Description Here.."
         value={Description}
         onChange={(e)=>{
          setDescription(e.target.value)
         }}
         
         
      />

    <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>Add Task</button>


      
      
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>

    </div>

    
    
    </>
    
  )
}

export default page
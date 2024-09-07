"use client"
import React, { useState } from 'react'

export default function HomePage() {
    //overall 
    const [count,setCount] = useState(0);
    //Add
    function handleAdd(){
        setCount((addButton)=>addButton + 1);
    }
    //subtract
    function handleSubtract(){
        setCount((subtractButton)=>subtractButton - 1);
    }
    if(count<0){
        return
    }
  return (
    <div className='max-width-full bg-blue-400'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum labore mollitia rerum libero officiis, dolor reiciendis voluptates esse, sequi, recusandae quas facere fugiat tempora doloremque possimus omnis inventore minus.</p>


      <div className="inner-container h-[37rem] w-screen bg-red-700 flex items-center justify-center gap-8">
        <button className='subtract h-[5rem] w-[10rem] bg-black rounded-full text-white' onClick={handleAdd}>
            Add

        </button>
        <div className="answer h-[10rem] w-[10rem] bg-blue-700 flex items-center justify-center text-white">
            {count}

        </div>
        <button className="add h-[5rem] w-[10rem] bg-black rounded-full text-white" onClick={handleSubtract}>
            Subtract

        </button>



      </div>
    </div>
  )
}

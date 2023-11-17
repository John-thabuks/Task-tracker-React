import React from 'react'
import Task from "./Task"



const Tasks = ({tasks, ondelete, onToggle}) => {
    return (
        <>
            {tasks.map((task)=>{
                return(
                <Task key={task.id} 
                task={task} 
                ondelete= {ondelete}
                onToggle={onToggle}
                />
                )
                
            })}

        </>
    )
}

export default Tasks
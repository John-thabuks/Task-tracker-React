import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from 'react'

function App(){
  const [tasks, setTasts] = useState(
    [
        {
            "id": 1,
            "text": "Doctors Appointment",
            "day": "Feb 5th at 2:30pm",
            "reminder": true
        },
        {
            "id": 2,
            "text": "Meeting at School",
            "day": "Feb 6th at 1:30pm",
            "reminder": true
        },
        {
            "id": 3,
            "text": "Food Shopping",
            "day": "Feb 5th at 2:30pm",
            "reminder": false
        }
    ]
)

const deleteTask = (id)=>{
  setTasts(tasks.filter((task) => task.id !== id))
}

  // Toggle Reminder
  const toggleReminder = (id)=>{
    setTasts(
      tasks.map((task)=>
      task.id === id ? {...task, reminder:
      !task.reminder} :task)
    )
  }


  return (
    <div className='container'>

      <Header title="Task Tracker"/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} ondelete={deleteTask} onToggle= {toggleReminder} /> )
      : ("No Tasks To Show")}
    </div>
  )
}

export default App;

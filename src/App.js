import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState , useEffect} from "react";
import AddTask from "./components/AddTask";


function App() {
   //State and useState hooks
    //State is immutable.
    //This is global state and can be accessed from any component.

    const [showAddTask, setShowAddTask] =useState(false)

    const [tasks, setTasks] = useState([  ]) 


    useEffect(()=>{
      const getTasks =async () => {
        const tasksFromServer = await fetchTasks ()
        setTasks(tasksFromServer)
      }

      getTasks()

    }, [])//user dependncy array

//Fetch Tasks from db.json
    const fetchTasks = async()=>{
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      
      return data
    }
    //Fetch Tasks from db.json
    const fetchTask = async(id )=>{
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      
      return data
    }
//Add Task

  const addTask = async (task)=>{
    const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(task)
    })
    const data =await res.json()
    setTasks([...tasks, data])
    /*const id =Math.floor(Math.random()* 10000 )+1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])*/
   
  }

//Delete Task using a funcotion
    const deleteTask = async (itemid )=>{
      await fetch(`http://localhost:5000/tasks/${itemid}`,{
        method:'DELETE',
      }) //dELETE FROM BACKEND
      setTasks(tasks.filter((task) => task.id !== itemid))
    }
//Toggle Reminder

    const toggleReminder = async(id) =>{
      const taskToToggle = await fetchTask(id)
      const updTask ={ ...taskToToggle, 
      reminder: !taskToToggle.reminder}

      const res =await fetch (`http://localhost:5000/tasks/${id}`,{
        method: 'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(updTask)
      }) 

      const data =await res.json()


      setTasks(
        tasks.map((task) => task.id === id ? {
        ...task , reminder: data.reminder
      } : task))

    }

  return (
    <div className='container'>
      <Header 
      onAdd={ () => setShowAddTask(!showAddTask)} 
      title="Task Tracker"
      showAdd ={showAddTask}/>

    { showAddTask && <AddTask onAdd ={addTask}/>}
     
      <Tasks 
      tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
    </div>
  );
}

export default App;

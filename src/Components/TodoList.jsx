import React,{useEffect, useState} from 'react'
import Card from './Card'
import CreateTask from '../Popups/CreateTask'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoList() {
    const [modal,setModal] = useState(false)
    const [taskList,setTaskList] = useState([])

    const LoadTask = () => {
        let taskListFromLocalStorage = localStorage.getItem('mithru-todo-list')
        if( taskListFromLocalStorage)  {
            taskListFromLocalStorage = JSON.parse( taskListFromLocalStorage)
            setTaskList(taskListFromLocalStorage)
        }
    }

    const toastOptions = {
        position:'top-center',
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:'dark'
      }

    useEffect(() => {
       LoadTask()
    },[])

    const toggle =() => {
        setModal(!modal)
    }
    const saveTask = (taskObj) => {
      if(taskObj.name.trim()=='' || taskObj.description.trim() == ''){
        toast.error('Task name and description cannot be empty!',toastOptions)
      }
      else{
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(tempList)
        setModal(false)
        localStorage.setItem('mithru-todo-list',JSON.stringify(tempList))
        toast.success('task succesfully added!',toastOptions)
      }
     }
     const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index,1)
        setTaskList(tempList)
        localStorage.setItem('mithru-todo-list',JSON.stringify(tempList))
        LoadTask()
        toast.warning('Deleted the task!',toastOptions)
     }
     const updateList = (obj,index) => {
        let tempList = taskList
        tempList[index] = obj
        setTaskList(tempList)
        localStorage.setItem('mithru-todo-list',JSON.stringify(tempList))
        LoadTask()
     }
  return (
   <>
     <div className='header text-center'>
        <div className="title">
        <h3>Mithru Todo List</h3>
        <p>A friend who helps you to complete and organise your tasks</p>
        </div>
        <button className='btn btn-primary' onClick={() => setModal(true)}> Create Task</button>
     </div>
     <div className="card-wrapper">
       <div className="cards">
       {
            taskList.map((task , index) => <Card taskObj = {task} index={index}  deleteTask = {deleteTask} updateList={updateList} key={index}  />)
        }
       
       </div>
     </div>
     <CreateTask toggle={toggle} modal={modal} save={saveTask} />
     <ToastContainer />
   </>
  )
}

export default TodoList
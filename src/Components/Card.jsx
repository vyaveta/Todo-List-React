import React,{useState} from 'react'
import EditTask from '../Popups/EditTask'

const Card = ({taskObj , index , deleteTask , updateList}) => {
    const colors = [  "#5D93E1", "#F9D288", "#5DC250",  "#F48687", "#B964F7"]
    const [modal,setModal] = useState(false)

    const handleDelete = (ind) => {
        deleteTask(ind)
    }
    const toggle = () => {
        setModal(!modal)
    }
    const updateTask = (obj) => {
        toggle()
        updateList(obj,index)
    }
  return (
    <>
    <div className="card" >
        <div className="topdiv" style={{'background':colors[index%5]}}></div>
        <h2 style={{'color':colors[index%5]}}>{taskObj.name}</h2>
        <div className="description">
            <p style={{'color':'black'}}>{taskObj.description}
            </p>
        </div>
        <div className="button-div">
            <i className="fa-solid fa-pencil" style={{'color':colors[index%5],'cursor':'pointer'}} onClick={() => setModal(true)} ></i>
            <i className="fa-solid fa-trash-can" style={{'color':colors[index%5],'cursor':'pointer'}} onClick={() => handleDelete(index)}></i>
        </div>
    </div>
    <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
    </>
    

  )
}

export default Card
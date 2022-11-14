import React,{useEffect, useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal , toggle , updateTask, taskObj}) => {
    const [taskName,setTaskName] = useState('')
    const [description,setDescription] = useState('')

    useEffect(() => {
        setTaskName(taskObj.name)
        setDescription(taskObj.description)
    },[])

    // functions
    const handleChange = (e) => {
        const {name , value} = e.target
        if(name === 'taskName') setTaskName(value)
        else setDescription(value)
    }
    const handleEdit = (e) => {
       e.preventDefault()
       let tempObj = {
        name:taskName,
        description: description
       }
       updateTask(tempObj)
    }
  return (
    <Modal
    isOpen={modal}
    modalTransition={{ timeout: 700 }}
    backdropTransition={{ timeout: 1300 }}
    toggle={toggle}
  >
    <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
    <ModalBody>
      <form className='popup-form'>
        <div className="form-group">
            <label > Task Name</label>
            <input type="text" className='form-control' name='taskName' value={taskName} onChange={(e) => handleChange(e)} />
        </div>
        <div className="form-group mt-2">
            <label htmlFor="">Description</label>
            <textarea name="description" id="" cols="30" rows="5" className='form-control' value={description} onChange={(e) => handleChange(e)}></textarea>
        </div>
      </form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={handleEdit}>
      Edit
      </Button>{' '}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  )
}

export default EditTask
import React,{ useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle , save}) => {
    const [taskName,setTaskName] = useState('')
    const [description,setDescription] = useState('')

    // functions
    const handleChange = (e) => {
        const {name , value} = e.target
        if(name === 'taskName') setTaskName(value)
        else setDescription(value)
    }
    const handleSave = (e) => {
        console.log(e)
        e.preventDefault()
        let taskObj = {}
        taskObj['name'] = taskName
        taskObj['description'] = description
        save(taskObj)
        setTaskName('')
        setDescription('')
       
    }
  return (
    <Modal
    isOpen={modal}
    modalTransition={{ timeout: 700 }}
    backdropTransition={{ timeout: 1300 }}
    toggle={toggle}
  >
    <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
      <Button color="primary" onClick={handleSave}>
      Create
      </Button>{' '}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  )
}

export default CreateTask
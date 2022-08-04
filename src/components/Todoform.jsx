import React,{useEffect, useState,useContext} from 'react'
import todoContext from '../context/todoContext';

function Todoform() {
    const [task, setTask] = useState('')
    //context
    const {handleAdd,handleUpdate,itemEdit}=useContext(todoContext)

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.length > 0) {
            if (itemEdit.edit===false) {
            handleAdd(task)
            } else {
                handleUpdate(task, itemEdit.item.id) 
                //setEdit(false)
            }
            setTask('')
        }
    }
    useEffect(() => {

        if (itemEdit.edit === true) {
           setTask(itemEdit.item.name)
       }
   },[itemEdit]) 
   
  return (
      <div className='form-container'>
          <form className='formContainer' onSubmit={handleSubmit}>
              <input type="text" className='form-input' value={task}
                  onChange={ handleChange} />
              <button className='form-button' type='submit'>Submit</button>
         </form>
      </div>
  )
}

export default Todoform

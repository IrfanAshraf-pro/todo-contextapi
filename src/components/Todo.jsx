import React, { useEffect, useState } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {useContext} from 'react'
import todoContext from '../context/todoContext';


function Todo({ item }) {

  const [comp,setComp]=useState('white')
  const {handleEdit,handleDelete,handleCompleted}=useContext(todoContext)

  const deleteItem=() => {
    handleDelete(item.id)
  }
  const edit = () => {
    handleEdit(item)
  }
  useEffect(() => {
    if (item.completed) {
      setComp('green')
    }else{
      setComp('white')
    }
  },[item.completed])
  const completed = () => {
    handleCompleted(item.id, !item.completed)
  }
  
  return (
      <div className={`todo-container ${item.completed ?'completed' : 'unComplete'}`}>
          <div className="todo-icons">
              {!item.completed && <BiEdit
                className={`edit-icon ${item.completed ?'completed' : 'unComplete'}`}
                size="18px"
                color="white"
          onClick={edit}
          cursor="pointer"
        />}
              <RiDeleteBin5Fill
                className={`${item.completed ? 'completed delete-icon':'delete-icon' }`}
                size="18px"
                cursor="pointer"
                color="red"
                onClick={deleteItem}
              />
          </div>
          <div className="todo-body">
          <div className="todo-status-container">
              <BsCheck2Circle
              className={`${item.completed ? 'completed check-icon':'check-icon' }`}
              size="40px"
            color={comp}
            onClick={completed}
            cursor="pointer"
              />
          </div>
        <div className={`todo-name ${item.completed &&  'completed'}`}>{ item.name}</div>
          </div>
    </div>
  )
}

export default Todo

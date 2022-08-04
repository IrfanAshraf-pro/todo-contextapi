import React from 'react'
import Todo from './Todo';
import {useContext} from 'react'
import todoContext from '../context/todoContext';

function TodoItems({  handleCompleted }) {
  const {todo}=useContext(todoContext)
  return (
    <div className='todos-container'>
          {
              todo.length>0 ? (
                todo.map((item) => (
                  <Todo item={item} key={item.id}/>
              ))
        ) : (
            <p className='todos-empty'>No todos </p>
              )
      }
    </div>
  )
}

export default TodoItems

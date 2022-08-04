import { createContext, useState } from 'react'

const todoContext = createContext()

export function TodoProvider({ children }) {
    const [todo, setTodo] = useState([
        {
            id: 1,
            name: 'Learn Web development ',
            completed: false,
          },
          {
            id: 2,
            name: 'Learn Copywriting',
            completed: false,
          },
          {
            id: 3,
            name: 'Learn Amazon',
            completed: false,
          }
    ])
    const [itemEdit, setItemEdit] = useState({
        item:{},
        edit:false
  })


    //delete todo
    const handleDelete = (id) => {
        const newTo = todo.filter((to) => {
          return to.id !== id
        })
        setTodo(newTo)
      }

    //add todo
    const handleAdd = (e) => {
        let { id } = todo.slice(-1).pop()
        id=id+1
        const newTodo = {
          id,
          name: e,
          completed: false
        }
        setTodo([...todo, newTodo])
    }
    
    //handle update
    const handleUpdate = (name, id) => {
        console.log(name, id);
        setTodo(todo.map((item) =>
          item.id === id ?
            { ...item, name } : item
        ))
        setItemEdit({
            edit: false,
            item:{}
        })
      }

    //handle edit request
    const handleEdit = (item) => {
        setItemEdit({
            edit: true,
            item,
        })
      }

      //completed todo handler
      const handleCompleted = (ids,value) => {
        setTodo(todo.map((item) => 
          item.id===ids ? {...item,completed:value}:item
        )
    )
      }
    
    return (
        <todoContext.Provider value={{
            todo,
            itemEdit,
            handleDelete,
            handleAdd,
            handleUpdate,
            handleEdit,
            handleCompleted
        }}>
            {children}
        </todoContext.Provider>
    )
}




export default todoContext
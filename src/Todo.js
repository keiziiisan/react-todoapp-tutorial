import React from 'react'

export const Todo = ({ todo, toggleTodo }) => {

  const handleCompleted = () => {
    toggleTodo(todo.id);
  }

  return (
      <>
        <div>
          <label>
            <input type="checkbox" checked={ todo.completed } onChange={ handleCompleted } readOnly />
          </label>
          { todo.name }
        </div>
      </>
  )
}

export default Todo;

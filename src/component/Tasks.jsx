import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Tasks() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.todo.tasks)

  const removeTask = (idx) => {
    const updatedList = taskList.filter((task, i) => i !== idx )
    dispatch({type: 'REMOVE_TASK', payload: updatedList})
  }

  return (
    <ol>
      {taskList.map((item, idx) => (
        <div key={idx}>
          <li>{item}</li>
          <button onClick={ () => removeTask(idx)}>Deletar</button>
        </div>
      ))}
    </ol>
  )
}

export default Tasks

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tasks from '../component/Tasks'

function TodoList() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const [taskInput, setTaskInput] = useState('')

  const addTask = () => {
    dispatch({type: 'ADD_TASK', payload: taskInput});
    setTaskInput('');
  }

  return (
      <div>
          <header>
              <h1>Todo List</h1>
              <span>{ email }</span>
          </header>
          <main>
            <input 
              type="text"
              value={ taskInput }
              onChange={ (evt) => setTaskInput(evt.target.value) }
            />
            <button onClick={ addTask }>
              Adicionar tarefa
            </button>
            <div>
              <h4>Lista de Tarefas</h4>
              <Tasks />
              <button onClick={() => dispatch({type: 'CLEAR_TASKS'})}>LIMPAR</button>
            </div>
          </main>
      </div>
  )
}

export default TodoList;

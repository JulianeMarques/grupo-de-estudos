const lsTasks = localStorage.tasks

const initialState = {
  tasks: lsTasks ? JSON.parse(lsTasks) : [],
};

const todoReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'ADD_TASK':
      return {...state, tasks: [...state.tasks, payload] }

      case 'REMOVE_TASK':
        return {...state, tasks:  payload }

      case 'CLEAR_TASKS':
        return initialState;
  
    default:
      return state;
  }
}

export default todoReducer;

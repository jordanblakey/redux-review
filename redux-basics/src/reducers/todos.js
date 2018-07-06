const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let ret = [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      console.log(ret)
      return ret
    case 'TOGGLE_TODO':
      let ret2 = state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
      console.log(ret2)
      return ret2
    default:
      return state
  }
}

export default todos

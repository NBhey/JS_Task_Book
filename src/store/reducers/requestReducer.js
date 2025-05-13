const initialState = {
  tasksArray: [],
};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return { ...state, tasksArray: action.payload };
    default:
      return state;
  }
};

export default requestReducer;
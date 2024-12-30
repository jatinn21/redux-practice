const actionTypes = {
  ADD_TASK: "Todo/AddTask",
  REMOVE_TASK: "Todo/RemoveTask",
};

const initialState = {
  allTask: [],
};

const taskReducers = (state = initialState, action) => {
  switch (action.types) {
    case actionTypes.ADD_TASK:
      return {
        ...state,
        allTask: [...state.allTask, action.payload],
      };

    case actionTypes.REMOVE_TASK: {
      const updatedTask = state.allTask.filter((task) => {
        return task.id !== action.payload;
      });
      return {
        ...state,
        allTask: updatedTask,
      };
    }

    default:
      return state;
  }
};


/*

Reducer Function
It takes two arguments: state and action.
The state argument is the current state of the application, and the action argument is what kind of acton we want to perform like increment or decrement.

Naming should be like taskDomain/task
like Todo/AddTask or Todo/RemoveTask.

Two things to keep in mind :
- never mutate the state directly.
- always return a new state object when working with reducer.

*/

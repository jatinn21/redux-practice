import { createStore } from "redux";

const actionTypes = {
  ADD_TASK: "Todo/AddTask",
  REMOVE_TASK: "Todo/RemoveTask",
};

const initialState = {
  allTask: [],
};

// Step 1 : Create Reducer Function
const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return {
        ...state,
        allTask: [...state.allTask, action.payload],
      };

    case actionTypes.REMOVE_TASK: {
      const updatedTask = state.allTask.filter((_, index) => {
        return index + 1 !== action.payload;
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

// Step 2 : Create Store
const store = createStore(taskReducers);

// Step 3 : Console the store and current state using getState() method
console.log(store.getState(), "Initial Store");

// Step 4 : Dispatch an Action and console the current store
store.dispatch({
  type: actionTypes.ADD_TASK,
  payload: "Learn Redux and RTK",
});
store.dispatch({
  type: actionTypes.ADD_TASK,
  payload: "Revise TanStack Query",
});
console.log("Added two Tasks", store.getState());

store.dispatch({
  type: actionTypes.REMOVE_TASK,
  payload: 1,
});
console.log("Updated Store, Deleted first element", store.getState());

// Step 5 : Crete Action Creators
const addTask_ActionCreator = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    payload: task,
  };
};

const removeTask_ActionCreator = (taskIndex) => {
  return {
    type: actionTypes.REMOVE_TASK,
    payload: taskIndex,
  };
};

// Step 6 : Dispatch an Action using Action Creators
store.dispatch(addTask_ActionCreator("Revision of TanStack Query"));
console.log("Updated Store using Add Action Creators", store.getState());

store.dispatch(removeTask_ActionCreator(2));
console.log("Updated Store using Remove Action Creators", store.getState());

export default store;

/*

Reducer Function
It takes two arguments: state and action.
The state argument is the current state of the application, and the action argument is what kind of acton we want to perform like increment or decrement.

Naming should be like taskDomain/task
like Todo/AddTask or Todo/RemoveTask.

Two things to keep in mind :
- never mutate the state directly.
- always return a new state object when working with reducer.



Store
The store is where Redux keeps all the application data.
It's like database for your app but it's only for managing data in memory (not saving it permanently).

How to create it?
- import createStore from redux.
- import reducer function and pass it to createStore.

Example:
import { createStore } from "redux";
const store = createStore(taskReducers);

Now you might be thinking what is the need of reducer function in createStore?
The createStore method creates a Redux store using a reducer function that handles how state changes in response to actions.



Store Methods :

1. Dispatch an Action
The store has a method called dispatch that is used to dispatch an action.
An action is an object that has a type property and an optional payload property.
The type property is a string that describes the action, and the payload property is any data that you want to send along with the action.
It takes at least one argument: an object with a type property.
type is mandatory and payload is optional.

Syntax: 
store.dispatch({ type: "ACTION_TYPE", payload: data });

Example:
store.dispatch({ type: "ADD_TASK", payload: "Learn Redux" });

2. getState()
The getState method returns the current state of the Redux store.
It does not take any arguments.
Useful for accessing the current state after it gas been updated or to monitor changes.


Action Creators
Action creators are functions that create actions.
instead of writing  { type : "ADD_TASK", payload: "Learn Redux" }  every time, we can create a function that returns this object.

Example:
const addTask_ActionCreator = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    payload: task,
  };
};

const removeTask_ActionCreator = (taskIndex) => {
  return {
    type: actionTypes.REMOVE_TASK,
    payload: taskIndex,
  };
};



To connect react with redux, we need to use react-redux library. Then Wrap the App component with Provider component and pass the store as a prop to Provider component.

*/

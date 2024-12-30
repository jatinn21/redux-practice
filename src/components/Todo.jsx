import React from "react";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux";
import store, {
  addTask_ActionCreator,
  removeTask_ActionCreator,
} from "../store/store";

export default function Todo() {
  const tasks = useSelector((state) => state.allTask);
  const [task, setTask] = React.useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask_ActionCreator(task));
    console.log("currenState", store.getState());
    setTask("");
  };

  return (
    <>
      <svg
        viewBox="0 0 0 0"
        style={{ position: "absolute", zIndex: -1, opacity: 0 }}
      >
        <defs>
          <linearGradient
            id="boxGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="25"
            y2="25"
          >
            <stop offset="0%" stopColor="#27FDC7" />
            <stop offset="100%" stopColor="#0FC0F5" />
          </linearGradient>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#0FC0F5" />
            <stop offset="100%" stopColor="#27FDC7" />
          </linearGradient>
          <path
            id="todo__line"
            stroke="url(#lineGradient)"
            d="M21 12.3h168v0.1z"
          ></path>
          <path
            id="todo__box"
            stroke="url(#boxGradient)"
            d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
          ></path>
          <path
            id="todo__check"
            stroke="url(#boxGradient)"
            d="M10 13l2 2 5-5"
          ></path>
          <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>
        </defs>
      </svg>
      <div className="todo-list">
        <input
          type="text"
          placeholder="Add a Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input type="submit" value="Add Task" onClick={handleAddTask} />
        {tasks.map((task, index) => (
          <label key={index} className="todo">
            <input
              type="checkbox"
              onClick={() => dispatch(removeTask_ActionCreator(index+1))}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 200 25"
              className="todo__icon"
            >
              <use xlinkHref="#todo__line" className="todo__line"></use>
              <use xlinkHref="#todo__box" className="todo__box"></use>
              <use xlinkHref="#todo__check" className="todo__check"></use>
              <use xlinkHref="#todo__circle" className="todo__circle"></use>
            </svg>
            <div className="todo__text">{task}</div>
          </label>
        ))}
      </div>
    </>
  );
}

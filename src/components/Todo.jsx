import { useState, useContext } from "react";
import { MaterialSymbolsDeleteSharp as DeleteIcon } from "./icons/MaterialSymbolsDeleteSharp";
import { MaterialSymbolsEditSharp as EditIcon } from "./icons/MaterialSymbolsEditSharp";
import deleteContext from "../contexts/deleteContext";

const Todo = ({ todo, setTodoEditing }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const taskClasses = `cursor-pointer select-none p-3 rounded-l-md grow bg-green-600
  ${isCompleted ? "line-through bg-slate-600" : ""}`;
  const deleteTodo = useContext(deleteContext);

  return (
    <div className="flex mt-2">
      <div
        className={taskClasses}
        onClick={() => {
          todo.completed = !todo.completed;
          setIsCompleted(todo.completed);
        }}
      >
        {todo.task}
      </div>
      <a
        className="p-3 cursor-pointer bg-orange-600 flex justify-center items-center"
        onClick={() => setTodoEditing(todo.id)}
      >
        <EditIcon className="w-6" />
      </a>
      <a
        className="p-3 cursor-pointer bg-red-600 rounded-r-md flex justify-center items-center"
        onClick={() => deleteTodo(todo.id)}
      >
        <DeleteIcon className="w-6" />
      </a>
    </div>
  );
};

export default Todo;

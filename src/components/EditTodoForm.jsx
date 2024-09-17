import { useState } from "react";
import { MaterialSymbolsCheckBox as CheckBox } from "./icons/MaterialSymbolsCheckBox";

function EditTodoForm({ todo, editTodo }) {
  const [value, setValue] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") editTodo(todo.id, todo.task);
    else editTodo(todo.id, value);
    setValue("");
  };

  return (
    <form className="flex mt-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        className=" placeholder-green-950 grow outline-none bg-green-600 p-3 rounded-l-md"
        type="text"
        value={value}
        placeholder={todo.task}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-orange-600 rounded-r-md p-3 flex justify-center items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-green-300 active:ring-0"
      >
        <CheckBox className="w-6" />
      </button>
    </form>
  );
}

export default EditTodoForm;

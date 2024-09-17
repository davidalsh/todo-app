import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className=" placeholder-green-600 outline-none bg-green-950 p-2 border border-green-600 rounded-l-md w-80 "
        type="text"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 rounded-r-md p-2 border border-green-600 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-green-300 active:ring-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;

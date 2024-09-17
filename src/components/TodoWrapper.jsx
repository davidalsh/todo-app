import { useState } from "react";
import deleteContext from "../contexts/deleteContext";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";

uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo) {
      setTodos([
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ...todos,
      ]);
    }
  };

  const setTodoEditing = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const editTodo = (todoId, value) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: value, isEditing: false } : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <deleteContext.Provider value={deleteTodo}>
      <div className="p-4 text-white bg-green-950 rounded-md flex-col justify-center">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.id} todo={todo} editTodo={editTodo} />
          ) : (
            <Todo key={todo.id} todo={todo} setTodoEditing={setTodoEditing} />
          )
        )}
      </div>
    </deleteContext.Provider>
  );
};

export default TodoWrapper;

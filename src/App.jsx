import TodoWrapper from "./components/TodoWrapper";
import "./index.css";

const App = () => {
  return (
    <div className="App w-screen h-screen bg-green-600 flex items-center justify-center">
      <TodoWrapper />
    </div>
  );
};

export default App;

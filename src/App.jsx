import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { useLocalStorage } from "./utils/useLocalStorage";

function App() {
  const [todos, setTodos] = useState([]);
  const { setItem } = useLocalStorage("todos");

  const handleAddTask = (newTask) => {
    if (!newTask) return;
    const newTaskObj = {
      id: todos.length + 1,
      task: newTask,
      completed: false,
    };

    setTodos([...todos, newTaskObj]);
    setItem([...todos, newTaskObj]);
  };

  const handleDeleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setItem(newTodos);
  };

  useEffect(() => {
    const { getItem } = useLocalStorage("todos");
    setTodos(getItem());
  }, []);

  return (
    <main className="main | max-w-[32rem] mx-auto sm:mt-[10vh] bg-white sm:rounded-md h-screen w-full md:w-auto md:h-auto py-4 overflow-y-scroll sm:max-h-[40rem]">
      <Header />
      <TodoInput onAddTask={handleAddTask} />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  );
}

export default App;

import axios from "axios";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );

        settodos(response?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-5">Todos</h1>
      <div className="bg-slate-200 p-2 m-auto w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {todos &&
          todos.map((todo) => (
            <div
              key={todo.id}
              className="p-4 bg-slate-800 text-gray-100 flex flex-col gap-2 justify-between rounded-md relative"
            >
              <h2 className="text-xl font-semibold">{todo.title}</h2>
              <p>{todo.completed ? "Completed" : "Incomplete"}</p>
              <button
                className="bg-red-600 p-1 rounded-md absolute right-2 bottom-2"
                onClick={() => settodos(todos.filter((t) => t.id !== todo.id))}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;

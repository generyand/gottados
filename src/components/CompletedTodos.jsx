import React from "react";
import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";

export default function CompletedTodos({ setTodos, todos, onDeleteTask }) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="px-3 mb-5 md:px-4">
      <p className="mb-3 text-sm font-bold text-gray-600">COMPLETED</p>
      <div className="flex flex-col gap-2">
        <AnimatePresence>
          {completedTodos.map((todo) => {
            return (
              <TodoItem
                completed={true}
                todos={todos}
                todo={todo}
                setTodos={setTodos}
                onDeleteTask={onDeleteTask}
                key={todo.id}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

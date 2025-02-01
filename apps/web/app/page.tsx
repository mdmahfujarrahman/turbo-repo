"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TodoFilterList, todosService } from "@repo/core";
import { Todo } from "@repo/core/domain/interfaces/Todo";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Tab } from "@repo/ui/tab";

const TodoList = () => {
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterType, setFilterType] = useState<string>("All");

  useEffect(() => {
    // Function to fetch todos from the service and update the store
    const loadTodos = async (filterType: string) => {
      const todosData = await todosService.getTodos(filterType); // Fetch todos
      setTodos(todosData); // Update Zustand store
    };

    loadTodos(filterType);
  }, [filterType]);

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "500px", margin: "0 auto" }}>
        {todos.length === 0 && <div>Data not found</div>}

        <Card className="todo-card">
          <Tab className="tabs">
            {TodoFilterList?.map((data) => (
              <Button
                key={data?.id}
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={() => setFilterType(data?.name)}
                className={`tab ${filterType === data?.name ? "active" : ""}`}
              >
                {data?.name}
              </Button>
            ))}
          </Tab>
          {todos.length > 0 && (
            <ul className="todo-list">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`todo-item ${todo.completed ? "completed" : ""}`}
                >
                  <p>{todo.title}</p>
                  <div>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={(e) => console.log(todo.id, e.target.checked)}
                      style={{ transform: "scale(1.2)", cursor: "pointer" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "salmon",
              color: "white",
              padding: "10px 20px",
              borderRadius: "6px",
              marginTop: "20px",
            }}
            onClick={() => router.push("/new")}
          >
            Create New Todo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TodoList;

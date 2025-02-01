"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { todosService } from "@repo/core";
import { Todo } from "@repo/core/domain/interfaces/Todo";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Tab } from "@repo/ui/tab";

const TodoList = () => {
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // Function to fetch todos from the service and update the store
    const loadTodos = async () => {
      const todosData = await todosService.getTodos(); // Fetch todos
      setTodos(todosData); // Update Zustand store
    };

    loadTodos();
  }, []);

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "700px", margin: "0 auto" }}>
        {todos.length === 0 && <div>Data not found</div>}

        <Card className="todo-card">
          <Tab className="tabs">
            <Button
              style={{
                backgroundColor: "salmon",
                color: "white",
                padding: "5px 14px",
                borderRadius: "6px",
                marginTop: "20px",
              }}
              onClick={() => router.push("/new")}
            >
              Create New Todo
            </Button>
          </Tab>

          {todos.length > 0 && (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {todos.map((data: Todo) => (
                <li
                  key={data.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                  }}
                >
                  <div style={{ fontSize: "18px" }}>{data.title}</div>
                  <div>
                    <input
                      type="checkbox"
                      checked={data.completed}
                      onChange={(e) => console.log(data.id, e.target.checked)}
                      style={{ transform: "scale(1.2)", cursor: "pointer" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Button
          style={{
            backgroundColor: "salmon",
            color: "white",
            padding: "5px 14px",
            borderRadius: "6px",
            marginTop: "20px",
          }}
          onClick={() => router.push("/new")}
        >
          Create New Todo
        </Button>
      </div>
    </section>
  );
};

export default TodoList;

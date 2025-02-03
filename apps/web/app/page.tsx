"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";
import { Tab } from "@repo/ui/tab";
import { Card } from "@repo/ui/card";
import { Todo, TodoFilterList } from "@repo/core/domain";
import { todosService } from "@repo/core/application";
import { Section } from "@repo/ui/section";

const TodoList = () => {
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterType, setFilterType] = useState<string>("All");

  useEffect(() => {
    const loadTodos = async (filterType: string) => {
      const todosData = await todosService.getTodos(filterType);
      setTodos(todosData);
    };

    loadTodos(filterType);
  }, [filterType]);

  const toggleTodos = async (id: number) => {
    try {
      const todosData = await todosService.toggleTodo(id);
      setTodos(todosData);
    } catch (error) {
      alert("something wrong");
    }
  };

  return (
    <Section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "500px", margin: "0 auto" }}>
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
                      checked={todo?.completed}
                      onClick={() => {
                        toggleTodos(todo?.id);
                      }}
                      onChange={(e) => console.log(todo.id, e.target.checked)}
                      style={{ transform: "scale(1.2)", cursor: "pointer" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
          {todos.length === 0 && (
            <h4
              style={{
                textAlign: "center",
                color: "black",
                padding: "4px"
              }}
            >
              No Todos
            </h4>
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
            className="primary-button"
            onClick={() => router.push("/new")}
          >
            Create New Todo
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default TodoList;

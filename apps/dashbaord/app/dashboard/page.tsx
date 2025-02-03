"use client";

import { todosService } from "@repo/core/application";
import { Todo } from "@repo/core/domain";
import { Button } from "@repo/ui/button";
import { Section } from "@repo/ui/section";

import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const page = () => {
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

  return (
    <Section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="quick-stats">
        <h1 className="quick-stats-title">DPP Dashboard</h1>
        <h2 className="quick-stats-title">Quick Stats</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-title">Total Tasks</h3>
            <p className="stat-value">{todos?.length}</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-title">Completed</h3>
            <p className="stat-value">{todos?.filter(item => item.completed)?.length}</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-title">Pending</h3>
            <p className="stat-value">{todos?.filter(item => !item?.completed)?.length}</p>
          </div>
        </div>
        <Button className="primary-button" onClick={() => router.push("/")}>
          Back
        </Button>
      </div>
    </Section>
  );
};

export default page;

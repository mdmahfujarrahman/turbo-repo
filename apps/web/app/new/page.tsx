"use client";

import { todosService } from "@repo/core/application";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateTodoForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    isMark: false,
  });

  const handleCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // AddTodo service call
    try {
      if (!formData.title) {
        alert("Title is required");
        return;
      }

      const newTodo = {
        title: formData.title,
        completed: formData.isMark,
      };

      // Service call
      await todosService.addTodo(newTodo);

      // Reset form
      setFormData({ title: "", isMark: false });
      router.push("/");
    } catch (error) {
      console.error("Failed to create todo:", error);
    }
  };
  return (
    <div
      style={{
        width: "500px",
        margin: "50px auto",
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Create New Todo
      </h2>
      <form onSubmit={handleCreateTodo}>
        {/* Title Field */}
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="title"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Title:
          </label>
          <input
            id="title"
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>

        {/* Completed Field */}
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="completed"
            style={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              id="completed"
              type="checkbox"
              style={{ marginRight: "10px", transform: "scale(1.2)" }}
              checked={formData.isMark}
              onChange={(e) =>
                setFormData({ ...formData, isMark: e.target.checked })
              }
            />
            Mark as Completed
          </label>
        </div>

        {/* Submit Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
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
            onClick={() => router.push("/")}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodoForm;

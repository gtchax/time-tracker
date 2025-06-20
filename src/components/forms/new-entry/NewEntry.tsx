import { Task } from "../../../lib/types";
import "./NewEntry.css";
import React, { useEffect, useState } from "react";



const NewEntry = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDuration, setTaskDuration] = useState<number | undefined>(
    undefined
  );
  const [error, setError] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [sumTotal, setSumTotal] = useState<number>(0);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  useEffect(() => {
    const total = tasks.reduce((sum, task) => sum + task.duration, 0);
    setSumTotal(total);
  }, [tasks]);

  const handleSave = () => {
    if (!taskName.trim()) {
      setError("Task name cannot be empty.");
      return;
    }

    if (taskDuration && taskDuration <= 0) {
      setError("Time worked must be greater than 0 seconds.");
      return;
    }

    if (editingTaskId !== null) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingTaskId
            ? { ...t, name: taskName, duration: taskDuration! }
            : t
        )
      );
    } else {
      const newTask: Task = {
        id: Date.now(),
        name: taskName.trim(),
        duration: taskDuration!,
      };
      setTasks((prev) => [...prev, newTask]);
    }
    handleReset();
  };

  const handleReset = () => {
    setTaskName("");
    setTaskDuration(undefined);
    setEditingTaskId(null);
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEdit = (task: Task) => {
    setEditingTaskId(task.id);
    setTaskName(task.name);
    setTaskDuration(task.duration);
    setError("");
  
  };

  return (
    <section className="container">
      <hr />
      <div className="form-container">
        <h3>{editingTaskId ? "Edit" : "Add new"} Entry</h3>
        <input
          type="text"
          placeholder="Task name"
          className="mr"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
            setError("");
          }}
        />
        <input
          type="number"
          placeholder="Hours worked"
          className="mr"
          value={taskDuration ?? ""}
          onChange={(e) => {
            setTaskDuration(Number(e.target.value));
            setError("");
          }}
        />
        {error && <p>{error}</p>}
        <button onClick={handleSave}>Save</button>
      </div>
     {!editingTaskId && <div>
        <hr />
        <div className="flex-row">
          <h2>List entries </h2>
          <span className="total">Total hours worked: {sumTotal}</span>
        </div>

        {tasks.length < 1 ?
        <p className="text-center">No tasks entries added yet</p>
          :<table className="task-table">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Duration (hours)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.duration}</td>
                <td>
                  <button
                  onClick={() => handleEdit(task)}
                  className="edit-btn">Edit</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>}
      </div> }
    </section>
  );
};

export default NewEntry;

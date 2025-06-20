import React, { useState } from "react";

type Task = {
  id: number;
  name: string;
  duration: number;
};

const NewEntry = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDuration, setTaskDuration] = useState<number | undefined>(
    undefined
  );
  const [error, setError] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [sumTotal, setSumTotal] = useState<number>(0);

  const totalHours = () => {
    const total = tasks.reduce((sum, task) => sum + task.duration, 0);
    setSumTotal(total);
  };

  const handleSave = () => {
    if (!taskName.trim()) {
      setError("Task name cannot be empty.");
      return;
    }

    if (taskDuration && taskDuration <= 0) {
      setError("Time worked must be greater than 0 seconds.");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      name: taskName.trim(),
      duration: taskDuration!,
    };
    setTasks((prev) => [...prev, newTask]);
    totalHours();
  };

  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
            setError("");
          }}
          className="border p-2 w-full mb-2"
        />
        <input
          type="number"
          placeholder="Hours worked"
          value={taskDuration}
          onChange={(e) => {
            setTaskDuration(Number(e.target.value));
            setError("");
          }}
          className="border p-2 w-full mb-2"
        />
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <hr />
        <h2>List entries </h2>
        <span>Total hours worked: {sumTotal}</span>
        {tasks.map((task) => (
          <div key={task.id}>
            {task.name}
            {task.duration}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewEntry;

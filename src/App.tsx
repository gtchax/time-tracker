import { useEffect, useState } from "react";
import "./App.css";
import Timer from "./components/timer/Timer";
import { Task } from "./lib/types";
import AddEditEntry from "./components/forms/AddEditEntry";
import EntryList from "./components/entry-list/EntryList";

function App() {
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
    <>
      <Timer />
      <section className="container">
        <hr />
        <AddEditEntry
          sumTotal={sumTotal}
          editingTaskId={editingTaskId}
          setTaskName={setTaskName}
          setError={setError}
          taskName={taskName}
          setTaskDuration={setTaskDuration}
          error={error}
          taskDuration={taskDuration}
          handleSave={handleSave}
        />

        <EntryList
          editingTaskId={editingTaskId}
          tasks={tasks}
          sumTotal={sumTotal}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </section>
    </>
  );
}

export default App;

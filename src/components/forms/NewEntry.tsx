import React, { useState } from "react";

const NewEntry = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDuration, setTaskDuration] = useState<number | undefined>(
    undefined
  );
  const [error, setError] = useState("");
  return (
    <section>
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
    </section>
  );
};

export default NewEntry;

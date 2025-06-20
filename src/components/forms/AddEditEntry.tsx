

interface props {
  editingTaskId: number | null;
  taskName: string;
  error: string;
  sumTotal: number;
  setTaskName: (name: string) => void;
  setError: (error: string) => void;
  setTaskDuration: (name: number) => void;
  taskDuration: number | undefined;
  handleSave: () => void;
}
const AddEditEntry = ({
  editingTaskId,
  setTaskName,
  setError,
  taskName,
  setTaskDuration,
  error,
  taskDuration,
  handleSave,
}: props) => {
  return (
    <>
      {" "}
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
    </>
  );
};

export default AddEditEntry;

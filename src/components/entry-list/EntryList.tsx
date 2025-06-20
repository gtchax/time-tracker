import "./EntryList.css";
import { Task } from "../../lib/types";

interface props {
  editingTaskId: number | null;
  tasks: Task[];
  sumTotal: number;
  handleEdit: (task: Task) => void;
  handleDelete: (id: number) => void;
}

const EntryList = ({
  editingTaskId,
  tasks,
  sumTotal,
  handleDelete,
  handleEdit,
}: props) => {
  return (
    <>
      {!editingTaskId && (
        <div>
          <hr />
          <div className="flex-row">
            <h2>List entries </h2>
            <span className="total">Total hours worked: {sumTotal}</span>
          </div>

          {tasks.length < 1 ? (
            <p className="text-center">No tasks entries added yet</p>
          ) : (
            <table className="task-table">
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
                        className="edit-btn"
                      >
                        Edit
                      </button>
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
            </table>
          )}
        </div>
      )}
    </>
  );
};

export default EntryList;

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Master React." },
    { id: 2, text: "Master Responsiveness." },
    { id: 3, text: "Never Stop learning!" },
    { id: 4, text: "Achieving new Front-End Skill set." },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask} className="add-btn">Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {task.text}
            <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

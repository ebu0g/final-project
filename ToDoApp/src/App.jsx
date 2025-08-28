import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="container">
      <h1>Daily To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className={task.done ? "done" : ""}>{task.text}</span>
            <div className="buttons">
              <button className="done-btn" onClick={() => toggleDone(index)}>
                Done
              </button>
              <button className="delete-btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
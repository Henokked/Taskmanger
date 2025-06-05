import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ name: "", completed: false });

  const handleAdd = () => {
    const newTask = [...tasks];
    newTask.push({ ...task, id: tasks.length + 1 });
    setTasks(newTask);
  };

  const handleDelete = (id) => {
    const deletedTask = tasks?.filter((task) => task?.id != id);
    setTasks(deletedTask);
  };

  const handleComplete = (id) => {
    const findTask = tasks?.map((task) =>
      task.id == id ? { ...task, completed: true } : task
    );
    setTasks(findTask);
  };

  return (
    <div className="w-100 h-100">
      <h4>Task Manager</h4>
      <div className="d-flex my-2 justify-content-between">
        <Form.Control
          type="text"
          placeholder="Enter Task"
          id="name"
          className="w-75"
          onChange={(value) =>
            setTask({
              name: value.currentTarget.value,
              completed: false,
            })
          }
        ></Form.Control>

        <Button variant="primary" size="lg" onClick={handleAdd}>
          Add
        </Button>
      </div>
      <table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td>{task.completed ? "Completed" : "Not Completed"}</td>

              <td>
                <Button
                  variant="danger"
                  className="mx-1"
                  onClick={() => handleDelete(task?.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="success"
                  className="mx-1"
                  onClick={() => handleComplete(task?.id)}
                >
                  Complete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex"></div>
    </div>
  );
}

export default App;

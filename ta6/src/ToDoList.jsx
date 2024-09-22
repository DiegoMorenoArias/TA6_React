import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]); // Encara la tarea como una nueva, siempre y caso que no sea vacía.
      setNewTask(''); // Limpia el input después de agregar la tarea
    }
  };

  // Función para eliminar una tarea por su índice

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input type="text"
        placeholder="Escribí una tarea..." // acá el placeHolder
        value={newTask} // El valor está asignado a la nueva tarea, digamos.
        onChange={(e) => setNewTask(e.target.value)} // Actualiza el estado
      />
      <button onClick={addTask}>Agregar Tarea</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

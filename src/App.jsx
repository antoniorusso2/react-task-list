import './App.css';
import { tasks } from './data/tasks';

const completedTasks = tasks.filter((task) => task.state === 'completed');
// console.log(completedTasks);
const incompleteTasks = tasks.filter((task) => task.state !== 'completed');

function App() {
  return (
    <div className="container">
      {/* task da completare */}
      <ul className="task-list">
        <h2>Current Tasks</h2>
        {/* map sull' array di task da completare */}
        {incompleteTasks.map((task, index) => {
          return (
            <li key={index}>
              <p className="task">{task.title}</p>
              <p className="priority">Priority: {task.priority}</p>
              <p className="estimated-time">
                Estimated Time: {task.estimatedTime}
              </p>
            </li>
          );
        })}
      </ul>
      {/* task completate */}
      <ul className="task-list">
        <h2>Completed Tasks</h2>
        {/*  */}
        {completedTasks.map((task, index) => {
          return (
            <li key={index}>
              <p className="task">{task.title}</p>
              <p className="priority">Priority: {task.priority}</p>
              <p className="estimated-time">
                Estimated Time: {task.estimatedTime}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;

import './App.css';
import { tasks } from './data/tasks';

const completedTasks = tasks.filter((task) => task.state === 'completed');
const incompleteTasks = tasks.filter((task) => task.state !== 'completed');

function App() {
  return (
    <>
      {/* task da completare */}
      <ul className="task-list">
        <h2>Current Tasks</h2>
        {/* map sull' array di task da completare */}
        {incompleteTasks.map((task, index) => {
          return <li key={index}>{task.title}</li>;
        })}
      </ul>
      {/* task completate */}
      <ul>
        <h2>Completed Tasks</h2>
        {/*  */}
        {completedTasks.map((task, index) => {
          return <li key={index}>{task.title}</li>;
        })}
      </ul>
    </>
  );
}
export default App;

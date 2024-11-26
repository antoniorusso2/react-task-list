import './App.css';
import { tasks } from './data/tasks';

const completedTasks = tasks.filter((task) => task.state === 'completed');
// console.log(completedTasks);
const incompleteTasks = tasks.filter((task) => task.state !== 'completed');

function App() {
  return (
    <div className="container">
      {/* task da completare */}
      <ul className="task-list todos">
        <h2>
          Current Tasks
          <span className="counter"> ({incompleteTasks.length})</span>
        </h2>
        {/* map sull' array di task da completare */}
        {incompleteTasks.map((task, index) => {
          return [
            <li key={index}>
              <div className="task-wrapper">
                <h3 className="task">{task.title}</h3>
                <p className="priority">Priority: {task.priority}</p>
                <p className="estimated-time">
                  Estimated Time: {task.estimatedTime}
                </p>
              </div>
              <div className="banner" key={'banner'}>
                {task.state}
              </div>
            </li>
          ];
        })}
      </ul>
      {/* task completate */}
      <ul className="task-list done">
        <h2>
          Completed Tasks
          <span className="counter"> ({completedTasks.length})</span>
        </h2>
        {/*  */}
        {completedTasks.map((task, index) => {
          return [
            <li key={index}>
              <div className="task-wrapper">
                <h3 className="task">{task.title}</h3>
                <p className="priority">Priority: {task.priority}</p>
                <p className="estimated-time">
                  Estimated Time: {task.estimatedTime}
                </p>
              </div>
              <div className="banner" key={'banner'}>
                {task.state}
              </div>
            </li>
          ];
        })}
      </ul>
    </div>
  );
}
export default App;

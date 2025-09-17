import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty Dishwasher"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry & put out away">
    </Task>

      <Task title="Tidy" deadline="Today" description="General clean around" />
    </div>
  );
}

export default App;

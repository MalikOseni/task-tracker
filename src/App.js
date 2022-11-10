import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'doc appointment',
      day: 'feb 5th',
      reminder: true,
    },
    {
      id: 2,
      text: 'girl appointment',
      day: 'feb 6th',
      reminder: true,
    },
    {
      id: 3,
      text: 'wink appointment',
      day: 'feb 7th',
      reminder: false,
    }
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

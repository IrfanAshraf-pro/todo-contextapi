import './App.css';
import Navbar from './components/Navbar';
import Todoform from './components/Todoform';
import TodoItems from './components/TodoItems';
import {TodoProvider} from './context/todoContext'

function App() {
  
  return (
    <div className="App">
      <TodoProvider>
      <Navbar />
      <Todoform  />
      <TodoItems  />
      </TodoProvider>
    </div>
  );
}

export default App;

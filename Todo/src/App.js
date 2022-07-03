import logo from './logo.svg';
import './App.css';
import { SearchEngine } from "./Components/SearchEngine/SearchEngine"
import { Counter } from './Components/Counter/Counter';
import { Counter1 } from './Components/Counter1/Counter1';
import { Todo } from './Components/Todo/Todo';
function App() {
  return (
    <div className="App">
      <SearchEngine />
      <Counter />
      <Counter1 />
      <Todo />
    </div>
  );
}

export default App;

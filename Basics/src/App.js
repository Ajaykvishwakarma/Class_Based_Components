import logo from './logo.svg';
import './App.css';
import { CarConstructor } from './Components/CarConstructor';
import Car from './Components/Car';
import { Props } from './Components/Props';
import { PropsConstructor } from './Components/PropsConstructor';
import { Garage } from './Components/ComponentInComponent';
function App() {
  return (
    <div className="App">
      <Car />
     <CarConstructor />
    <Props ability="Legend" />
    <PropsConstructor device="Phone" />
    <Garage />
    </div>
  );
}

export default App;

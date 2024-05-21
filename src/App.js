import './App.css';
import MoneyCompornent from './compornent/MoneyCompornent';
import SelectCompornent from './compornent/SelectCompornent';
import TitleCompornent from './compornent/TitleCompornent';


function App() {
  return (
    <div className="App">
      <TitleCompornent/>

      <SelectCompornent/>
      
      <MoneyCompornent/>
    </div>
  );
}

export default App;

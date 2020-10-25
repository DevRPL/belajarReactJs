import logo from './logo.svg';
import './App.css';
import StateLessComponent from './container/StateLessComponent.jsx';
import StateFullComponent from './component/StateFullComponent.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<StateFullComponent />
        <img src={logo} className="App-logo" alt="logo" />
		<StateLessComponent />
      </header>
    </div>
  );
}

export default App;

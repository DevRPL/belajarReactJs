import logo from './logo.svg';
import './App.css';
import StateLessComponent from './container/StateLessComponent.jsx';
import StateFullComponent from './component/StateFullComponent.jsx';
import DynamicStateLessComponent from './container/Default/DynamicStateLessComponent.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DynamicStateLessComponent />

      <StateFullComponent />
          <img src={logo} className="App-logo" alt="logo" />
      <StateLessComponent />
      </header>
    </div>
  );
}

export default App;

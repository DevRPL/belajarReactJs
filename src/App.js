import logo from './logo.svg';
import './App.css';
import DynamicStateLessComponent from './container/Default/DynamicStateLessComponent.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DynamicStateLessComponent />
        
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

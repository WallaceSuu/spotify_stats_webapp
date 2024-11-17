import './App.css';
import Dashboard from './components/Dashboard.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Dashboard></Dashboard>
      </header>
    </div>
  );
}

export default App;

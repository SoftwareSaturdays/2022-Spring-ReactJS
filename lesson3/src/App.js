import logo from './logo.svg';
import './App.css';

function App() {
  // base jsx
  const basicJSX = <p>Hello world!</p>;
  // jsx with nesting
  const nestedJSX = <div><h1>Hello!</h1><p>hi</p></div>;
  // multiline jsx
  const multiJSX = (
    <div>
      <h1>Hello!</h1>
      <p>hi</p>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Javascript in JSX */}
        <div>{multiJSX}</div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

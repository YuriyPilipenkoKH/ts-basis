
// import logo from './img/stackoverflow.svg';
import './css/App.css';
import { iconstackoverflow } from './img/icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div  className="App-logo">
        {iconstackoverflow}
        </div>
          
        <p>
          Chck this out <br />
          <code>ts-basis.tsx</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
        >
          Zod validation
        </a>
      </header>
    </div>
  );
}

export default App;

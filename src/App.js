import logo from './logo.svg';
import './App.css';
import Diagonse from '././components/Diagonse/Diagnose';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div class="card" style="width: 18rem;">
  {/* <img class="card-img-top" src="..." alt="Card image cap"> </img> */}
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    
    </div>
      </header>
    </div>
  );
}

export default App;

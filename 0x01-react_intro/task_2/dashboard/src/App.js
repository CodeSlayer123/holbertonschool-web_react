import logo from './holberton-logo.jpg';
import {getFullYear} from './utils.js';
import {getFooterCopy} from './utils.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr/>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form className="form-1">
          <label for="email">email</label><br></br>
          <input type="email"></input>
          <label for="password">password</label><br></br>
          <input type="password"></input>
          <button>OK</button>
        </form>
        

        
        
      </body>
      <hr/>
      <footer className="App-footer">
        <p><i><b>Copyright {getFullYear()} - {getFooterCopy(true)}</b></i></p>
      </footer>
    </div>
  );
}

export default App;

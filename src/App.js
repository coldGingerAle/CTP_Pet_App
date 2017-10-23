import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <button><Link to="/login">Login</Link></button>
      </div>
    )
  }
}

export default App;

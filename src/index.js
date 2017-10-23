import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Component/Login';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';

const notFound = () => {
  <div>404!</div>;
};

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/login" component={Login} />
      <Route component={notFound}/>
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));

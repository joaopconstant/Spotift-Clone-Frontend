import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Artist from './pages/Artist';
import NewArtist from './pages/NewArtist';

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <div className="flex-1">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/banda/:id" component={Artist} />
            <Route path="/banda/cadastrar" component={NewArtist} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

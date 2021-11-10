
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExploreNow from './Pages/Explore/ExploreNow/ExploreNow';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';

import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Register/Register';
import AuthProvider from './Pages/Shared/AuthProvider/AuthProvider';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <ExploreNow></ExploreNow>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;


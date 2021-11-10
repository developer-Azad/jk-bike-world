import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Registration/Login/Login';
import Register from './Pages/Registration/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Registration/PrivateRoute/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
      <Navigation></Navigation>
      <Switch>
          {/* <PrivateRoute path="/appointment">
            <Appointment />
  </PrivateRoute>*/}
          <PrivateRoute path="/dashboard">
            <Dashboard /> 
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
           <Register />
          </Route> 
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;

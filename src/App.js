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
import PurchaseOrder from './Pages/Orders/PurchaseOrder/PurchaseOrder';
import Footer from './Pages/Shared/Footer/Footer';
import AllProducts from './Pages/Home/AllProducts/AllProducts';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Navigation></Navigation>
      <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard /> 
          </PrivateRoute>
          <PrivateRoute path="/purchaseOrder/:orderId">
          <PurchaseOrder></PurchaseOrder>
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
          <Route path="/allProducts">
           <AllProducts />
          </Route> 
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </AuthProvider>
  );
}

export default App;

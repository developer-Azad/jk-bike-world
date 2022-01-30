import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AppBar, Button, CssBaseline, Divider, Drawer, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import AddProduct from '../Admin/AddProduct/AddProduct';
import AddReview from '../Users/AddReview/AddReview';
import MyOrders from '../../Orders/MyOrders/MyOrders';
import ManageAllOrders from '../../Orders/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import useAdmin from '../../../hooks/useAdmin';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Users/Payment/Payment';
import Footer from '../../Shared/Footer/Footer'

const drawerWidth = 180;

const Dashboard = (props) => {
  const { user } = useAuth();
  const { admins } = useAdmin();

  const admins2 = admins.filter(admin => user.email === admin.email)
  const admin = admins2[0];
  console.log(admin?.role);

  // console.log(admin);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const drawer = (
    <div className="dashboard-nav">
      <Toolbar />
      <Divider />
      {
        admin?.role ?
          <div className="dashboard-nav">
            <Link to="/home"><Button className="dashboard-nav" color="inherit">Home Page</Button></Link>
            <Link to={`${url}`}><Button color="inherit">Dahsboard</Button></Link>
            <Link to={`${url}/manageAllOrders`}><Button color="inherit">Manage Orders</Button></Link>
            <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
            <Link to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
            <Link to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
          </div>
          :
          <div>
            <Link to="/home"><Button color="inherit">Home Page</Button></Link>
            <Link to={`${url}`}><Button color="inherit">Dahsboard</Button></Link>
            <Link to={`${url}/payment`}><Button color="inherit">Payment</Button></Link>
            <Link to={`${url}/myorders`}><Button color="inherit">My Orders</Button></Link>
            <Link to={`${url}/addReview`}><Button color="inherit">Add Review</Button></Link>

          </div>
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>

      <Box sx={{ display: 'flex' }}>

        < CssBaseline />

        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />

            </IconButton>

            <Typography variant=" h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />

          <Switch>
            <Route exact path={path}>
              <DashboardHome></DashboardHome>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/addReview`}>
              <AddReview></AddReview>
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
          </Switch>
          <Footer></Footer>
        </Box>
      </Box>
    </div >
  );
};

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;


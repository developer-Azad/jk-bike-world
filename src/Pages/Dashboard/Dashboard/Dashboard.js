import  React from 'react';
import PropTypes from 'prop-types';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AppBar, Button, CssBaseline, Divider, Drawer, IconButton,
     List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import AddProduct from '../Admin/AddProduct/AddProduct';
import Navigation from '../../Shared/Navigation/Navigation';
import AddReview from '../Users/AddReview/AddReview';
import AdminData from '../Admin/AdminData/AdminData';
import MyOrders from '../../Orders/MyOrders/MyOrders';
import ManageAllOrders from '../../Orders/ManageAllOrders/ManageAllOrders';


const drawerWidth = 200;

const Dashboard = (props) => {
  const {admin} = props;

  // console.log(admin);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

   
  
    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <Link to={`${url}/addReview`}><Button color="inherit">Add Review</Button></Link>
        <Link to={`${url}`}><Button color="inherit">Dahsboard</Button></Link>
        <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
        <Link to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
        <Link to={`${url}/admin`}><Button color="inherit">AdminData</Button></Link>
        <Link to={`${url}/myorders`}><Button color="inherit">My Orders</Button></Link>
        <Link to={`${url}/manageAllOrders`}><Button color="inherit">Manage Orders</Button></Link>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            
            <Box sx={{ display: 'flex' }}>
            
      <CssBaseline />
      
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
      <Navigation></Navigation>
        
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
          
          <Typography variant="h6" noWrap component="div">
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
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
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
        <Route path={`${path}/admin`}>
        <AdminData></AdminData>
        </Route>
        <Route path={`${path}/myorders`}>
       <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/manageAllOrders`}>
       <ManageAllOrders></ManageAllOrders>
        </Route>
      </Switch>
      </Box>
    </Box>
        </div>
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
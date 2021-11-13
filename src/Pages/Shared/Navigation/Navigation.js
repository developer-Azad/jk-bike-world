import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
  const {user, logOut} = useAuth();
    return (
          <div className="navbar">
            <Box className="navbar" sx={{ flexGrow: 1 }} >
              <AppBar position="static">
                <Toolbar>
                <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
                >
               <MenuIcon />
             </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           JK Bike World
          </Typography>
          <Link  style={{textDecoration: 'none', color: 'white'}} to="/home"><Button color="inherit">Home</Button></Link>
          {
            user?.email ? 
            <Box>
          <Button onClick={logOut} color="inherit">Log out</Button>
          <NavLink style={{textDecoration: 'none', color: 'white'}} to="/dashboard">
          <Button color="inherit">Dashboard</Button>
          </NavLink>
          </Box>
            :
            <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login">
          <Button color="inherit">Login</Button>
          </NavLink>
          
          }
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    );
};

export default Navigation;


// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import useAuth from './../../../hooks/useAuth'
// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';


// const Navigation = () => {
//   const {user, logOut} = useAuth();
//     return (
//         <div>
//           <h2>this is navigation</h2>
          
//             <Box sx={{ flexGrow: 1 }}>
//               <AppBar position="static">
//                 <Toolbar>
//                 <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//                 >
//                <MenuIcon />
//              </IconButton>
//               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Doctors Portal
//           </Typography>
//           <Link  style={{textDecoration: 'none', color: 'white'}} to="/appointment"><Button color="inherit">Appointment</Button></Link>
//           {
//             user?.email ? 
//             <Box>
//           <Button onClick={logOut} color="inherit">Log out</Button>
//           <NavLink style={{textDecoration: 'none', color: 'white'}} to="/dashboard">
//           <Button color="inherit">Dashboard</Button>
//           </NavLink>
//           </Box>
//             :
//             <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login">
//           <Button color="inherit">Login</Button>
//           </NavLink>
          
//           }
          
//         </Toolbar>
//       </AppBar>
//     </Box>
//         </div>
//     );
// };

// export default Navigation;
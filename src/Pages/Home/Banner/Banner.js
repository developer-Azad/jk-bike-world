// import { Button } from '@material-ui/core';
// import React from 'react';
// import { useHistory } from 'react-router';
// import './Banner.css';

// const Banner = () => {
//     const history = useHistory();

//     const handleProductExplore = () => {
//         history.push('/allProducts');
//     }
//     return (
//  <div >
//     <div className="banner-img">
//     <img  src="https://imgd.aeplcdn.com/0x0/bikewaleimg/ec/464/img/m/Hero-Racing-EBR-1190RS-1128_l.jpg" alt="" />
//     </div>
//     <div className="side-name">
//     <h1 >JK Bike World</h1>
//     <Button onClick={handleProductExplore} variant="contained">Explore</Button>
//     </div>
//     </div>
//     );
// };

// export default Banner;


import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import bg from '../../../images/pexels-pixabay-51388.jpg';
import { NavLink } from 'react-router-dom';

const homeBanner = {
    background: `url(${bg})`,
    backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    paddingTop: 150,
    paddingBottom: 150,
    /* 
    use following two properties and values to make transparent background 
    */
    backgroundColor: 'rgba(46, 80, 68, 0.7)',
    backgroundBlendMode: 'darken, luminosity'
}


const Banner = () => {
    return (
        <Box style={homeBanner} sx={{ flexGrow: 1 }}>
            <Container sx={{
                display: 'flex ',
                alignItems: 'center',
                textAlign: 'left'
            }}>
                <Box>
                    <Typography variant="h6"
                        sx={{
                            color: "#51E1E1",
                            mb: '20px'
                        }}>
                        PURCHASE BIKE
                    </Typography>
                    <Typography variant="h4"
                        sx={{
                            mb: '20px',
                            color: 'white'
                        }}>
                        Purchase Your Own Bike
                    </Typography>
                    <Typography variant="p"
                        sx={{
                            mb: '20px',
                            color: 'white'
                        }}>
                            <br />
                       Interested in racing or bike riding? We are here to serve you best riding collections.
                    </Typography>
                    <Box>
                        <NavLink to="/allproducts"
                            style={{
                                textDecoration: 'none'
                            }}>
                                <br />
                            <Button
                                sx={{
                                    backgroundColor: "#51E1E1",
                                    mt: "20px"
                                }}
                                variant="contained">Explore</Button>
                        </NavLink>
                    </Box>
                </Box>
            </Container>
        </Box >
    );
};

export default Banner;
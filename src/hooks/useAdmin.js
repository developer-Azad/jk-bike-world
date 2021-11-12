import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useAdmin = () => {
    const {user} = useAuth();
    const [admins, setAdmins] = useState([]);

// console.log(admins);
   useEffect( () => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setAdmins(data))
   }, [])
    

        return {
            admins,
        }
    };

export default useAdmin;
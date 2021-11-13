import { useEffect, useState } from 'react';

const useAdmin = () => {
    const [admins, setAdmins] = useState([]);

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
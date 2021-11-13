import { useEffect, useState } from 'react';

const useAdmin = () => {
    const [admins, setAdmins] = useState([]);

   useEffect( () => {
    fetch('https://salty-beyond-99419.herokuapp.com/users')
    .then(res => res.json())
    .then(data => setAdmins(data))
   }, [])
    

        return {
            admins,
        }
    };

export default useAdmin;
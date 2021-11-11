import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard';


const AdminData = () => {
    const {user} = useAuth();
const [users, setUsers] = useState([]);

fetch('http://localhost:5000/users')
.then(res => res.json())
.then(data => setUsers(data))

const admins = users.filter(admin => user.email === admin.email)
const admin = admins[0];
// const adminRole = admin.role;
// console.log(admin.role);
    return (
        <div>
           <h2>Admin data</h2>
        </div>
    );
};

export default AdminData;
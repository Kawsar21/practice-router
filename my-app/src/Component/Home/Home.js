import React, { useEffect, useState } from 'react';
import User from '../Users/User';

const Home = () => {
    const [users, setUsers] = useState([]);
    console.log(users);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);
    return (
        <div>
            <ul>
                {
                    users.map(user => <User user={user}></User>)
                }
            </ul>
        </div>
    );
};

export default Home;
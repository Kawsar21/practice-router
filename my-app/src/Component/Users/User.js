import React from 'react';
import './User.css';
import {Link, useHistory} from 'react-router-dom';

const User = (props) => {
    const {name, username, email, phone, id} = props.user;
    const history = useHistory();
    const handleClick = (userId) => {
        const url = `/users/${userId}`;
        history.push(url);
    }
    const linkStyle = {
        textDecoration : 'none'
    }
    return (
        <div className="User">
            <h2>Name: {name}</h2>
            <h4>Username: {username}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`} style={{textDecoration: 'none', color: 'blue'}}>User Details</Link>
            <button onClick={() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default User;
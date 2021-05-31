import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetail.css';

const UserDetail = () => {
    const [detail, setDetail] = useState({});
    const {userId} = useParams();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[]);
    const {name, username, email, phone} = detail;
    return (
        <div className="User-detail">
            <h2>Name: {name}</h2>
            <h4>Username: {username}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default UserDetail;
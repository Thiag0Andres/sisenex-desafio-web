import React from 'react';

function UserItem({ user }) { 
    return (
        <li className="user-item">
            <header>
            <img src={user.avatarUrl} alt={user.name}/>
            <div className="user-info">
                <strong>{user.name}</strong>
                <span>{user.email}</span>
            </div>
            </header>
            <p>{user.cell}</p>
        </li>
    );
}

export default UserItem;





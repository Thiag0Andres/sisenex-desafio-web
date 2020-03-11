import React, { useState } from 'react';

import './styles.css';

function UserForm({ onSubmit }) { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');

    async function handleSubimit(e) {
        e.preventDefault();

        await onSubmit({
            name,
            email,
            cell,
        });
        
        setName('');
        setEmail('');
        setCell('');
    }

    return (
        <form onSubmit={handleSubimit}>
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input 
                name="name"
                id="name"
                required 
                value={name}
                onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="email">Email</label>
            <input 
                name="email" 
                id="email" 
                required 
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div class="input-block">
            <label htmlFor="cell">Numero</label>
            <input 
                name="cell"
                id="cell"
                required
                value={cell}
                onChange={e => setCell(e.target.value)}
            />
          </div>

          <button type="submit">Salvar</button>
        </form>
    );
}

export default UserForm;
import React, { useState, useEffect } from 'react';
import api from '.services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cell, setCell] = useState('');

  useEffect(() => {
  }, []);

  async function handleAddDev(e) {
     e.preventDefault();

    const response = await api.post('/users', {
      name,
      email,
      cell,
    })

    console.log(response.data);
  }

  return (
    <div id ="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
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
      </aside>
      <main>
        <ul>
          <li className="user-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/51757013?s=460&v=4" alt="Thiago Andres"/>
              <div className="user-info">
                  <strong>Thiago Andres</strong>
                  <span>(38) 99999-9999</span>
              </div>
            </header>

          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

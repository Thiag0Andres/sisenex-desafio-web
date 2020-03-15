import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import './Searchbar.css';

import UserForm from './components/UserForm';
import UserItem from './components/UserItem'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');

      setUsers(response.data);  

    }

    loadUsers();
  }, []);

  async function handleAddUser(data) {
    const response = await api.post('/users', data)

    setUsers([...users, response.data]);
  }

  return (
    <div id ="app">
      <aside>
        <strong>Cadastrar</strong>
        <UserForm onSubmit={handleAddUser}/>
      </aside>

      <div className="search-bar">
            <form name="formBusca" id="formBusca" method="post">
            <input type="text"
                    name="Busca"
                    id="Busca"
                    autoCorrect={false}
                    placeholder="Buscar por usuário"/>
            <i className="fas fa-search"></i>
            </form>
        </div>

      <main>
        <ul>
          {users.map(user =>(
            <UserItem key={user._id} user={user}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

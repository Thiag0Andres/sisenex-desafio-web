import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  return (
    <div id ="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
          <label htmlFor="name">Nome</label>
          <input name="name" id="name" required />
          </div>

          <div class="input-block">
          <label htmlFor="email">Email</label>
          <input name="email" id="email" required />
          </div>

          <div class="input-block">
          <label htmlFor="cell">Numero</label>
          <input name="cell" id="cell" required />
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


import { useContext } from 'react';
import './App.css';
import JatekTer from './components/JatekTer';
import { KattContext } from './context/KattContext';

function App() {
 const {lista, lepes, nyertes, ujrakezdes} = useContext(KattContext)
 const kovetkezo = lepes % 2 === 0 ? 'X' : 'O'

  return (
    <div className="App">
      <header className="App-header">
       <h1>Tic-Tac-Toe</h1>
      </header>
      <article>
        <div className="status">
          {nyertes ? <strong>Nyertes: {nyertes}</strong> : (lista.includes(' ') ? <span>Következő: {kovetkezo}</span> : <strong>Döntetlen</strong>)}
          <button className="ujra" onClick={ujrakezdes}>Újra</button>
        </div>
        <div className="jatekter">
          <JatekTer lista={lista}  />
        </div>
      </article>
      <footer>saját név</footer>
    </div>
  );
}

export default App;

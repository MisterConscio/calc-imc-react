import { useState } from 'react'
import './App.css'

function App() {
  const [peso, setWeight] = useState(0);
  const [altura, setHeight] = useState(0);
  const [resultado, setResult] = useState(0);

  function formSubmit(event) {
    event.preventDefault();
    const imc = peso / (altura * altura);
    setResult(imc);
  }

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={formSubmit}>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(event) => setWeight(Number(event.target.value))}
          />
        </label>
        <br />
        <label>
          Altura (m):
          <input
            type="number"
            value={altura}
            onChange={(event) => setHeight(Number(event.target.value))}
          />
        </label>
        <br />
        <button type="submit">Calcular</button>
      </form>
      <p>
        Seu IMC é: <strong className="res-bold">
          {(resultado > 0) ? resultado.toFixed(2) : ''}
        </strong>
      </p>
    </div>
  );
}

export default App

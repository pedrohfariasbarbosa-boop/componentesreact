import { useState } from "react";
import { useEffect } from "react";

function Card(props) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Aumentar
      </button>
    </div>
  );
}

function App() {

  const usuarios = [
    {nome: 'Pedro', texto: 'Teste'}, 
    {nome: 'Vitor', texto: 'Teste'}, 
    {nome: 'Caique', texto: 'Teste'}
  ]

  return (
    <>
      {
        usuarios.map((index) => (
          <Card titulo={index.nome} texto={index.texto} />
        ))
      }
      <Counter/>
    </>
  )
}

export default App
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

function Produto({ nome, preco, imagem, descricao }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "16px",
      width: "200px"
    }}>
      <img 
        src={imagem} 
        alt={nome} 
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h2>{nome}</h2>

      <p>{descricao}</p>

      <strong>R$ {preco}</strong>
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

  const items = [
    {nome: 'Copo', preco: 100, descricao: 'Copo', imagem: '#'}, 
    {nome: 'Copo', preco: 100, descricao: 'Copo', imagem: '#'}, 
    {nome: 'Copo', preco: 100, descricao: 'Copo', imagem: '#'}
  ]

  return (
    <>
      {
        items.map((index) => (
          <Produto nome={index.nome} preco={index.preco} imagem={index.imagem} descricao={index.descricao} />
        ))
      }
      <Counter/>
    </>
  )
}

export default App
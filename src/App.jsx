function Card(props) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
    </div>
  )
}

function App() {

  const usuarios = ['Pedro', 'Vitor', 'Caique']

  return (
    <>
      {
        usuarios.map((nome) => (
          <Card titulo={nome} texto={nome} />
        ))
      }
    </>
  )
}

export default App
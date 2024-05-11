function Titulo() {
  const nombre = "Joaco";
  if (nombre) {
    return <h1>Hello {nombre}</h1>;
  }
  return <h1>Hello Mundo</h1>;
}

export default Titulo;

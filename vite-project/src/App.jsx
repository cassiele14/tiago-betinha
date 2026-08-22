
//exercicio 5 

import { useState, useEffect } from 'react';

function ListaUsuarios({ usuarios }) {
  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>
          {usuario.name}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        const resultado = await response.json();
        setUsuarios(resultado);
      } catch (error) {
        console.error('Erro ao buscar os usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>

      <ListaUsuarios usuarios={usuarios} />
    </div>
  );
}

export default App;
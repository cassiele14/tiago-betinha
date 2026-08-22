
import { useState, useEffect } from 'react';

function App() {
  const [usuarios, setUsuarios] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/5');

        const resultado = await response.json();
        setUsuarios(resultado);
      } catch (error) {
        console.error('Erro ao buscar os usuarios:', error);
      }
    };
    fetchUsuarios();
  }, []); 

  if (usuarios === null) {
    return <p>Carregando...</p>;
  }
   return (
    <div>
      <h1>{usuarios.name}</h1>
      <p>{usuarios.email}</p>
    </div>
  );
}
export default App;

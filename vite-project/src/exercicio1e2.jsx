import { useState, useEffect } from 'react';

function App() {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await fetch('https://typicode.com');
        const data = await response.json();
        setComentarios(data);
      } catch (error) {
        console.error('Erro ao buscar os comentarios:', error);
      }
    };

    fetchComentarios();
  }, []); 

  return (
    <div>
      <h1>Lista de Comentarios</h1>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario.id}>
             Email: {comentario.email}
             <br/>
            comentario: {comentario.name}
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
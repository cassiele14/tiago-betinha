import { useState, useEffect } from 'react';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch(' https://reqres.in/api/users?page=2');
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
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
             nome: {usuario.name}
             <br/>
             Email: {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
 
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
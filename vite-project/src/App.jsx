// exercicio 1 e 2
// import { useState, useEffect } from 'react';

// function App() {
//   const [comentarios, setComentarios] = useState([]);

//   useEffect(() => {
//     const fetchComentarios = async () => {
//       try {
//         const response = await fetch('https://typicode.com');
//         const data = await response.json();
//         setComentarios(data);
//       } catch (error) {
//         console.error('Erro ao buscar os comentarios:', error);
//       }
//     };

//     fetchComentarios();
//   }, []); 

//   return (
//     <div>
//       <h1>Lista de Comentarios</h1>
//       <ul>
//         {comentarios.map((comentario) => (
//           <li key={comentario.id}>
//              Email: {comentario.email}
//              <br/>
//             comentario: {comentario.name}
           
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

//exercicio 3 

// import { useState, useEffect } from 'react';

// function App() {
//   const [usuarios, setUsuarios] = useState([]);

//   useEffect(() => {
//     const fetchUsuarios = async () => {
//       try {
//         const response = await fetch(' https://reqres.in/api/users?page=2');
//         const resultado = await response.json();
        
//         setUsuarios(resultado);
//       } catch (error) {
//         console.error('Erro ao buscar os usuarios:', error);
//       }
//     };
//     fetchUsuarios();
//   }, []); 

//   return (
//     <div>
//       <h1>Lista de Usuarios</h1>
//       <ul>
//         {usuarios.map((usuario) => (
//           <li key={usuario.id}>
//              nome: {usuario.name}
//              <br/>
//              Email: {usuario.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
 
// import { useState, useEffect } from 'react';

// function App() {
//   const [comentarios, setComentarios] = useState([]);

//   useEffect(() => {
//     const fetchComentarios = async () => {
//       try {
//         const response = await fetch('https://typicode.com');
//         const data = await response.json();
//         setComentarios(data);
//       } catch (error) {
//         console.error('Erro ao buscar os comentarios:', error);
//       }
//     };

//     fetchComentarios();
//   }, []); 

//   return (
//     <div>
//       <h1>Lista de Comentarios</h1>
//       <ul>
//         {comentarios.map((comentario) => (
//           <li key={comentario.id}>
//              Email: {comentario.email}
//              <br/>
//             comentario: {comentario.name}
           
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

//exercicio 4

// import { useState, useEffect } from 'react';

// function App() {
//   const [usuarios, setUsuarios] = useState(null);

//   useEffect(() => {
//     const fetchUsuarios = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/5');

//         const resultado = await response.json();
//         setUsuarios(resultado);
//       } catch (error) {
//         console.error('Erro ao buscar os usuarios:', error);
//       }
//     };
//     fetchUsuarios();
//   }, []); 

//   if (usuarios === null) {
//     return <p>Carregando...</p>;
//   }
//    return (
//     <div>
//       <h1>{usuarios.name}</h1>
//       <p>{usuarios.email}</p>
//     </div>
//   );
// }
// export default App;

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
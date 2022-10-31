import React from "react";
import { useFetch } from "../hooks/useFetch";

function API({ url }) {
  const data = useFetch(url);

  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.full_name}>
            <strong>{item.full_name}</strong>
            <p>{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
export default API;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function API() {
//   const [repositorio, setRepositorio] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://api.github.com/users/vitordevgit/repos")
//       .then((response) => {
//         setRepositorio(response.data);
//       });
//   }, []);

//   return (
//     <ul>
//       {repositorio.map((item) => {
//         return (
//           <li key={item.full_name}>
//             <strong>{item.full_name}</strong>
//             <p>{item.description}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
// export default API;

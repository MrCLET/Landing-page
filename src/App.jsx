import { useState } from "react";


function App() {
  // state (variable React)
  const [count, setCount] = useState(0);
  let name = "Clement"

  return (
    <div>
      <h1 className="title" >Bonjour React {name} 👋</h1>

      <p>Tu as cliqué {count} fois</p>

      <button onClick={() => setCount(count + 1)}>
        Clique-moi 
      </button>
    </div>
  );
}

export default App;
import { useEffect } from "react";
import axios from "axios";
function App() {
  useEffect(() => {
    axios
      .get("http://localhost:5555/books")
      .then((response) => console.log(response));
  }, []);

  return (
    <div className="App">
      <h1>Hello From Book store</h1>
    </div>
  );
}

export default App;

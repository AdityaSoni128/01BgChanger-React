import { useState } from "react";
import "./App.css";
import Changebg from "./components/Changebg";

function App() {
  const [color, setColor] = useState("orange");

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <Changebg setColor={setColor}/>
    </div>
  );
}

export default App;

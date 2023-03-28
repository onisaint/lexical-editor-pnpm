import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DocEditor } from "editor";

function App() {
  const [count, setCount] = useState(0);

  return <DocEditor />;
}

export default App;

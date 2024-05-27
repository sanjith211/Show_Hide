import "./App.css";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Show" : "Hide"}</button>
      {!isVisible && <div>Hello, Welcome to react</div>}
    </div>
  );
}

export default App;

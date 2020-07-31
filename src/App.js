import React from "react";
import "./styles.css";

import Contador from "./Contador";

export default function App() {
  return (
    <div className="App">
      <Contador valor={0} />
      <Contador valor={10} />
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExerciseContextWrapper } from "./context/ExerciseContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExerciseContextWrapper>
      <App />
    </ExerciseContextWrapper>
  </React.StrictMode>
);

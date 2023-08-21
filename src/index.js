import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExerciseContextWrapper } from "./context/ExerciseContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <ExerciseContextWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExerciseContextWrapper>
  // </React.StrictMode>
);

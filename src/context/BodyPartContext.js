import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const bodyPartContext = createContext();

const BodyPartContextWrapper = ({ children }) => {
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <bodyPartContext.Provider value={{ bodyPart, setBodyPart }}>
      {children}
    </bodyPartContext.Provider>
  );
};

export {bodyPartContext, BodyPartContextWrapper}
import { createContext, useContext, useState } from "react";

const CheckContext = createContext();

export const CheckProvider = ({ childern }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <CheckContext.Provider value={{ isSelected, setIsSelected }}>
      {childern}
    </CheckContext.Provider>
  );
};

//create custome hook
export const useCheck = () => useContext(CheckContext);

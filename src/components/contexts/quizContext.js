import { createContext, useContext, useState } from "react";

const QuizContext = createContext();


const QuizProvider = ({ children }) => {

  const [category, setCategory] = useState([]);

  return (
    <QuizContext.Provider value={{ category,setCategory }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };

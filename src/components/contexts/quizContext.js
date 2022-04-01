import { createContext, useContext, useState } from "react";
import { quizReducer } from "../reducers/quizReducer";

const QuizContext = createContext();


const QuizProvider = ({ children }) => {
  // const [quizState, quizDispatch] = useReducer(quizReducer, {
  //   currentCategory: "",
  //   name: "",
  // });
  const [category, setCategory] = useState([]);

  return (
    <QuizContext.Provider value={{ category,setCategory }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };

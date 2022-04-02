import { createContext, useContext, useReducer, useState } from "react";
import { quizReducer } from "../reducers/quizReducer";

const QuizContext = createContext();


const QuizProvider = ({ children }) => {

  const [category, setCategory] = useState([]);
  const [quizState,quizDispatch]=useReducer(quizReducer,{
    searchQuery:''
  })

  return (
    <QuizContext.Provider value={{ category,setCategory,quizDispatch,quizState }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };

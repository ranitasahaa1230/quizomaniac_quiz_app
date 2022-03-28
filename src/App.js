import './App.css';
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, Category } from "./components";



function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category" element={<Category />} />
        {/* <Route path="/quiz" element={<Quiz />} /> */}
      </Routes>
    </div>
  );
}

export default App;

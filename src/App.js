import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
function App() {
  return (
 
 <Router>
 <Routes>
  <Route path="/" element={<Home />}/>
  {/* we can pass two parameter here one path two elmemnt */}
 </Routes>
 </Router>
 
 
  );
}

export default App;

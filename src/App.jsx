import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login";
import Signup from "./Components/Signup.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

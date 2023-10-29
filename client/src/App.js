import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

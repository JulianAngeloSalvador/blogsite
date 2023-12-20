import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";

function App() {
  return (
    <Router>
      <MainNav />
      <Routes></Routes>
    </Router>
  );
}

export default App;

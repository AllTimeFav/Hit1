import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, ReactForm, SimpleForm } from "./index";
import TodoList from "../components/TodoList";
import Navbar from "../components/Navbar";

function ControlPanel() {
  return (
    <div>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/form" element={<ReactForm />} />
          <Route path="/sform" element={<SimpleForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default ControlPanel;

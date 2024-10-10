import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="*" element={<Navigate to="/login" />} />
    //   </Routes>
    // </Router>
    <div className="App">
      <header className="App-header">
        {/*  */}
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

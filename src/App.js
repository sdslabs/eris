import RegistrationPage from "./components/pages/register.js";
import LoginPage from "./components/pages/login.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/register" element={<RegistrationPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

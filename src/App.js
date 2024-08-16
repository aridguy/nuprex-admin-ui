import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Reset from "./pages/auth/reset/Reset";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root route defaults to the Login page */}
        <Route path="/" element={<Login />} />
        <Route path="reset" element={<Reset />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard/home" element={<Dashboard />} />

        {/* Catch-all route redirects unknown paths to login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
// <Route path="/dashboard/orders" element={<Orders />} />
// <Route path="/dashboard/riders" element={<Riders />} />
// <Route path="/dashboard/customers" element={<Customers />} />
// <Route path="/dashboard/admin" element={<Admin />} />
// <Route path="/dashboard/chat" element={<Chat />} />

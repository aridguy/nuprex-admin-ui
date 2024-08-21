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

import Riders from "./pages/riders/Riders";
import Orders from "./pages/orders/Orders";
import Customer from "./pages/customer/Customer";
import Admin from "./pages/admin/Admin";
import Chat from "./pages/chat/Chat";
import Workbench from "./pages/dashboard/Workbench";
import NotiTable from "./pages/dashboard/Notification/NotiTable";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Root route defaults to the Login page */}
          <Route path="/" element={<Login />} />
          <Route path="/reset" element={<Reset />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard/home" element={<Dashboard />} />
          <Route path="/workbench" element={<Workbench />} />
          <Route path="/notification" element={<NotiTable />} />
          <Route path="/riders" element={<Riders />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/customer" element={<Customer/>} />

          {/* Catch-all route redirects unknown paths to login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

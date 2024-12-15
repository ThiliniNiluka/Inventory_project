import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/login/RegisterPage";
import ForgotPassword from "./pages/login/ForgotPassword";
import VerifyCodePage from "./pages/login/VerifyCodePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="password" element={<ForgotPassword />} />
        <Route path="verify" element={<VerifyCodePage />} />
        {/* <Route path="dashboard" element={<DashboardPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="store" element={<Store />} /> */}

        <Route path="/layout">
          <Route path="" element={<Layout />}>
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

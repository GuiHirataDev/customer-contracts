import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/Dashboard";

import { Routes, Route } from "react-router-dom";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
  </Routes>
);

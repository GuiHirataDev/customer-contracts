import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/Dashboard";

import { Routes, Route, Navigate } from "react-router-dom";

export const RoutesMain = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
);

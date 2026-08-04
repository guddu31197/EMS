import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";

import LoginLanding from "./pages/LoginLanding";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employee";
import Attendance from "./pages/Attendence";
import Payslips from "./pages/Payslips";
import Setting from "./pages/Setting";
import PrintPaySlipPage from "./pages/PrintPaySlip";
import Leaves from "./pages/Leaves";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/login" element={<LoginLanding />} />
        <Route
          path="/login/admin"
          element={
            <LoginForm
              role="admin"
              title="Admin Portal"
              subtitle="Sign in to manage the organization"
            />
          }
        />
        <Route
          path="/login/employee"
          element={
            <LoginForm
              role="employee"
              title="Employee Portal"
              subtitle="Sign to access your account"
            />
          }
        />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/leaves" element={<Leaves />} />
        </Route>

        <Route path="/print/payslips/:id" element={<PrintPaySlipPage />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
};

export default App;

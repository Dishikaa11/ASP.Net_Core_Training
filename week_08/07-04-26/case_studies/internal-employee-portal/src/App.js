// App.js
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { EmployeeProvider } from "./context/EmployeeContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";

const MainApp = () => {
  const { user } = useAuth();
  return user ? <Dashboard /> : <Login />;
};

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <EmployeeProvider>
          <MainApp />
        </EmployeeProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
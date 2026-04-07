// context/EmployeeContext.js
import React, { createContext, useState, useContext } from "react";

const EmployeeContext = createContext();

export const useEmployee = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (emp) => {
    setEmployees(prev => [...prev, { id: Date.now(), ...emp }]);
  };

  const deleteEmployee = (id) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  const updateEmployee = (id, updatedData) => {
    setEmployees(prev =>
      prev.map(emp => (emp.id === id ? { ...emp, ...updatedData } : emp))
    );
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, deleteEmployee, updateEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
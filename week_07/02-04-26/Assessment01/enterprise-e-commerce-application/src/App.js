import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardHome from "./pages/DashboardHome";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Reviews from "./pages/Review";
import Specs from "./pages/Specs";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Dashboard (Protected) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Products (Dynamic + Nested) */}
        {/* //<Route path="/products" element={<Products />} /> */}
        <Route path="/products/:productId" element={<ProductDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="specs" element={<Specs />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
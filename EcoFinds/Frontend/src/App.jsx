import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./login page/login";
import Signup from "./Signup page/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Profile from "./ProfilePage/Profile";
import MarketPlace from "./MarketPlacce.jsx/MarketPlace";
import AddNewProduct from "./AddNewProduct/ProductListingForm"
import Order from "./order/Order";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Protected Home Route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route 
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
        ></Route>
         <Route 
        path="/marketplace"
        element={
          <ProtectedRoute>
            <MarketPlace />
          </ProtectedRoute>
        }
        ></Route>
        <Route 
        path="/add-product"
        element={
          <ProtectedRoute>
            <AddNewProduct />
          </ProtectedRoute>
        }
        ></Route>

        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
                <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
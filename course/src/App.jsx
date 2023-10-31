import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Layout/Header/Header.jsx";
import Courses from "./components/courses/Courses.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import Login from "./components/Auth/Login/Login.jsx";
import Register from "./components/Auth/Register/Register.jsx";
import ForgetPassword from "./components/Auth/ForgetPasswoed/ForgetPassword.jsx";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Request from "./components/Request/Request.jsx";
import About from "./components/About/About.jsx";
import Subscribe from "./components/Payments/Subscribe.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/request" element={<Request />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

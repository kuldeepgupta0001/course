import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home.jsx";

import Header from "./components/Layout/Header/Header.jsx";

import Courses from "./components/courses/Courses.jsx";

import Footer from "./components/Layout/Footer/Footer.jsx";

import NotFound from "./components/Layout/NotFound/NotFound.jsx";

import Login from "./components/Auth/Login/Login.jsx";

import Register from "./components/Auth/Register/Register.jsx";

import ForgetPassword from "./components/Auth/ForgetPasswoed/ForgetPassword.jsx";

import ResetPassword from "./components/Auth/ResetPassword/ResetPassword.jsx";

import Contact from "./components/Contact/Contact.jsx";

import Request from "./components/Request/Request.jsx";

import About from "./components/About/About.jsx";

import Subscribe from "./components/Payments/Subscribe.jsx";

import PaymentSuccess from "./components/Payments/PaymentSuccess.jsx";

import PaymentFail from "./components/Payments/PaymentFail.jsx";

import CourseDetail from "./components/CourseDetail/CourseDetail.jsx";

import Profile from "./components/Profile/Profile.jsx";

import UpdateProfile from "./components/Profile/UpdateProfile.jsx";

import ChangePassword from "./components/Profile/ChangePassword.jsx";

import Dashboard from "./components/Admin/Dashboard/Dashboard.jsx";

import CreateCourse from "./components/Admin/CreateCourse/CreateCourse.jsx";

import Users from "./components/Admin/Users/Users.jsx";

import AdminCourses from "./components/Admin/AdminCourses/AdminCourses.jsx";

import { useDispatch, useSelector } from "react-redux";

import toast, { Toaster } from "react-hot-toast";

import { loadUser } from "./redux/actions/user.js";

import { ProtectedRoute } from "protected-route-react";

function App() {
  // window.addEventListener("contextmenu", (e) => {
  //   e.preventDefault();
  // });

  const { isAuthenticated, user, message, error } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/course/:id" element={<CourseDetail />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect={"/profile"}
            >
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile user={user} />
            </ProtectedRoute>
          }
        />

        <Route path="/updateprofile" element={<UpdateProfile />} />

        <Route path="/changepassword" element={<ChangePassword />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgetpassword" element={<ForgetPassword />} />

        <Route path="/resetpassword/:token" element={<ResetPassword />} />

        <Route path="/request" element={<Request />} />

        <Route path="/subscribe" element={<Subscribe />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

        <Route path="/paymentfail" element={<PaymentFail />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;

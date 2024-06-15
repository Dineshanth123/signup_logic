import Header from "./header";
import Home from "./home";
import Python from "./Course_Details/python";
import C from "./Course_Details/c";
import MySql from "./Course_Details/my_sql";
import Html from "./Course_Details/html";
import Css from "./Course_Details/css";
import Mongodb from "./Course_Details/mongodb";
import Javascript from "./Course_Details/javascript";
import R from "./Course_Details/r";
import Java from "./Course_Details/java";
import Php from "./Course_Details/php";
import Login from "./User/login";
import Register from "./User/register";
import Dashboard from "./User/dashboard";
import MyCourses from "./User/mycourses";
import FavouriteCourse from "./User/favourite_course";
import About from "./about";
import Footer from "./footer";

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

function Main() {
  return (
    <AuthProvider>
      <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/python" element={<Python />}></Route>
        <Route path="/c" element={<C />}></Route>
        <Route path="/mysql" element={<MySql />}></Route>
        <Route path="/html" element={<Html />}></Route>
        <Route path="/css" element={<Css />}></Route>
        <Route path="/mongodb" element={<Mongodb />}></Route>
        <Route path="/javascript" element={<Javascript />}></Route>
        <Route path="/r" element={<R />}></Route>
        <Route path="/java" element={<Java />}></Route>
        <Route path="/php" element={<Php />}></Route>
        <Route path="/user-login" element={<Login />}></Route>
        <Route path="/user-register" element={<Register />}></Route>
        <Route path="/user-dashboard" element={<Dashboard />}></Route>
        <Route path="/user-mycourses" element={<MyCourses />}></Route>
        <Route
          path="/user-favourite_course"
          element={<FavouriteCourse />}
        ></Route>
      </Routes>
      <Footer />
    </div>
    </AuthProvider>
    
  );
}

export default Main;


import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Home from "./Home";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import contact from "./contact";

import Contact from "./contact";
import Blog from "./blog";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Form/>
      <Footer />
    </div>
  );
}

export default App;

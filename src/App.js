import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/home/Home";
import User from "./pages/users/User";
import Contact from "./pages/contact/Contact";
import { store } from "./store/store/store";
import Navbar from "./components/navbar/Navbar";
import "./app.css";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<User />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Provider>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Employees from "./pages/employees/Employees";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";

/**
 * App
 * Handling web app routes
 * @returns routes
 */
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

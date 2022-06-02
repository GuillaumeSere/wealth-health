import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Employees from './pages/employees/Employees';
import Error from './pages/error/Error';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
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

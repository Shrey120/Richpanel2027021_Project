import './App.css'
import Sign from "./Components/Sign/Sign"
import Register from "./Components/Reg/Register"
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Billingpage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Sign />}></Route>
        <Route path="/Billingcard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
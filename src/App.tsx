import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Zod from "./pages/Zod";


function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="zod" element={<Zod/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

  )
  
}

export default App;

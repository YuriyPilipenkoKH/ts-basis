import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Zod from "./pages/Zod";
import YupHookForm from "./pages/YupHookForm";
import Temp from "./pages/Temp";
import ZodHookForm from "./pages/ZodHookForm";


function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="zod" element={<Zod/>} />
        <Route  path="yupform" element={<YupHookForm/>} />
        <Route  path="zform" element={<ZodHookForm/>} />
        <Route  path="temp" element={<Temp/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

  )
  }
export default App;

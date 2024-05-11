import { Navigate, Route, Routes } from "react-router-dom";
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import Home from "./pages/Home";
import Zod from "./pages/Zod";
import YupHookForm from "./pages/YupHookForm";
import Temp from "./pages/Temp";
import ZodHookForm from "./pages/ZodHookForm";
import UserForm from "./pages/UserForm";
import ReactQuery from "./pages/ReactQuery";
import RQSuperHeroesPage from "./pages/ReactQuery/RQSuperHeroes";



function App() {
 const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="zod" element={<Zod />} />
        <Route path="yupform" element={<YupHookForm />} />
        <Route path="zform" element={<ZodHookForm />} />
        <Route path="temp" element={<Temp />} />
        <Route path="userForm" element={<UserForm />} />
        <Route path="reactQuery" element={<ReactQuery />}>
          <Route path="rqSupreheroes" element={<RQSuperHeroesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  )
  }
export default App;

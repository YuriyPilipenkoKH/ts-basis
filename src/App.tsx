import { Navigate, Route, Routes } from "react-router-dom";
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import Home from "./pages/Home";
import Zod from "./pages/Zod";
import YupHookForm from "./pages/YupHookForm";
import Temp from "./pages/Temp";
import ZodHookForm from "./pages/ZodHookForm";
import UserForm from "./pages/UserForm";
import ReactQuery from "./pages/ReactQuery/ReactQuery";
import RQSuperHeroesPage from "./pages/ReactQuery/RQSuperHeroes";
import RQSuperHeroPage from "./pages/ReactQuery/RQSuperHero";
import ParallelQueriesPage from "./pages/ReactQuery/ParallelQueries";
import RQFriendPage from "./pages/ReactQuery/RQFriend";
import DependentQueriesPage from "./pages/ReactQuery/DependentQueries";
import CoursePage from "./pages/ReactQuery/Course";
import PaginatedQueriesPage from "./pages/ReactQuery/PaginatedQueries";

function App() {
 const queryClient = new QueryClient()

  return (
    <QueryClientProvider
        client={queryClient}>
      <Routes>
        <Route  path="/" 
                element={<Home />} />
        <Route  path="zod" 
                element={<Zod />} />
        <Route  path="yupform" 
                element={<YupHookForm />} />
        <Route  path="zform" 
                element={<ZodHookForm />} />
        <Route  path="temp" 
                element={<Temp />} />
        <Route  path="userForm" 
                element={<UserForm />} />
        <Route  path="reactQuery" 
                element={<ReactQuery />}>
          <Route  path="super-heroes" 
                  element={<RQSuperHeroesPage />} />
          <Route  path="super-heroes/:heroId" 
                  element={<RQSuperHeroPage />} />  
          <Route  path="parallel" 
                  element={<ParallelQueriesPage />} />  
          <Route  path="friends" 
                  element={<ParallelQueriesPage />} />  
          <Route  path="friends/:friendId" 
                  element={<RQFriendPage />} />  
          <Route  path="dependent" 
                  element={<DependentQueriesPage
                    email={'martin@m.com'} />} />  
          <Route  path="dependent/:courseId" 
                  element={<CoursePage />} />  
          <Route  path="paginated" 
                  element={<PaginatedQueriesPage />} />  

        </Route>
        {/* <Route  path="*" 
                element={<Navigate to="/" />} /> */}
      </Routes>
      <ReactQueryDevtools
        initialIsOpen={false} 
        position="bottom-right"/>
    </QueryClientProvider>
  )
  }
export default App;

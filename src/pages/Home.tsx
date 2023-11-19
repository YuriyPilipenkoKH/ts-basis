import { Link } from "react-router-dom"
import { iconstackoverflow } from "../img/icons"
import { NavBar } from "./Pages.styled"


const Home = () => {
  return (
    <div className="App">
    <header className="App-header">
      <div  className="App-logo">
      {iconstackoverflow}
      </div>
        
      <p>
        Chck this out <br />
        <code>ts-basis.tsx</code> 
      </p>
      {/* <input type="text" /> */}

      <NavBar>
      <Link to="/zod">Zod validation</Link>
      <Link to="/yup">Yup HookForm</Link>
      <Link to="/temp">TS templates</Link>
     </NavBar>

    </header>
  </div>
  )
}

export default Home

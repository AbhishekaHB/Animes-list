import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from "./components/Home";
import Navabar from "./components/Nvabar";
import Detailes from "./components/Detailes";
import Fulldetailes from "./components/Fulldetailes";
import Notfoundpage from "./components/Notfoundpage";
import Cartlist from "./components/Cartlist";


function App() {
  return (
    <div className="App">
       <Router>
       <Navabar/>
         <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/detailes">
            <Detailes/>
          </Route>
          <Route  path="/Fulldetailes:id">
            <Fulldetailes/>
          </Route>
          <Route  path="/Cartlist">
            <Cartlist/>
          </Route>
          <Route  path="/*">
            <Notfoundpage/>
          </Route>
         </Switch>
       </Router>
     
    </div>
  );
}

export default App;

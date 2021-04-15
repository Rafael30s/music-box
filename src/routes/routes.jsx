import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "../pages/Home";
import Music from "../pages/Music";
import AddMusic from "../pages/AddMusic";
import NotFound from "../pages/NotFound";


//Link

export default function Routes() {
    return (
       <Router>
           <Switch>
               <Route exact path="/" component={Inicio}/>
               <Route exact path="/list-music" component={Music}/>
               <Route exact path="/add-music" component={AddMusic}/>
               <Route exact path="*" component={NotFound}/>
           </Switch>
       </Router>
    )
}
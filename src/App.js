import './App.css';
import Nav from "./Nav";
import Timeline from "./Timeline";
import Painting from "./Painting";
import Statistics from "./Statistics";
import Homepage from "./Homepage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";






function App() {
  return (
    
    <Router>
    <div className="App">
     <Nav/>
     <Switch>
     <Route path="/" exact component={Homepage}/>
       <Route path="/Homepage" component={Homepage}/>
     <Route path="/Timeline" component={Timeline}/>
     <Route path="/Painting" component={Painting}/>
     <Route path="/Statistics" component={Statistics}/>
     </Switch>
    </div>
    </Router>
  );
}


const Home = () => (
<div>
<h1>homepage</h1>
</div>

);


export default App;

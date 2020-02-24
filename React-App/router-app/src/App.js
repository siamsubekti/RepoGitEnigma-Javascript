import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import {AppBar} from '@material-ui/core';
import AndroidIcon from '@material-ui/icons/Android';
import Home from './Home';
import About from './About';
import Employees from './employee/App/App';
import More from './More';
import Card1 from './Card/App';



function App() {
  return (
    <Router>
    
    <AppBar className="appbar">
      <AndroidIcon className="icon"></AndroidIcon>
        React Javascript
      </AppBar>
      <div className="App">
      <div className="App-header">
      <div className="app1">
        <p>
          <Link  className="home" to="/Home">Home</Link>
       </p>
          <Link className="home" to="/About">About</Link>
        <p>
          <Link className="home" to="/More">More</Link>
        </p>
        <p>
          <Link className="home" to="/Card">Card</Link>
        </p>
        <p>
          <Link className="home" to="/Employee">Employee</Link>
        </p>
      </div>
      <div className="app2">
        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/more"><More/></Route>
          <Route path="/card"><Card/></Route>
          <Route path="/employee"><Employee/></Route>
        </Switch>  
      </div>
      </div>
      </div>
    </Router>
  );
}

function Employee() {
  return (
    <div>
      <Employees/>
    </div>
  )
}

function Card() {
  return (
    <div>
      <Card1/>
    </div>
  )
}
export default App;

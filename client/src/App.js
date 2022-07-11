import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './components/Home/Home';
import DataVideogame from './components/DataVideogame/DataVideogame';
import CreateGame from './components/FormCreateGame/CreateGame'
import LandingPage from './components/LandingPage/LandingPage';



function App() {
  return(
    <Router>
      <div className="App">
        <Switch>
          <Route path="/create">
            <CreateGame/>
          </Route>
          <Route path="/home" exact>
            <Home/>
          </Route>
          <Route path="/home/:game_id">
            <DataVideogame/>
          </Route>
          <Route path="/landing" >
            <LandingPage />
          </Route>
          <Redirect
              from="/" exact 
              to="/landing" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;





import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import HomePage from './Components/HomePage/HomePage';
import Options from './Components/Options/Options';
import Dashboard from './Components/Dashboard/Dashboard';
import Calender from './Components/Calender/Calender';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/options">
            <Options />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/calender">
            <Calender />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import HomePage from './Components/HomePage/HomePage';
import Options from './Components/Options/Options';
import Dashboard from './Components/Dashboard/Dashboard';
import Calender from './Components/Calender/Calender';
import Announcements from './Components/Announcements/Announcements';

import 'react-toastify/dist/ReactToastify.css'
import Chat from './Components/Chat/Chat';
import Whiteboard from './Components/Whiteboard/Whiteboard';

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

          <Route exact path="/announcements">
            <Announcements />
          </Route>

          <Route exact path="/chat">
            <Chat />
          </Route>

          <Route exact path="/whiteboard">
            <Whiteboard />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

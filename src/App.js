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
import Tasks from './Components/Tasks/Tasks';
import Files from './Components/Files/Files';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName, setUserLoginDetails } from './features/user/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';
import Create from './Components/Create/Create';

function App() {

  const username = useSelector(selectUserName)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user)
        // history.push('/home')
      }
    })
  }, [username])

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    )
  }

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

          <Route exact path="/create">
            <Create />
          </Route>

          <Route exact path="/dashboard/:id">
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

          <Route exact path="/tasks">
            <Tasks />
          </Route>

          <Route exact path="/files">
            <Files />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import StudentAdv from './components/StudentAdv/StudentAdv';
import Circular from './components/Circular/Circular';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CampusAdv from './components/CampusAdv/CampusAdv';





function App() {
  return (
    <Router>
      <Container fluid>
        <Switch>
          <Route path="/admin-panel">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/studentadv">
            <StudentAdv />
          </Route>
          <Route path="/campusadv">
            <CampusAdv />
          </Route>
          <Route path="/circular">
            <Circular />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

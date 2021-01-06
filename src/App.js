import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

import { BookShelf } from './components/bookShelf';
import { NewListing } from './components/newListing';
import { Content } from './components/content';
import { Update } from './components/update';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Contact } from './components/contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/contact">Contact</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/bookShelf">BookShelf</Nav.Link>
              <Nav.Link href="/newListing">New Listings</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/newListing' component={NewListing} exact />
            <Route path='/bookShelf' component={BookShelf} exact />
            <Route path='/update/:id' component={Update} exact />
            <Route path='/contact' component={Contact} exact />
          </Switch>
        </div>
      </Router>

    );

  } // end render function

} // end app class

export default App;

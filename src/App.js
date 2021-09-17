import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/headerComponent/Header';
import Home from './Containers/homePageContainer/HomePage';
import About from './Containers/aboutPageContainer/AboutPage';
import Contact from './Containers/contactPageContainer/ContactPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router >
    </div>
  );
}

export default App;
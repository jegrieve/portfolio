import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
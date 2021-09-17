import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="process.env.PUBLIC_URL + /" exact component={Home} />
        <Route path="process.env.PUBLIC_URL + /services" exact component={Services} />
        <Route path="process.env.PUBLIC_URL + /about" exact component={About} />
        <Route path="process.env.PUBLIC_URL + /contact" exact component={Contact} />
//         <Route exact component={ErrorPage} />
      </Switch>
    </>
  );
};

export default App;

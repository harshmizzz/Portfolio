import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import "./App.css";
const About = lazy(() => import("./Components/About/About"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
// const Header = lazy(() => import("./Components/Header/Header"));
const Home = lazy(() => import("./Components/Home/Home"));
const Projects = lazy(() => import("./Components/Project/Projects"));
const Skills = lazy(() => import("./Components/Skills/Skills"));
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Suspense fallback={<div className="lazyload">Loading....</div>}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/skills" exact>
              <Skills />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar";
import Intro from "./components/intro";
import About from "./components/about";
import Skills from './components/skills';
import Education from './components/education';
import Experience from './components/experience';
import Work from './components/work';
import Thoughts from './components/thoughts';
import Contacts from './components/contact';


function App() {
  return (
    <div id="colorlib-page" >
      <div className="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          {/* <BrowserRouter>
            <main>
              <Switch>
                <Route path="/" component={Intro} exact/>
                <Route path="/about" component={About} />
                <Route path="/shop" component={Skills} />
                <Route path="/education" component={Education} />
                <Route path="/experiences" component={Experience} />
                <Route path="/previous-work" component={Work} />
                <Route path="/thoughts" component={Thoughts} />
                <Route path="/contacts" component={Contacts} />
                <Route component={Error} />
              </Switch>
            </main>
          </BrowserRouter> */}
          <Intro />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Work />
          <Thoughts />
          <Contacts />
        </div>
      </div>
    </div>
  )
}
export default App;

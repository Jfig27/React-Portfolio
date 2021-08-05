import Headerbar from "./components/Headerbar/Headerbar"
import Intro from "./components/Intro/Intro"
import Portfolio from "./components/Portfolio/Portfolio"
import Works from "./components/Works/Works"
import Contact from "./components/Contact/Contact"
import "./app.scss"
import {useState} from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Headerbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
    
  );
}

export default App;

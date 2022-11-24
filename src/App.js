import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;

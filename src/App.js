import Aim from "./components/Aim";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Candidates from "./components/Candidates";
import Companies from "./components/Companies";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Main />
      <Navbar />
      <Home />
      <About />
      <Aim />
      <Candidates />
      <Companies />
      <Privacy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

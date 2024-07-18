import Collections from "./components/Collections";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Main />
      <Navbar />
      <Home />
      <About />
      <Collections />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

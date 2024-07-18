import Collections from "./components/Collections";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Home />
      <About />
      <Collections />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;

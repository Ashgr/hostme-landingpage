import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Plans from "./components/Plans";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import './index.css'
function App() {

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Details />
      <Plans />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;

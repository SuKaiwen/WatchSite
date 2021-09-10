import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import OurStory from './Components/OurStory';
import MiddleParallax from './Components/MiddleParallax';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <OurStory />
      <MiddleParallax />
      <Products />
    </div>
  );
}

export default App;

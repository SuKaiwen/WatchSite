import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import OurStory from './Components/OurStory';
import MiddleParallax from './Components/MiddleParallax';
import Products from './Components/Products';
import Stories from './Components/Stories';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App" style = {{fontFamily:"Urbanist"}}>
      <Header />
      <Home />
      <OurStory />
      <MiddleParallax />
      <Products />
      <Stories />
      <Footer />
    </div>
  );
}

export default App;

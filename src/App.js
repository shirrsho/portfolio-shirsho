import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
    </div>
  );
}

export default App;

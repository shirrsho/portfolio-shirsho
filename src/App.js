import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
            <div className="max-width">
                <div className='logo'><a href="#">Portfo<span>lio</span></a></div>
                <ul className="menu">
                    <li><a href="#home" className="menu-btn">Home</a></li>
                    <li><a href="#about" className="menu-btn">About</a></li>
                    <li><a href="#services" className="menu-btn" >Services</a></li>
                    <li><a href="#skills" className="menu-btn">Skills</a></li>
                    <li><a href="#projects" className="menu-btn">Projects</a></li>
                    <li><a href="#gallery" className="menu-btn">Gallery</a></li>
                </ul>
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>

        <section className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    {/* <img src="Media/20220615_153107.jpg" alt='bgimage'/> */}
                    <div className="text-1">Hello, my name is</div>
                    <div className="text-2">Hasnain Iqbal Shirsho</div>
                    <div className="text-3">& I am a <span className="typing"></span></div>
                </div>
            </div>
        </section>


    </div>
  );
}

export default App;

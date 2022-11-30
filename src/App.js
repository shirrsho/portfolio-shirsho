import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
            <div className="max-width">
                <div className='logo'><a href="#">Portfolio<span>.</span></a></div>
                <ul className="menu">
                    <li><a href="#home" className="menu-btn">Home</a></li>
                    <li><a href="#about" className="menu-btn">About</a></li>
                    <li><a href="#services" className="menu-btn" >Services</a></li>
                    <li><a href="#skills" className="menu-btn">Skills</a></li>
                    <li><a href="#projects" className="menu-btn">Projects</a></li>
                    <li><a href="#gallery" className="menu-btn">Blog</a></li>
                    <li><a href="#gallery" className="menu-btn">Contact</a></li>
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

        <section class="about" id="about">
            <div class="max-width">
                <h2 class="title">About Me</h2>
                <div class="about-content">
                    <div class="column left">
                        {/* <img src="Images/TasmiaYellow.jpg" /> */}
                    </div>
                    <div class="column right">
                        <div class="text">I'm Tasmia and I'm a <span class="typing-2"></span></div>
                            <p>Hello! I am currently studying in Institute of Information Technology, University of Dhaka. So I am basically studying on Software Engineering. As of extra curricular activities, I can do digital arts and illustrations, little editing stuffs and develop app UIs. I had my HSC from Holy Cross College in 2018 and had my SSC from Holy Cross Girls' High School in 2016. Glad to know you visited my portfolio. Thank you! </p>
                            <a class="down" href="CV.png" download="TasmiaCV">Download CV</a>
                            <a class="view" href="cv.html">View Profile</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;

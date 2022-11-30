import '../Stylesheets/Navbar.css'
function Navbar() {
    return(
        <nav className="navbar">
            <div className="max-width">
                <div className='logo'><a href="#">Portfolio<span>.</span></a></div>
                <div className="menu">
                    <li><a href="#home" className="menu-btn">Home</a></li>
                    <li><a href="#about" className="menu-btn">About</a></li>
                    <li><a href="#services" className="menu-btn" >Services</a></li>
                    <li><a href="#skills" className="menu-btn">Skills</a></li>
                    <li><a href="#projects" className="menu-btn">Projects</a></li>
                    <li><a href="#gallery" className="menu-btn">Blog</a></li>
                    <li><a href="#gallery" className="menu-btn">Contact</a></li>
                </div>
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
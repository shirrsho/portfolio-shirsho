import '../Stylesheets/Home.css'

function Home() {
    return(
        <section className="home" id="home">
            <div className="max-width">
            <div className='home-container'>
                <div className="home-content">
                    <img className='face' src={require("../Media/face.png")}></img>
                    {/* <div className="text-1">Hello, my name is</div> */}
                    <div className="text-2">Hasnain Iqbal</div>
                    <div className="text-3">& I am a <span className="typing"></span></div>
                </div>
                <div className='socials'>
                    <img src={require("../Media/linkedin-logo.png")}></img>
                    <img src={require("../Media/github-logo.png")}></img>
                    <img src={require("../Media/facebook-logo.png")}></img>
                </div>
                <div>
                    <button className='hire-btn'>Hire Me</button>
                </div>
                </div>
            </div>
        </section>
    );
}
export default Home;
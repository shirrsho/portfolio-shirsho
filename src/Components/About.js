import '../Stylesheets/About.css'

function About(){
    return(
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
    );
}
export default About;
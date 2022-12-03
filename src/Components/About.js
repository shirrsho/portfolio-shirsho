import '../Stylesheets/About.css'

function About(){
    return(
        <section class="about" id="about">
            <div class="max-width">
                <h2 class="title">About Me</h2>
                <div class="about-content">
                    <div class="column left">
                        <img className='aboutface' src={require("../Media/face.png")}></img>
                    </div>
                    <div class="column-right">
                        <div class="abouttext">I'm Hasnain Iqbal, fullstack web developer from Bangladesh.<br/>
                            I am currently studying Software Engineering at<br/>
                            Institute of Information Technology, University of Dhaka.<br/>
                            I have a rich experience in web apps and<br/>
                            also good at android development.<br/><br/>
                            <a class="down" href="CV.png" download="TasmiaCV">Download CV</a>
                            {/* <a class="view" href="cv.html">View Profile</a> */}
                            </div>
                    </div>
                    <section class="skills" id="skills">
                        <div class="max-width">
                            <h2 class="title">My Skills</h2>
                            <div class="skills-content">
                                <div class="column left">
                                    <div class="text">My creative skills & experiences</div>
                                    <p>Have learnt several languages, frameworks and tools. I also have little experience on web apps, android apps using Unity. However, I have skills on adobe illustrator, so I can make illustrations and digital arts of anything. Also, I have done some UIs of apps using figma.</p>
                                </div>
                                <div class="column right">
                                    <div class="bars">
                                        <div class="info">
                                            <span>C++</span>
                                            <span>95%</span>
                                        </div>
                                        <div class="line C++"></div>
                                    </div>
                                    <div class="bars">
                                        <div class="info">
                                            <span>Java</span>
                                            <span>90%</span>
                                        </div>
                                        <div class="line java"></div>
                                    </div>
                                    <div class="bars">
                                        <div class="info">
                                            <span>AngularJS</span>
                                            <span>80%</span>
                                        </div>
                                        <div class="line angularjs"></div>
                                    </div>
                                    <div class="bars">
                                        <div class="info">
                                            <span>Adobe Illustrator</span>
                                            <span>95%</span>
                                        </div>
                                        <div class="line ai"></div>
                                    </div>
                                    <div class="bars">
                                        <div class="info">
                                            <span>Figma</span>
                                            <span>85%</span>
                                        </div>
                                        <div class="line figma"></div>
                                    </div>
                                    <div class="bars">
                                        <div class="info">
                                            <span>Unity</span>
                                            <span>75%</span>
                                        </div>
                                        <div class="line unity"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
export default About;
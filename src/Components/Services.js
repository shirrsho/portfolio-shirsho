import '../Stylesheets/Services.css'

function Services(){
    return(
        <div class="services">
            <section class="max-width">
                <h2 class="title">About Me</h2>
                <div className='all-services'>
                    <div className='service' id='one'>
                        <h3>UI/UX Design</h3>
                    </div>
                    <div className='service' id='two'></div>
                    <div className='service' id='three'></div>
                </div>
            </section>
        </div>
    );
}
export default Services;
import React from 'react'
// change variable and img link when done
import nerdboard from '../../assets/img/nerdboard-thumb.jpg'
import nightcap from '../../assets/img/nightcap-events-thumb.png'
import passwordGen from '../../assets/img/password-gen-thumb.png'
import proReadMe from '../../assets/img/pro-readme-thumb.png'


function Portfolio() {
    return (
      <section id="work" class="parallax-section">
          <div class="container">
                <div class="row">

                    <div class="col-md-12 col-sm-12">
                          <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                              <h2 class="text-center">Portfolio</h2>
                              <p> </p>
                          </div>
                    </div>

                    <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
                          
                          <div class="work-thumb">
                              <a href="https://github.com/dbottoni/project2-fullstack" target="_blank" class="image-popup">
                                    <img src={nerdboard} class="img-responsive" alt="Fine Arts" /> </a>                             
                          </div>
                          <h4>Nerdboard</h4>
                    </div>

                    <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.6s">
                        
                          <div class="work-thumb">
                              <a href="https://github.com/dbottoni/project1" target="_blank" class="image-popup"> <img src={nightcap} class="img-responsive" alt="Logo Design"/> </a>
                          </div>
                          <h4>Nightcap Events</h4>
                    </div>
                    <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
                          
                          <div class="work-thumb">
                              <a href="https://dbottoni.github.io/friendly-parakeet/" target="_blank" class="image-popup">
                                    <img src={passwordGen} class="img-responsive" alt="Password Generator Img" /> </a>                             
                          </div>
                          <h4>Password Generator</h4>
                    </div>

                    <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.6s">
                        
                          <div class="work-thumb">
                              <a href="https://github.com/dbottoni/professional-readme2" target="_blank" class="image-popup"> 
                              <img src={proReadMe} class="img-responsive" alt="Professional ReadMe"/> </a>
                          </div>
                          <h4>Nightcap Events2</h4>
                    </div>
                    

                    {/* <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                         
                          <div class="work-thumb">
                              <a href="images/work-3.jpg" class="image-popup">
                                    <img src="images/work-3.jpg" class="img-responsive" alt="Photography">
                              </a>
                          </div>
                          <h4>Photography</h4>
                    </div>

                    <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                          
                          <div class="work-thumb">
                              <a href="images/work-4.jpg" class="image-popup">
                                    <img src="images/work-4.jpg" class="img-responsive" alt="Cinematography">
                              </a>
                          </div>
                          <h4>Cinematography</h4>
                    </div> */}

                </div>
          </div>
      </section>
    );
}



export default Portfolio; 
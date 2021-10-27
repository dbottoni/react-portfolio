import React from 'react'
// change variable and img link when done
import nerdboard from '../../assets/img/nerdboard-thumb.jpg'
import nightcap from '../../assets/img/nightcap-events-thumb.png'
import passwordGen from '../../assets/img/password-gen-thumb.png'
import proReadMe from '../../assets/img/pro-readme-thumb.png'
import poketraders from '../../assets/img/pockettrader-thumb.jpg'
import workday from '../../assets/img/workday-thumb.jpg'


function Portfolio() {
return (
  <section id="work" class="parallax-section">
    <div class="container">
      <div class="row">
          <div>
              <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                <h2 class="text-center">Portfolio</h2>
                <h3 class="text-center">Select the image to be routed to the projects Github Page</h3>
                <h3 class="text-center">Select the projects name to be routed to the live link</h3>
                <p> </p>
              </div>
          </div>

          <div class="col">              
            <div class="work-thumb">
              <a href="https://github.com/dbottoni/PokeTrader" target="_blank" class="image-popup">
                <img src={poketraders} class="img-responsive" alt="PokeTrader" />
              </a>
              </div>
            <a href="https://pocket-traders.herokuapp.com/" target="_blank">  <h4>PokeTraders</h4> </a>
          </div>     
          <div class="col">     
            <div class="work-thumb">
                <a href="https://github.com/dbottoni/project1" target="_blank" class="image-popup"> 
                  <img src={nightcap} class="img-responsive" alt="Logo Design"/> 
                </a>
              </div>
              <a href="https://dbottoni.github.io/project1/" target="_blank"> <h4>Nightcap Events</h4></a>
          </div>
          <div class="w-100"></div>

          <div class="col">
            <div class="work-thumb">
              <a href="https://dbottoni.github.io/friendly-parakeet/" target="_blank" class="image-popup">
                <img src={passwordGen} class="img-responsive" alt="Password Generator Img" /> 
              </a>                             
            </div>
            <a href="https://dbottoni.github.io/friendly-parakeet/" target="_blank"><h4>Password Generator</h4></a>
          </div>     
          <div class="col"> 
            <div class="work-thumb">
              <a href="https://github.com/dbottoni/professional-readme2" target="_blank" class="image-popup"> 
                <img src={proReadMe} class="img-responsive" alt="Professional ReadMe"/>
              </a>
            </div>
            <a href="https://github.com/dbottoni/professional-readme2" target="_blank"> <h4>Professional ReadMe Generator</h4> </a>
          </div>
          <div class="w-100"></div>

          <div class="col">                      
            <div class="work-thumb">
              <a href="https://github.com/dbottoni/project2-fullstack" target="_blank" class="image-popup">
                <img src={nerdboard} class="img-responsive" alt="Fine Arts" /> 
              </a>                        
            </div>
            <a href="https://pure-tundra-46686.herokuapp.com/" target="_blank"><h4>Nerdboard</h4> </a>
          </div>
          <div class="col" >
            <div class="work-thumb">
              <a href="https://github.com/dbottoni/workday-scheduler" target="_blank" class="image-popup">
                <img src={workday} class="img-responsive" alt="Workday-Scheduler" />
              </a>
            </div>
            <a href="https://github.com/dbottoni/workday-scheduler" traget="_blank"> <h4>Workday Scheduler</h4> </a>
          </div>
          <div class="w-100"></div>

        </div>
      </div>
  </section>
  );
}



export default Portfolio; 
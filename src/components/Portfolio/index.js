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
  <section id="work" className="parallax-section">
    <div className ="container is-fullwidth">
      <div className="row">
          <div>
              <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                <h2 className="text-center">Portfolio</h2>
                <h3 className="text-center">Select the image to be routed to the projects Github Page</h3>
                <h3 className="text-center">Select the projects name to be routed to the live link</h3>
                <p> </p>
              </div>
          </div>

          <div className="card column is-one-third">
            <article class="message is-link">
              <div class="message-header is-justify-content-center">
                <p>Pocket Traders</p>
              </div>
              <div class="message-body">
                The Pocket Traders application is an online trading card game based on the Pokemon games that 
                have provided entertainment to many followers and collectors throughout the years.
              </div>
              <div className="card-image">              
                <figure className="image is-1280X960">
                  <a href="https://github.com/dbottoni/PokeTrader" target="_blank">
                    <img src={poketraders} alt="PokeTrader" />
                  </a>
                </figure>
                <p className="title is-4">
                  <a href="https://pocket-traders.herokuapp.com/" target="_blank">  <h4>PokeTraders</h4> </a>
                </p>
              </div>   
            </article>
          </div>  
          <div className="card column is-one-third">
            <div className="card-image">     
                <figure className="image is-1280X960">
                  <a href="https://github.com/dbottoni/project1" target="_blank"> 
                    <img src={nightcap} alt="NightcapEvents"/> 
                  </a>
                </figure>  
                <p className="title is-4">        
                <a href="https://dbottoni.github.io/project1/" target="_blank"> <h4>Nightcap Events</h4></a>
              </p>
            </div>
          </div>

          <div className="card column is-one-third">
            <div className="card-image">              
                <figure className="image is-1280X960">
                  <a href="https://dbottoni.github.io/friendly-parakeet/" target="_blank">
                    <img src={passwordGen} alt="PasswordGen" />
                  </a>
                </figure>
                <p className="title is-4">
                <a href="https://dbottoni.github.io/friendly-parakeet" target="_blank"> 
                  <h4>Password Generator</h4>
                </a>
              </p>
            </div>   
          </div>  
          <div className="card column is-one-third">
            <div className="card-image">     
                <figure className="image is-1280X960">
                  <a href="https://github.com/dbottoni/professional-readme2" target="_blank"> 
                    <img src={proReadMe} alt="ProReadMeImage"/> 
                  </a>
                </figure>  
                <p className="title is-4">        
                <a href="https://github.com/dbottoni/professional-readme2" target="_blank"> 
                  <h4>Professional ReadMe</h4>
                </a>
              </p>
            </div>
          </div>

          {/* <div className="card column is-one-third">
            <div className="card-image">              
                <figure className="image is-1280X960">
                  <a href="https://github.com/dbottoni/project2-fullstack" target="_blank">
                    <img src={nerdboard} alt="NerdBoard" />
                  </a>
                </figure>
                <p className="title is-4">
                <a href="https://pure-tundra-46686.herokuapp.com/" target="_blank"> 
                  <h4>NerdBoard</h4>
                </a>
              </p>
            </div>   
          </div>  
          <div className="card column is-one-third">
            <div className="card-image">     
                <figure className="image is-1280X960">
                  <a href="https://github.com/dbottoni/workday-scheduler" target="_blank"> 
                    <img src={workday} alt="WorkDayScheduler"/> 
                  </a>
                </figure>  
                <p className="title is-4">        
                <a href="https://github.com/dbottoni/workday-scheduler" target="_blank"> 
                  <h4>Workday Scheduler</h4>
                </a>
              </p>
            </div>
          </div> */}

            {/*     
            <div className="columns" >
              <div className="work-thumb">
                <a href="https://github.com/dbottoni/workday-scheduler" target="_blank" className="image-popup">
                  <img src={workday} className="img-responsive" alt="Workday-Scheduler" />
                </a>
              </div>
              <a href="https://github.com/dbottoni/workday-scheduler" traget="_blank"> <h4>Workday Scheduler</h4> </a>
            </div> */}
            
          
        </div>
      </div>
  </section>
  );
}



export default Portfolio; 
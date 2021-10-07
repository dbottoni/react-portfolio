import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

function Footer(){
 return(
  <footer class="section is-primary is-small text-center">
  <div class="container is-narrow">
    <div>Contact Me</div>
    <div class="contact">
      <p class="field">
        <a class ="button is-large" href="https://github.com/dbottoni" target="_blank" >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a class="button is-large" href="https://www.linkedin.com/in/dana-bottoni/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a class="button is-large" href="mailto:danabottoni@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelopeSquare}/>
        </a>
      </p>
    </div>
  </div>

</footer>
 )
}


export default Footer;
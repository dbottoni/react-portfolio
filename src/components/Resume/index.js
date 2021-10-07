import React from 'react';
import PDF from '../../assets/Resume.pdf';


function Resume(){
 return(
  <div>
    <a href={PDF} download="Resume_Bottoni.pdf">Download My Resume Here</a>
  <ul>
    <li>Skill Set</li>
    <li>HTML5</li>
    <li>CSS</li>
    <li>React</li>
    <li>JavaScript</li>
    <li>Sequelize</li>
    <li>SQL</li>
    <li>Git, GitHub</li>
    <li>Express</li>
    <li>Node</li>
  </ul>
  </div>
 )
}


export default Resume;
import React from 'react'
import coverImage from "../../assets/img/selfie.jpg";

function About(){
 return(
  <section className="my-5">
    <div class="text-center">
      <h1 id="about">Who am I?</h1>
        <img src={coverImage} className="my-2 rounded text-center" alt="cover" />
        <p>Nice to meet you!</p>
        <p>
          I am a dynamic and passionate full stack developer with experience <br/>
          inbuilding efficient, streamlined applications. Looking to leverage <br/>
          my development and technical experiences as I forge a new path in the world of code.

        </p>
    </div>
  </section>
 )
}

export default About
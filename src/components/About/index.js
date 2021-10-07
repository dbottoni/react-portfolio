import React from 'react'
import coverImage from "../../assets/img/selfie.jpg";

function About(){
 return(
  <section className="my-5">
    <div class="text-center">
      <h1 id="about">Who am I?</h1>
        <img src={coverImage} className="my-2 rounded text-center" alt="cover" / >
        <p>
          Hi About Page - Enter Some Text about myself here
        </p>
    </div>
  </section>
 )
}

export default About
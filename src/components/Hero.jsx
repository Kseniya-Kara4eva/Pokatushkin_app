import React from 'react'

import title from "../images/title.jpg";

const Hero = () => {
  return (
      <main>
        <section class="hero-section">
            <div class="hero">
                <div class="title-container">
                  <h1 class="title">СЕРВИС ПРОКАТА ВЕЛОСИПЕДОВ</h1>
                  <div class="title title-img">
                    <img src={title} alt="title" />
                  </div>
                </div>
            </div>
        </section>
      </main>
  )
}

export default Hero
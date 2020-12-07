import React from 'react';
import HeroButton from './HeroButton';

const Hero = () => {
  return (
    <div id="hero" className="Hero" style={{ backgroundImage: 'url(https://images6.alphacoders.com/542/thumb-1920-542776.jpg)' }}>
      <div className="content">
        <img className="logo-office" src="https://i.kym-cdn.com/photos/images/newsfeed/000/549/465/c64.png" alt="The Office" />
        <h2>Season 9 is Now Available</h2>
        <p>A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.</p>
        <div className="button-wrapper">
          <HeroButton primary={true} text="Play" />
          <HeroButton primary={false} text="+ More Info" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
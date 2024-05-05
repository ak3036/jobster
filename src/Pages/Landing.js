import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../Components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking </span>Webapp
          </h1>
          <p>
            Streamline your job search with our intuitive job tracking
            application. Organize job postings, track application progress, set
            reminders, and stay on top of deadlines all in one place. Say
            goodbye to scattered notes and hello to efficient job hunting.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;

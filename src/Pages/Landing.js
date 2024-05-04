import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='jobster logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking </span>Webapp
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit exercitationem distinctio debitis quas quod id natus
            eius aperiam repellendus, sequi animi dolore laborum ea non, libero
            eaque amet, nesciunt voluptates?
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </main>
  );
};

export default Landing;

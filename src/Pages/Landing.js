import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../Components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Landing = () => {
  const { user } = useSelector((store) => store.user);

  if (user) {
    return <Navigate to='/' />;
  }
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
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;

import React from 'react';
import logo from './images/logo.png';

const Header = props => {
  return (
    <div className='text-center mt-5 mb-5'>
      <img
        className='mobileLogoImg'
        src={logo}
        alt=''
        onClick={props.RedirectHome}
      />
    </div>
  );
};

export default Header;

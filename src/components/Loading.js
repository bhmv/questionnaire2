import React from 'react';
import loading from '../images/loading.svg';

const Loading = props => {
  return (
    <div className='text-center loadingDiv'>
      <img src={loading} alt='Personalizing...' className='HOVE3' />
      <h1 className='aHeadings mt-5'>{props.process}</h1>
    </div>
  );
};

export default Loading;

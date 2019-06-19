import React from 'react';
import loading from '../images/loading.svg';

const Loading = props => {
  return (
    <div className='text-center loadingDiv'>
      <img src={loading} alt='Personalizing...' />
      <h1 className='aHeadingsLoading mt-5'>{props.process}</h1>
    </div>
  );
};

export default Loading;

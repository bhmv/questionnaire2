import React from 'react';

const FourthComponent = props => {
  return (
    <div className='container'>
      <h1 className='text-center qHeadings mb-5'>
        Your estimated number of guests
      </h1>
      <div className='row etaNumberAlign' onClick={props.ToNextComp}>
        {props.filterBy4}
      </div>
      <div className='text-center'>
        <button onClick={props.ToPreviousComp} className='backBtn mt-5 mb-5'>
          BACK
        </button>
      </div>
    </div>
  );
};

export default FourthComponent;

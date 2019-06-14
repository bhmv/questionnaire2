import React from 'react';

const SecondComponent = props => {
  return (
    <div className='container'>
      <h1 className='text-center qHeadings mb-5'>Venue type</h1>
      <div className='row' onClick={props.ToNextComp}>
        {props.filterBy2}
      </div>
      {/* <div className='text-center'>
          <button onClick={props.StartOverTheApp} className='backBtn mt-5 mb-5'>
            BACK
          </button>
        </div> */}
    </div>
  );
};

export default SecondComponent;

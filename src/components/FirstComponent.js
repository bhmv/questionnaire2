import React from 'react';

const FirstComponent = props => {
  return (
    <div className='container'>
      <h1 className='text-center qHeadings mb-5'>What are you celebrating?</h1>
      <div className='row' onClick={props.ToNextComp}>
        {props.filterBy}
      </div>
    </div>
  );
};

export default FirstComponent;

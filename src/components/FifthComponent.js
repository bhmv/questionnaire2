import React from 'react';

const FifthComponent = props => {
  return (
    <div className='container'>
      <h1 className='text-center qHeadings mb-5'>
        Your estimated budget for the venue only
      </h1>
      <div className='row budgetAlign' onClick={props.ToNextComp}>
        {props.filterBy5}
      </div>
      <p className='budgetDisclaimer mt-5'>
        Venue rental fees range from as little as $1000 to over $25000. The
        average venue rental fees run from $4000 to around $8000. Venue rental
        fees do not include the cost of catering and other wedding or event
        services. As a general guideline, your venue cost will make up somewhere
        between 15-30% of your total budget.
      </p>
      <div className='text-center'>
        <button onClick={props.ToPreviousComp} className='backBtn mt-5 mb-5'>
          BACK
        </button>
      </div>
    </div>
  );
};

export default FifthComponent;

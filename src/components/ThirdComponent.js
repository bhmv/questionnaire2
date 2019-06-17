import React from 'react';

class ThirdComponent extends React.Component {
  StartOverTheApp = () => {
    window.location.reload();
  };
  render() {
    return (
      <div className='container'>
        <h1 className='text-center qHeadings mb-5'>Pick your preferred area</h1>
        <div className='row' onClick={this.props.ToNextComp}>
          {this.props.filterBy3}
        </div>
        <div className='text-center'>
          <button onClick={this.StartOverTheApp} className='backBtn mt-5 mb-5'>
            BACK
          </button>
        </div>
      </div>
    );
  }
}

export default ThirdComponent;

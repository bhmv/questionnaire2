import React from 'react';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Popup;

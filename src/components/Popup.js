import React from 'react';
import $ from 'jquery';

class Popup extends React.Component {
  render() {
    setTimeout(() => {
      $(document).ready(function() {
        $('.popup_inner').fadeOut();
      });
    }, 3000);
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

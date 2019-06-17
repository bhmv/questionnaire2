import React from 'react';
import $ from 'jquery';

class Popup extends React.Component {
  render() {
    $(document).ready(function() {
      $('.popup').hover(function() {
        $('.popup_inner').fadeOut();
      });
    });
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

import React from 'react';

class ShowDelayed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }

  componentDidMount = () => {
    // ***
    // Remember the timer handle             // ***
    this.timerHandle = setTimeout(() => {
      // ***
      this.setState({ hidden: false }); // ***
      this.timerHandle = 0; // ***
    }, this.props.wait); // ***
  }; // ***
  // ***
  componentWillUnmount = () => {
    // ***
    // Is our timer running?                 // ***
    if (this.timerHandle) {
      // ***
      // Yes, clear it                     // ***
      clearTimeout(this.timerHandle); // ***
      this.timerHandle = 0; // ***
    } // ***
  };

  // componentDidMount = () => {
  //   setTimeout(() => {
  //     this.setState({ hidden: false });
  //   }, this.props.wait);
  // };

  render() {
    return this.state.hidden ? '' : this.props.children;
  }
}

export default ShowDelayed;

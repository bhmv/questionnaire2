import React from 'react';

class ShowWhileDelayed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: false };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ hidden: true });
  //   }, this.props.wait);

  componentDidMount = () => {
    // ***
    // Remember the timer handle             // ***
    this.timerHandle = setTimeout(() => {
      // ***
      this.setState({ hidden: true }); // ***
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

  render() {
    return this.state.hidden ? '' : this.props.children;
  }
}

export default ShowWhileDelayed;

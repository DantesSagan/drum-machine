import React from 'react';
import '../styles/style.css';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    // Change code below this line - YES
    if (this.state.display) {
      return (
        <div
          className='switch-button flex justify-center pl-0 pr-5'
          style={{ backgroundColor: '#fffdd0', width: '50', height: '22px' }}
        >
          <div // turn on
            className='button-switch'
            style={{ float: 'right' }}
            onClick={this.toggleDisplay}
          ></div>
        </div>
      );
    } else {
      return (
        <div // turn off
          className='switch-button flex justify-center pl-5 pr-0'
          style={{ backgroundColor: '#fffdd0', width: '50px', height: '22px' }}
        >
          <div
            className='button-switch'
            style={{ float: 'left' }}
            onClick={this.toggleDisplay}
          ></div>
        </div>
      );
    }
  }
}

export default ToggleButton;

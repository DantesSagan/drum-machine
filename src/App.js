import Buttons from './components/buttons';
import React from 'react';
import ToggleButton from './actions/toggleButton';
import 'tailwindcss/tailwind.css';

/* eslint-disable jsx-a11y/anchor-is-valid */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0.3,
      power: true,
    };
    this.powerControl = this.powerControl.bind(this);
    this.displayClipName = this.displayClipName.bind(this);
  }

  powerControl() {
    this.setState({
      power: !this.state.power,
    });
  }
  displayClipName(name) {
    if (this.state.power) {
      this.setState({
        display: name,
      });
    }
  }

  render() {
    return (
      <div
        id='drum-machine'
        className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-60 d-flex p-4 grid grid-flow-col grid-cols-2 gap-4  '
        style={{ background: '#FECACA' }}
      >
        <Buttons power={this.state.power} volume={this.state.volume} />
        <div className='container-right'>
          <div className='flex justify-center pl-0 pr-5 mt-10'>
            <p className='font-bold text-red-medium'>POWER</p>
          </div>
          <div
            className='flex justify-center pl-0 pr-5'
            onClick={this.powerControl}
          >
            <ToggleButton />
          </div>
          <hr />
          <div
            id='display'
            className='switch-button justify-center  pl-0 pr-5 mt-5'
            style={{
              backgroundColor: '#fffdd0',
              width: '250px',
              height: '40px',
              margin: '15px auto',
              padding: '15px',
            }}
          ></div>
          <hr />
          <h4>Volume</h4>
          <input
            type='range'
            step='0.01'
            value={this.state.volume}
            onChange={(e) => this.setState({ volume: e.target.value })}
            max='1'
            min='0'
            className='text-center w-50'
          />
          <div className='text-center'></div>
          <div className='flex justify-center pl-0 pr-5 mt-5'>
            <p className='font-bold text-red-medium'>Switch</p>
          </div>
          <div className='flex justify-center pl-0 pr-5 '>
            <ToggleButton />
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default App;


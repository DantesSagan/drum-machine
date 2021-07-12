import React from 'react';

class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick;
  render() {
    return (
      <div className='container-right' id='display'>
        <div className='switch-button flex justify-center pl-0 pr-5 mt-20'>
          <p className=''>POWER</p>
        </div>
        <div className='switch' style={{ float: 'right' }}></div>
        <hr />
      </div>
    );
  }
}

export default Actions;

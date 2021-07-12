import React from 'react';

class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      isChecked: null,
    };
  }
  componentDidMount() {
    this.setState({
      isChecked: this.props.isChecked,
    });
  }
  _handleChange() {
    this.setState({
      isChecked: !this.props.isChecked,
    });
  }
  render() {
    const power = () => {};
    return (
      <div className='container-right' id='display'>
        <div className='switch-button flex justify-center pl-0 pr-5 mt-20'>
          <p className=''>POWER</p>
        </div>
        <div
          ref='switch'
          checked={this.props.isChecked}
          onChange={this._handleChange}
          className='switch'
          type='checkbox'
          style={{ float: 'right' }}
        ></div>
        <hr />
      </div>
    );
  }
}

export default Actions;

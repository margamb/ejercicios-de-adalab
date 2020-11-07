import React from 'react';
import './App.css';

class Input extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type="text"
          value={this.props.nameInfo}
          onChange={this.props.handleChange}
        />
        <p>{this.props.nameInfo}</p>
      </div>
    );
  }
}

export default Input;

import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
    console.log(this.props);
    return (
      <form>
        <h1>Mi formulario</h1>
        <Input
          nameInfo={this.props.name2}
          handleChange={this.props.onInputChange}
        />
      </form>
    );
  }
}

export default Form;

// name es la prop q form pasa a Input
// {this.props.name} -> son las props q app pasa a form

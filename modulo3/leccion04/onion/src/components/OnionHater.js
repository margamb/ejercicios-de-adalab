import React from 'react';

class OnionHater extends React.Component {
  render() {
    return (
      <textarea
        onChange={(ev) => this.props.onChange(ev)}
        id="textAreaBox"
        name="textarea"
        rows="2"
        cols="50"
        placeholder="Write something here"
      />
    );
  }
}

export default OnionHater;

/* <button onClick={() => this.props.onClick(this.props.category)}>
  {this.props.category}
</button>; */

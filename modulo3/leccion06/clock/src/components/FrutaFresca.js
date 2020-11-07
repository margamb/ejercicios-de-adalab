import React from 'react';

class FrutaFresca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularFruits: ['Kiwi', 'pinneaple', 'strawberry'],
      newFruit: '',
    };
    this.pushSpreed = this.pushSpreed.bind(this);
  }

  pushSpreed(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        popularFruits: [...prevState.popularFruits, this.state.newFruit],
        newFruit: '',
      };
    });
  }

  handleFruitChange = (ev) => {
    this.setState({ newFruit: ev.target.value });
  };

  handleDelete = (ev) => {
    console.log(ev.target.value);
    this.setState((prevState) => {
      return {
        popularFruits: prevState.popularFruits.filter(
          (fruit) => fruit !== ev.target.value
        ),
      };
    });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.popularFruits.map((fruit) => (
            <li key={fruit}>
              {fruit}
              <span> </span>
              <button value={fruit} onClick={this.handleDelete}>
                🔥
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.pushSpreed}>
          <label>
            Fruit:
            <input
              type="text"
              name="name"
              value={this.state.newFruit}
              onChange={this.handleFruitChange}
            />
            <input type="submit" value="Añadir" />
          </label>
        </form>
      </>
    );
  }
}

export default FrutaFresca;

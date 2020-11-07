import React from 'react';
import './App.css';
import Item from './Item';
import CategoryButton from './CategoryButton';

const arrayOfItems = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    // description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
  {
    //name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: '15',
  },
];

class App extends React.Component {
  handleCategoryChange(category) {
    console.log(category);
  }

  render() {
    return (
      <div>
        <ul>
          {arrayOfItems
            //.filter((item) => item.price < 10)
            .map((item) => (
              <li>
                <Item
                  name={item.name}
                  description={item.description}
                  quantity={item.quantity}
                  category={item.category}
                  price={item.price}
                />
              </li>
            ))}
        </ul>
        <CategoryButton onClick={this.handleCategoryChange} category="Bebida" />
        <CategoryButton onClick={this.handleCategoryChange} category="Comida" />
      </div>
    );
  }
}

export default App;

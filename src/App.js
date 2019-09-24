import React, { Component, } from 'react';
import List from './components/list/List';
import GroceryForm from './components/groceryForm/GroceryForm'

class App extends Component {
  state = { items: [] };

  getUniqId = () => {
     return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

  renderItems = () => {
    const { items, } = this.state;
    return items.map( item => {
      return (
        <li key={item.id}>{item.name}</li>
      )
    })
  };

  addItem = (name) => {
    const { items } = this.state;
    const item = { name, id: this.getUniqId() , inCart: false }
    this.setState({ items: [item, ...items] });
  }

  render() {
  const { items } = this.state;

    return (
      <div>
        < GroceryForm addItem={this.addItem} />
        <List name = 'Grocery List' items={items} />
      </div>
    )
  }
}

export default App;

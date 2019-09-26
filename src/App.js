import React, { Component, } from 'react';
import List from './components/list/List';
import GroceryForm from './components/groceryForm/GroceryForm'
import Grocery from './components/grocery/Grocery'

class App extends Component {
  state = { items: [] };

  getUniqId = () => {
     return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

  addItem = (name) => {
    const { items } = this.state;
    const item = { name, id: this.getUniqId() , inCart: false }
    this.setState({ items: [item, ...items] });
  }

  handleClick = (id) => {
    const { groceries } = this.state
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            inCart: !grocery.inCart
          }
        return grocery
        }
      })
    })
  }

  render() {
  const { items } = this.state;

    return (
      <div>
        < GroceryForm addItem={this.addItem} />
        <List name = 'Grocery List' items={ items } groceryClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;

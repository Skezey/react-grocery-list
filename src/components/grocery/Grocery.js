import React from 'react';

const Grocery = ({ id, name, inCart, groceryClick }) => (
  <li
  style={ inCart ? { ...styles.needed, ...styles.inCart } : styles.needed }
  onClick={ () => groceryClick(id) }>
  { name }
  </li>
)

const styles = {
  needed: { cursor: 'pointer' },
  inCart: { color: 'grey', textDecoration: 'line-through' }
}

export default Grocery;

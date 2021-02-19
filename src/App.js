import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart

    // We have to use an array because <Navigation /> uses the length
    // of the array to display how many items the user has in their cart
    return setCart([
      ...cart,
      item
    ])
  };

  console.log(cart)

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routes */}
      <Route exact path="/">
        <Products products={products} addItem={addItem} />
      </Route>

      <Route path="/cart">
        <ShoppingCart cart={cart} />
      </Route>
    </div>
  );
}

export default App;

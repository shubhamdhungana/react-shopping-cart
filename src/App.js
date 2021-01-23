///feature 1
import React from 'react';
import Cart from './components/Cart';
import Intro from './components/Intro';
import Products from './components/Products';
import data from "./data.json";

class App extends React.Component  {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: "",
    };
  }

  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),

    });

  };

addToCart = (product) => {
  const cartItems = this.state.cartItems.slice();
  let alreadyInCart = false;
  cartItems.forEach((item) => {
    if (item._id === product._id) {
      item.count++;
      alreadyInCart = true;
    }
  });
  if(!alreadyInCart){
    cartItems.push({...product, count: 1});
  }
  this.setState({cartItems});
};
  render() {
    return (
      <div className="grid-container">
        <header>
          <a className="brand-name" href="/">teenygal   <Intro />  </a> 
              
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products
                 products={this.state.products}
                 addToCart={this.addToCart}
              ></Products>
            </div>
            <div className="sidebar">
                <Cart
                   cartItems={this.state.cartItems}
                   removeFromCart={this.removeFromCart}
                   />
            </div>
          </div>
        </main>
        <footer>
          All right is reserved
        </footer>
      </div>
    );
  }
  
}

export default App;

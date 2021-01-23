///feature 1
import React from 'react';
import Intro from './components/Intro';
import Products from './components/Products';
import data from "./data.json";

class App extends React.Component  {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }


  render() {
    return (
      <div className="grid-container">
        <header>
          <a className="brand-name" href="/">teenygal   <Intro />  </a> 
              
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">
                Cart Items
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

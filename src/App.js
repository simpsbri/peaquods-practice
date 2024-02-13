//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Layout from './Components/Layout';
import Content from './Components/Content';
import Products from './Components/Products';
import Cart from './Components/Cart';

const products = [
  {
    id: 1,
    name: 'Spaghetti',
    price: 14.99,
    category: 'pasta',
  },
  {
    id: 2,
    name: 'Lasagna',
    price: 18.99,
    category: 'pasta',
  },
  {
    id: 1,
    name: 'Pepperoni Pizza',
    price: 12.99,
    category: 'Pies',
  },
];

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <div className='App'>
      <Layout>
        <header>
          <h1>Peaquod's</h1>
        </header>
        <main>
          <Content>
            <Products cart={cart} products={products} updateCart={updateCart} />
            <Cart />
          </Content>
        </main>
        <footer>Peaquod's &copy; 2024</footer>
      </Layout>
    </div>
  );
}

export default App;

import './App.css';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className="header-content">
          <h2>
            Platzi Store Products!
          </h2>
        </div>
      </header>
      <ProductList />
    </div>
  );
}

export default App;

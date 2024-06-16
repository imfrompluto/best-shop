import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import yellow from './cartharttyellow.webp';
import pink from './cartharttpink.webp';
import blue from './cartharttblue.webp';
// component
function App() {
  // component state
    const [selectedcolour, setSelectedcolour] = useState('yellow');
// component function
    const handleColourchange = (colour) => {
      setSelectedcolour(colour);
    };

    return (
      <div className="App">
          <div className="top">
            <div className="container">
            <h2>Best Shop</h2>
            <button>Sign in</button>
            </div>
        </div>
        <main>
          <div className="container">
        <div className="colourchange">
          <img className='image' src={selectedcolour === 'yellow' ? yellow : selectedcolour === 'pink' ? pink : blue} alt="Selected Color" />
        </div>
        <div className="detail">
          <div className="description">
            <h3>W' Georgia Shirt Jac</h3>
            <h6>100% Cotton 'Smithfield' Colour Denim, 13.5 oz</h6>
            <h4>$149.00</h4>
          </div>
          <div className="buttons">
            <div className="colourbutton">
              <button id='yellow' onClick={() => handleColourchange('yellow')}>Yellow</button>
              <button id='pink' onClick={() => handleColourchange('pink')}>Pink</button>
              <button id='blue' onClick={() => handleColourchange('blue')}>Blue</button>
            </div>
            <div className="sizes">
              <button id="s">S</button>
              <button id="m">M</button>
              <button id="l">L</button>
              <button id="xl">XL</button>
            </div>
            <div className="cart">
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        </div>
        </main>
      </div>
    );
  }

export default App;

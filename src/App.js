import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Floor from './components/Floor';
import './assets/css/styles.css';  // Import the styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <div className="container d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="my-5" id="floor-title">SRE Firefighters</h1>
            <Floor />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

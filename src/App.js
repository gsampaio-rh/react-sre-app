import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Floor from './components/Floor';
import './assets/css/styles.css';  // Import the styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <Floor />
      <Footer />
    </div>
  );
}

export default App;

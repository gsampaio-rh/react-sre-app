import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './assets/css/styles.css';  // Import the styles

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Main content will go here */}
      <Footer />
    </div>
  );
}

export default App;

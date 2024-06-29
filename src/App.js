import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Room from './components/Room';
import './assets/css/styles.css';  // Import the styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <div className="container d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="my-5" id="floor-title">SRE Firefighters</h1>
            <div className="floor" id="floor-plan">
              <div className="row justify-content-md-center">
                <Room id="room-sala-roxa" name="Sala Roxa" dimensions="4.76m x 4.76m" initialPeople={30} backgroundColor="sala-roxa" />
                <Room id="room-sala-azul" name="Sala Azul" dimensions="4.76m x 4.87m" initialPeople={30} backgroundColor="sala-azul" />
                <Room id="room-sala-rosa" name="Sala Rosa" dimensions="4.76m x 6.93m" initialPeople={30} backgroundColor="sala-rosa" />
                <Room id="room-sala-verde" name="Sala Verde" dimensions="3.94m x 4.06m" initialPeople={30} backgroundColor="sala-verde" />
              </div>
              <div className="row justify-content-md-center">
                <Room id="room-sala-marrom" name="Sala Marrom" dimensions="3.31m x 7.06m" initialPeople={30} backgroundColor="sala-marrom" />
                <Room id="room-sala-vermelha" name="Sala Vermelha" dimensions="3.94m x 3.94m" initialPeople={30} backgroundColor="sala-vermelha" />
                <Room id="room-sala-amarela" name="Sala Amarela" dimensions="3.31m x 7.06m" initialPeople={30} backgroundColor="sala-amarela" />
                <Room id="room-sala-laranja" name="Sala Laranja" dimensions="3.31m x 7.06m" initialPeople={30} backgroundColor="sala-laranja" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

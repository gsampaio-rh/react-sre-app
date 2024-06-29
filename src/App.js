import React, { useState, useEffect } from 'react';
import './assets/css/styles.css';
import './assets/css/floor.css';
import './assets/css/room.css';
import './assets/css/exitArea.css';
import './assets/css/sidebar.css';
import './assets/css/notification.css';
import './assets/css/animations.css';
import './assets/css/modal.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Floor from './components/Floor';
import ComponentModal from './components/ComponentModal';
import Sidebar from './components/Sidebar';
import { useInsights } from './hooks/useInsights';
import { useModal } from './hooks/useModal';
import { useSidebar } from './hooks/useSidebar';
import floorData from './assets/data/floorData.json'; // Import the JSON data

function App() {
  const { isSidebarVisible, isInsightsEnabled, handleMenuClick, toggleInsights, closeSidebar } = useSidebar();
  const affectedEquipment = useInsights(isInsightsEnabled);
  const { showModal, selectedComponent, selectedProblem, handleClose, showComponentDetails } = useModal(isInsightsEnabled);

  const [fireLocation, setFireLocation] = useState(null);

  const handleAddFire = (location) => {
    setFireLocation(location);
  };

  return (
    <div className="App">
      <Navbar handleMenuClick={handleMenuClick} />
      <Floor
        data={floorData}
        affectedEquipment={affectedEquipment}
        showComponentDetails={showComponentDetails}
        fireLocation={fireLocation}
      />
      <Footer />
      <ComponentModal
        show={showModal}
        handleClose={handleClose}
        componentData={selectedComponent}
        problemData={selectedProblem}
      />
      <Sidebar
        isVisible={isSidebarVisible}
        handleClose={closeSidebar}
        isInsightsEnabled={isInsightsEnabled}
        toggleInsights={toggleInsights}
      />
      <button onClick={() => handleAddFire('Sala Vermelha')}>Add Fire to Sala Vermelha</button>
    </div>
  );
}

export default App;

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
import ComponentModalWrapper from './components/ComponentModalWrapper';
import Sidebar from './components/Sidebar';
import { useInsights } from './hooks/useInsights';
import { useModal } from './hooks/useModal';
import { useSidebar } from './hooks/useSidebar';
import { useInsightsContext } from './contexts/InsightsContext';
import checkSpecificRule from './services/checkRule';
import floorData from './assets/data/floorData.json';

function App() {
  const { isSidebarVisible, handleMenuClick, closeSidebar } = useSidebar();
  const { isInsightsEnabled } = useInsightsContext();
  const affectedEquipment = useInsights(isInsightsEnabled);
  const { showModal, selectedComponent, selectedProblem, handleClose, showComponentDetails } = useModal(isInsightsEnabled);

  const [fireLocations, setFireLocations] = useState([]);

  useEffect(() => {
    const fireRoomIds = checkSpecificRule();
    if (fireRoomIds) {
      setFireLocations(fireRoomIds);
    }
  }, []);

  return (
    <div className="App">
      <Navbar handleMenuClick={handleMenuClick} />
      <Floor
        data={floorData}
        affectedEquipment={affectedEquipment}
        showComponentDetails={showComponentDetails}
        fireLocations={fireLocations}
      />
      <Footer />
      <ComponentModalWrapper
        show={showModal}
        handleClose={handleClose}
        componentData={selectedComponent}
        problemData={selectedProblem}
      />
      <Sidebar
        isVisible={isSidebarVisible}
        handleClose={closeSidebar}
      />
    </div>
  );
}

export default App;

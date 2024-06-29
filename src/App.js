import React from 'react';
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
import infraData from './assets/data/infra_data.json';

function App() {
  const { showModal, selectedComponent, selectedProblem, handleClose, showComponentDetails } = useModal(true);
  const { isSidebarVisible, isInsightsEnabled, handleMenuClick, toggleInsights, closeSidebar } = useSidebar();
  const affectedEquipment = useInsights(isInsightsEnabled);

  return (
    <div className="App">
      <Navbar handleMenuClick={handleMenuClick} />
      <Floor data={infraData} affectedEquipment={affectedEquipment} showComponentDetails={showComponentDetails} />
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
    </div>
  );
}

export default App;

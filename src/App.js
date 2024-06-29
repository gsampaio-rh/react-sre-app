import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Floor from './components/Floor';
import ComponentModal from './components/ComponentModal';
import './assets/css/styles.css';  // Import the styles
import infraData from './assets/data/infra_data.json';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedProblem, setSelectedProblem] = useState(null);

  const handleClose = () => setShowModal(false);

  const showComponentDetails = (componentId) => {
    const componentData = infraData.equipment[componentId];
    if (!componentData) {
      console.error('No data found for the given component ID:', componentId);
      return;
    }

    const relatedProblems = componentData.related_problems;
    const problemData = relatedProblems.length > 0 ? infraData.problems[relatedProblems[0]] : null;

    setSelectedComponent(componentData);
    setSelectedProblem(problemData);
    setShowModal(true);
  };

  // Print the data when the page loads
  console.log(infraData);

  return (
    <div className="App">
      <Navbar />
      <Floor data={infraData} showComponentDetails={showComponentDetails} />
      <Footer />
      <ComponentModal
        show={showModal}
        handleClose={handleClose}
        componentData={selectedComponent}
        problemData={selectedProblem}
      />
    </div>
  );
}

export default App;

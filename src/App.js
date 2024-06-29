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
import infraData from './assets/data/infra_data.json';
import cveData from './assets/data/active_cve_data.json';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [affectedEquipment, setAffectedEquipment] = useState([]);

  useEffect(() => {
    const affectedEquipmentSet = new Set();
    const matchingCVEs = [];

    for (const componentId in infraData.equipment) {
      const component = infraData.equipment[componentId];
      const relatedProblems = component.related_problems;

      relatedProblems.forEach(problemId => {
        const problem = infraData.problems[problemId];

        const matchingCVE = cveData.data.find(cve =>
          cve.attributes.rules.some(rule => rule.associated_cves.includes(problemId))
        );

        if (matchingCVE) {
          affectedEquipmentSet.add(componentId);
          matchingCVEs.push(matchingCVE.attributes.synopsis);
        }
      });
    }

    setAffectedEquipment(Array.from(affectedEquipmentSet));

    console.log('Affected Equipment:', Array.from(affectedEquipmentSet));
    console.log('Matching CVEs:', matchingCVEs);
  }, []);

  const handleClose = () => setShowModal(false);

  const showComponentDetails = (componentId) => {
    const componentData = infraData.equipment[componentId];
    if (!componentData) {
      console.error('No data found for the given component ID:', componentId);
      return;
    }

    const relatedProblems = componentData.related_problems;
    let problemData = null;

    if (relatedProblems.length > 0) {
      const problemId = relatedProblems[0];
      problemData = infraData.problems[problemId];

      const matchingCVE = cveData.data.find(cve =>
        cve.attributes.rules.some(rule => rule.associated_cves.includes(problemId))
      );

      if (matchingCVE) {
        problemData = {
          ...problemData,
          cveDetails: matchingCVE.attributes
        };
      }
    }

    setSelectedComponent(componentData);
    setSelectedProblem(problemData);
    setShowModal(true);
  };

  // Print the data when the page loads
  console.log(infraData);
  console.log(cveData);

  return (
    <div className="App">
      <Navbar />
      <Floor data={infraData} affectedEquipment={affectedEquipment} showComponentDetails={showComponentDetails} />
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

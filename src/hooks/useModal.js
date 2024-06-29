import { useState } from 'react';
import { useInsightsContext } from '../contexts/InsightsContext';
import infraData from '../assets/data/infra_data.json';
import cveData from '../assets/data/active_cve_data.json';

export const useModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [selectedProblem, setSelectedProblem] = useState(null);
    const { isInsightsEnabled } = useInsightsContext();

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

            if (isInsightsEnabled) {
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
        }

        setSelectedComponent(componentData);
        setSelectedProblem(problemData);
        setShowModal(true);
    };

    return { showModal, selectedComponent, selectedProblem, handleClose, showComponentDetails };
};

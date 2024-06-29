import { useState, useEffect } from 'react';
import infraData from '../assets/data/infra_data.json';
import cveData from '../assets/data/active_cve_data.json';

export const useInsights = (isInsightsEnabled) => {
  const [affectedEquipment, setAffectedEquipment] = useState([]);

  useEffect(() => {
    if (!isInsightsEnabled) return;

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
  }, [isInsightsEnabled]);

  return affectedEquipment;
};

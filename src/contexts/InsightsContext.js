import React, { createContext, useContext, useState } from 'react';

const InsightsContext = createContext();

export const InsightsProvider = ({ children }) => {
    const [isInsightsEnabled, setIsInsightsEnabled] = useState(false);
    const [isAnsibleEnabled, setIsAnsibleEnabled] = useState(false);

    const toggleInsights = () => {
        setIsInsightsEnabled(prevState => !prevState);
    };

    const toggleAnsible = () => {
        setIsAnsibleEnabled(prevState => !prevState);
    };

    return (
        <InsightsContext.Provider value={{ isInsightsEnabled, toggleInsights, isAnsibleEnabled, toggleAnsible }}>
            {children}
        </InsightsContext.Provider>
    );
};

export const useInsightsContext = () => useContext(InsightsContext);

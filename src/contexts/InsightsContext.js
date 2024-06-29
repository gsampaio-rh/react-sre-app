import React, { createContext, useContext, useState } from 'react';

const InsightsContext = createContext();

export const InsightsProvider = ({ children }) => {
    const [isInsightsEnabled, setIsInsightsEnabled] = useState(false);

    const toggleInsights = () => {
        setIsInsightsEnabled(prevState => !prevState);
        console.log(`Insights enabled: ${!isInsightsEnabled}`); // Debug log
    };

    return (
        <InsightsContext.Provider value={{ isInsightsEnabled, toggleInsights }}>
            {children}
        </InsightsContext.Provider>
    );
};

export const useInsightsContext = () => useContext(InsightsContext);

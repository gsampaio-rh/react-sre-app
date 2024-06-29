// hooks/useSidebar.js
import { useState } from 'react';

export const useSidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isInsightsEnabled, setIsInsightsEnabled] = useState(false);

  const handleMenuClick = (section) => {
    setIsSidebarVisible(section === 'config');
  };

  const toggleInsights = () => {
    setIsInsightsEnabled(!isInsightsEnabled);
  };

  return {
    isSidebarVisible,
    isInsightsEnabled,
    handleMenuClick,
    toggleInsights,
    closeSidebar: () => setIsSidebarVisible(false),
  };
};

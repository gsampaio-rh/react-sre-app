import { useState } from 'react';

export const useSidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleMenuClick = (section) => {
    setIsSidebarVisible(section === 'config');
  };

  return {
    isSidebarVisible,
    handleMenuClick,
    closeSidebar: () => setIsSidebarVisible(false),
  };
};

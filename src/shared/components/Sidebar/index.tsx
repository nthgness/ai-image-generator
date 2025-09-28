import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import { ICONS } from "@/constants/ui";

interface SidebarProps {
  children: React.ReactNode;
  title?: string;
}

const Sidebar = ({ children }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const toggleSidebar = () => {
    if (isOpen) {
    
      setShowContent(false);
      setTimeout(() => setIsOpen(false), 150);
    } else {
  
      setIsOpen(true);
      setTimeout(() => setShowContent(true), 200);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setShowContent(false);
    }
  }, [isOpen]);

  return (
    <>
      <aside
        className={`${styles.sidebar} ${
          isOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <div className={styles.sidebarHeader}>
          {isOpen && <h2 className={styles.sidebarTitle}>History</h2>}
          <button
            className={styles.toggleButton}
            onClick={toggleSidebar}
            aria-label={isOpen ? "Hide sidebar" : "Show sidebar"}
          >
            {isOpen ? "←" : "→"}
          </button>
        </div>

        {showContent && (
          <div className={styles.sidebarContent}>
            {children}
          </div>
        )}
      </aside>

      {!isOpen && (
        <button className={styles.historyButton} onClick={toggleSidebar}>
          {ICONS.HISTORY}
        </button>
      )}

      {isOpen && <div className={styles.overlay} onClick={toggleSidebar} />}
    </>
  );
};

export default Sidebar;

import React from "react";
import Header from "@shared/components/Header";
import styles from "./Layout.module.css";
import Sidebar from "@shared/components/Sidebar";
import ImageHistory from "@/features/image-generation/components/ImageHistory";

interface LayoutProps {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <Sidebar>
          <ImageHistory />
        </Sidebar>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

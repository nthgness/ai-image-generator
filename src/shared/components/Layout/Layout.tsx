import React from "react";
import { Footer, Header } from "../";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer>Powered by AI • Built with React & TypeScript</Footer>
    </div>
  );
};

export default Layout;

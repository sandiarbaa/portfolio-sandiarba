import React from "react";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;

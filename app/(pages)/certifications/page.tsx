import PageLayout from "@/components/layouts/PageLayout";
import Certifications from "@/components/pages/Certifications";
import React from "react";

const CertificationsPage = () => {
  return (
    <PageLayout>
      <Certifications addPadding={true} />
    </PageLayout>
  );
};

export default CertificationsPage;

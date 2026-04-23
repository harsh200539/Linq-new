import LegalPage from "../../src/Legal/LegalPage";

export const metadata = {
  title: "Privacy Policy | LINQ Corporate",
  description: "Learn how LINQ Corporate Solutions protects and manages your personal data.",
};

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      content: [
        "We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.",
      ],
    },
    {
      title: "Information We Collect",
      content: [
        "We may collect:",
        [
          "Personal information (name, email, phone)",
          "Usage data (pages visited, interactions)",
          "Cookies and tracking data",
        ],
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use your data to:",
        [
          "Provide and improve our services",
          "Respond to inquiries",
          "Enhance user experience",
          "Analyze website performance",
        ],
      ],
    },
    {
      title: "Data Sharing",
      content: [
        "We do not sell your personal data. We may share data with:",
        [
          "Trusted service providers",
          "Legal authorities if required",
        ],
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate security measures to protect your information including encrypted storage and secure data transmission protocols.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "Under applicable data protection laws, you may:",
        [
          "Request access to your data",
          "Request correction or deletion",
          "Opt out of communications",
        ],
      ],
    },
    {
      title: "Contact Us",
      content: [
        "For privacy-related inquiries, contact us at:",
        "legal@linq-corporate.com",
      ],
    },
  ];

  return (
    <LegalPage 
      title="Privacy Policy" 
      lastUpdated="October 17, 2026" 
      sections={sections} 
    />
  );
};

export default PrivacyPolicy;

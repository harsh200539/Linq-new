import LegalPage from "../../src/Legal/LegalPage";

export const metadata = {
  title: "Terms & Conditions | LINQ Corporate",
  description: "Read the terms and conditions for using LINQ Corporate Solutions services.",
};

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By using this website, you agree to these terms. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
      ],
    },
    {
      title: "Services",
      content: [
        "We provide data consulting, analytics, and research services. All services are subject to a separate written agreement between the parties.",
      ],
    },
    {
      title: "Use of Website",
      content: [
        "You agree not to:",
        [
          "Use the site for unlawful purposes",
          "Attempt to breach security or disrupt the integrity of the website",
          "Copy, redistribute, or misuse any content found on the platform",
        ],
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All content on this website, including text, graphics, logos, and software, is owned by LINQ Corporate Solutions and protected by international copyright law.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "We are not liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this website.",
      ],
    },
    {
      title: "Changes to Terms",
      content: [
        "We reserve the right to update these terms at any time. Your continued use of the website following any changes constitutes your acceptance of the new terms.",
      ],
    },
    {
      title: "Contact",
      content: [
        "For any questions regarding these terms, please contact us at:",
        "legal@linq-corporate.com",
      ],
    },
  ];

  return (
    <LegalPage 
      title="Terms & Conditions" 
      lastUpdated="October 17, 2026" 
      sections={sections} 
    />
  );
};

export default TermsAndConditions;

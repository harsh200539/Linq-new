import LegalPage from "../../src/Legal/LegalPage";

export const metadata = {
  title: "Cookie Policy | LINQ Corporate",
  description: "Learn about how LINQ Corporate Solutions uses cookies to improve your user experience.",
};

const CookiePolicy = () => {
  const sections = [
    {
      title: "What Are Cookies?",
      content: [
        "Cookies are small files stored on your device when you visit a website. They are used to improve the user experience by remembering your preferences and tracking website performance.",
      ],
    },
    {
      title: "Types of Cookies We Use",
      content: [
        "We use the following types of cookies:",
        [
          "Essential cookies: Necessary for site functionality and security.",
          "Analytics cookies: Used to understand how visitors interact with our website.",
          "Preference cookies: Remember your settings and provide a personalized experience.",
        ],
      ],
    },
    {
      title: "How We Use Cookies",
      content: [
        "We use cookies to:",
        [
          "Improve website performance and speed.",
          "Understand user behavior to optimize our content.",
          "Enhance overall website functionality.",
        ],
      ],
    },
    {
      title: "Managing Cookies",
      content: [
        "You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of this and many other websites.",
      ],
    },
    {
      title: "Third-Party Cookies",
      content: [
        "We may use third-party services like Google Analytics that also set cookies to help us analyze traffic and improve our services.",
      ],
    },
    {
      title: "Contact Us",
      content: [
        "If you have any questions regarding our Cookie Policy, please contact us at:",
        "legal@linq-corporate.com",
      ],
    },
  ];

  return (
    <LegalPage 
      title="Cookie Policy" 
      lastUpdated="October 17, 2026" 
      sections={sections} 
    />
  );
};

export default CookiePolicy;

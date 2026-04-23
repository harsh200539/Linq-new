import { BarChart3, TrendingUp, Zap, Users, ShieldCheck, Globe } from "lucide-react";

export const CASE_STUDIES = [
  {
    slug: "fintech-retention-optimization",
    title: "FinTech Retention Optimization",
    industry: "FinTech",
    service: "AI & Analytics",
    resultType: "Retention Growth",
    shortProblem: "Low user retention and declining engagement rates.",
    shortSolution: "AI-driven behavioral segmentation and personalized push ecosystems.",
    mainMetric: "+35% Retention",
    subtitle: "How we leveraged AI to transform user engagement and minimize churn for a global digital wallet.",
    tools: ["Python", "TensorFlow", "Mixpanel", "AWS"],
    impactSummary: "By transforming raw event data into actionable behavioral segments, we empowered the client to move from generic bulk messaging to hyper-personalized value delivery, resulting in a sustainable increase in both retention and long-term customer value.",
    image: "/case-studies/fintech-dashboard.png",
    tags: ["AI", "Analytics", "Optimization"],
    
    // Detailed Content
    heroMetric: "+35%",
    heroMetricLabel: "Increase in Daily Active Users Retention",
    problem: "A leading digital wallet provider was experiencing a 15% month-on-month churn rate. Users were downloading the app, performing a single transaction, and never returning. The lack of personalized value propositions meant users didn't see a reason to integrate the app into their daily financial habits.",
    solution: "We deployed a multi-stage behavioral analytics engine that identified high-risk churn segments in real-time. By leveraging predictive modeling, we triggered personalized 'Value-Loops' — context-aware notifications and rewards that matched the specific spending patterns of each user cohort.",
    
    process: [
      { step: 1, title: "Data Collection", desc: "Ingesting 12 months of anonymized transaction and session metadata." },
      { step: 2, title: "Analysis", desc: "Identifying the 'Magic Moment' where users stay for 90+ days." },
      { step: 3, title: "Model Development", desc: "Building a Random Forest classifier to predict churn probability." },
      { step: 4, title: "Deployment", desc: "Integrating with the client's CRM for automated lifecycle messaging." },
      { step: 5, title: "Optimization", desc: "A/B testing message variants to maximize CTR and re-engagement." }
    ],
    
    results: [
      { label: "User Retention", value: 35, suffix: "%", desc: "Increase in 30-day retention rates." },
      { label: "CLV Increase", value: 22, suffix: "%", desc: "Customer Lifetime Value improvement." },
      { label: "Churn Reduction", value: 18, suffix: "%", desc: "Reduction in monthly churn stats." }
    ],
    
    beforeAfter: {
      before: { label: "Standard Engagement", metric: "12%", sub: "Avg. Retention Rate" },
      after: { label: "LINQ Optimized", metric: "47%", sub: "Avg. Retention Rate" }
    }
  },
  {
    slug: "ecommerce-revenue-boost",
    title: "E-commerce Revenue Boost",
    industry: "E-commerce",
    service: "Consulting",
    resultType: "Revenue Growth",
    shortProblem: "Low conversion rates and high cart abandonment.",
    shortSolution: "Personalized recommendation engine and checkout flow optimization.",
    mainMetric: "+28% Revenue",
    subtitle: "Optimizing the path to purchase through intent-based personalization and frictionless checkout.",
    tools: ["React", "Node.js", "Tableau", "Shopify Plus"],
    impactSummary: "The implementation of a custom personalization layer reduced product discovery time by 60%, leading to higher average order values and a significant reduction in checkout abandonment across all mobile devices.",
    image: "/case-studies/ecommerce-dashboard.png",
    tags: ["Personalization", "Revenue", "Retail"],
    
    heroMetric: "+28%",
    heroMetricLabel: "Net Revenue Growth Post-Implementation",
    problem: "A luxury retail brand was struggling to convert its high-traffic volumes into sales. Despite thousands of daily visits, the conversion rate sat stagnant at 1.8%. Product discovery was manual and tedious, leading to high frustration and search-exit rates.",
    solution: "We implemented a collaborative-filtering recommendation engine that matched user intent with inventory in milliseconds. Additionally, we re-architected the checkout flow to reduce friction, implementing one-click payments and dynamic shipping calculators.",
    
    process: [
      { step: 1, title: "Audit", desc: "Full funnel analysis to identify breakage points." },
      { step: 2, title: "Engine Design", desc: "Developing the recommendation algorithm logic." },
      { step: 3, title: "UI/UX Shift", desc: "Redesigning the mobile checkout experience." },
      { step: 4, title: "Beta Launch", desc: "Testing with 10% of total site traffic." },
      { step: 5, title: "Scale", desc: "Full rollout with integrated real-time analytics." }
    ],
    
    results: [
      { label: "Revenue Growth", value: 28, suffix: "%", desc: "Direct attributed revenue increase." },
      { label: "Conversion Rate", value: 6.0, suffix: "%", desc: "Final checkout conversion average." },
      { label: "Cart Abandonment", value: 25, suffix: "%", desc: "Reduction in dropped baskets." }
    ],
    
    beforeAfter: {
      before: { label: "Legacy Storeflow", metric: "1.8%", sub: "Conversion Rate" },
      after: { label: "Optimized Flow", metric: "6.0%", sub: "Conversion Rate" }
    }
  },
  {
    slug: "healthcare-data-automation",
    title: "Healthcare Data Automation",
    industry: "Healthcare",
    service: "AI & Analytics",
    resultType: "Efficiency",
    shortProblem: "Manual data processing delays affecting patient care.",
    shortSolution: "Automated analytics pipeline and HIPAA-compliant data routing.",
    mainMetric: "40% Efficiency",
    subtitle: "Bridging the gap between departmental data silos to accelerate patient diagnosis and care.",
    tools: ["Snowflake", "dbt", "Power BI", "Azure Health"],
    impactSummary: "Automating the data pipeline not only saved thousands of manual hours but also eliminated critical data-entry errors, allowing medical staff to focus on patient care rather than administrative bottlenecks.",
    image: "/case-studies/healthcare-dashboard.png",
    tags: ["Automation", "Healthcare", "Compliance"],
    
    heroMetric: "40%",
    heroMetricLabel: "Operational Efficiency Improvement",
    problem: "A regional hospital network was suffering from severe data latency. Patient records from specialized departments were taking up to 48 hours to be integrated into the central EMR system, causing delays in diagnosis and resource allocation.",
    solution: "We built a real-time ETL (Extract, Transform, Load) pipeline that sanitized and mapped heterogeneous data formats into a unified HIPAA-compliant schema. This reduced the data sync window from 48 hours to less than 15 minutes.",
    
    process: [
      { step: 1, title: "Mapping", desc: "Mapping 50+ departmental data sources." },
      { step: 2, title: "Security", desc: "Implementing SOC2 and HIPAA guardrails." },
      { step: 3, title: "Pipeline Build", desc: "Architecting the real-time data flow." },
      { step: 4, title: "Integration", desc: "Connecting with the legacy EMR systems." },
      { step: 5, title: "Handoff", desc: "Training staff on the new automated alerts." }
    ],
    
    results: [
      { label: "Ops Efficiency", value: 40, suffix: "%", desc: "Overall throughput increase." },
      { label: "Error Rate", value: 92, suffix: "%", desc: "Reduction in manual data entry errors." },
      { label: "Data Latency", value: 98, suffix: "%", desc: "Reduction in sync time (48h to 15m)." }
    ],
    
    beforeAfter: {
      before: { label: "Manual Sync", metric: "48h", sub: "Data Lag" },
      after: { label: "Automated Sync", metric: "15m", sub: "Data Lag" }
    }
  }
];

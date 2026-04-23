import { BarChart, Lightbulb, Database, Code, TrendingUp, HandHeart, CheckCircle2, Workflow, DatabaseZap, SearchCode, MonitorSmartphone, ShieldCheck } from "lucide-react";

export const SERVICES_DATA = {
    "market-research": {
        id: "market-research",
        title: "Market Research & Analytics",
        icon: BarChart,
        description: "In-depth data analysis to provide actionable market insights and competitive intelligence.",
        headerImage: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        problem: "Organizations struggle to navigate rapidly changing markets due to fragmented data and a lack of clear competitive intelligence, leading to high-risk strategic decisions.",
        solution: "We deploy advanced analytical frameworks to synthesize raw market data into lucid, actionable intelligence, enabling you to preempt market shifts and capture new opportunities.",
        process: [
            { title: "Define Objectives", description: "Collaboratively outline the specific market questions and strategic goals." },
            { title: "Data Collection", description: "Gather qualitative and quantitative data from global, verified sources." },
            { title: "In-depth Analysis", description: "Apply predictive models and statistical analysis to uncover hidden trends." },
            { title: "Actionable Reporting", description: "Deliver comprehensive dashboards and strategic execution roadmaps." }
        ],
        tools: [
            { name: "Predictive Analytics", icon: TrendingUp },
            { name: "Data Visualization", icon: BarChart },
            { name: "Qualitative Research", icon: SearchCode },
            { name: "Competitor Tracking", icon: ShieldCheck }
        ],
        casePreview: {
            metric: "+45%",
            label: "Increase in Market Share identifying untouched regional segments.",
            company: "Global FMCG Enterprise"
        },
        benefits: [
            "Data-backed certainty for high-stakes decision making.",
            "Early identification of emerging market trends and threats.",
            "Granular understanding of competitor weaknesses.",
            "Optimized resource allocation based on predictive modeling."
        ],
        faqs: [
            { q: "How long does a typical market research engagement take?", a: "Engagements typically range from 4 to 8 weeks, depending on the breadth of the geographical and sector focus." },
            { q: "Do you use primary or secondary research?", a: "We utilize a hybrid approach, combining proprietary primary interviews with robust secondary data aggregation." },
            { q: "Can the data be integrated into our internal BI tools?", a: "Yes, our reports and raw data feeds are structured for seamless integration into Tableau, PowerBI, and custom dashboards." },
            { q: "How frequently is competitor data updated?", a: "For retained clients, we offer real-time tracking and quarterly deep-dive reports." }
        ]
    },
    "strategic-advisory": {
        id: "strategic-advisory",
        title: "Strategic Advisory",
        icon: Lightbulb,
        description: "Expert guidance for future-focused strategies and smarter, data-backed business decisions.",
        headerImage: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        problem: "Leadership teams often face strategic gridlock when scaling operations or entering new sectors, lacking objective methodologies to weigh high-stakes decisions.",
        solution: "Our advisory board partners with your C-suite, bringing decades of cross-industry experience to stress-test your vision and architect resilient, long-term roadmaps.",
        process: [
            { title: "Current State Assessment", description: "Deep-dive into organizational structures, financials, and market positioning." },
            { title: "Scenario Planning", description: "Map out multiple future trajectories and their associated risk profiles." },
            { title: "Strategy Formulation", description: "Develop a focused, step-by-step master plan." },
            { title: "Execution Governance", description: "Establish KPIs and milestones for successful implementation." }
        ],
        tools: [
            { name: "SWOT & PESTLE Modeling", icon: Lightbulb },
            { name: "Risk Management", icon: ShieldCheck },
            { name: "Process Optimization", icon: Workflow },
            { name: "Market Entry Frameworks", icon: TrendingUp }
        ],
        casePreview: {
            metric: "3x",
            label: "ROI achieved within 18 months of restructuring corporate governance.",
            company: "Leading Tech Conglomerate"
        },
        benefits: [
            "Objective, third-party validation of strategic initiatives.",
            "Clear alignment of operational capabilities with long-term vision.",
            "Mitigation of expansion risks through rigorous scenario planning.",
            "Enhanced agility in responding to macro-economic shifts."
        ],
        faqs: [
            { q: "Do you assist with actual execution, or just planning?", a: "We provide comprehensive governance frameworks and can embed advisory personnel to oversee critical execution phases." },
            { q: "What industries do you specialize in?", a: "Our advisory board holds deep expertise in Technology, Manufacturing, Healthcare, and Financial Services." },
            { q: "How do you ensure confidentiality?", a: "All engagements are protected by strict Non-Disclosure Agreements and siloed communication channels." }
        ]
    },
    "data-management": {
        id: "data-management",
        title: "Data Management & Reporting",
        icon: Database,
        description: "Comprehensive solutions for organizing, purifying, and presenting your most critical data.",
        headerImage: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        problem: "Enterprises are drowning in siloed, unstructured data. Inconsistent reporting leads to misaligned resources and delayed reaction times.",
        solution: "We build centralized, automated data ecosystems that clean, integrate, and visualize your core metrics in real-time, empowering agile decision-making.",
        process: [
            { title: "Data Architecture Audit", description: "Identify data silos, leaks, and structural inefficiencies." },
            { title: "ETL Pipeline Engineering", description: "Design fast, secure data extraction, transformation, and loading." },
            { title: "Warehouse Integration", description: "Centralize data into a unified, secure cloud environment." },
            { title: "Dynamic Dashboarding", description: "Deploy live, interactive BI reports for stakeholders." }
        ],
        tools: [
            { name: "Cloud Warehousing", icon: DatabaseZap },
            { name: "Automated ETL", icon: Workflow },
            { name: "Data Purifying", icon: CheckCircle2 },
            { name: "BI Dashboards", icon: BarChart }
        ],
        casePreview: {
            metric: "60%",
            label: "Reduction in reporting hours via automated data pipelines.",
            company: "Multinational Logistics Corp"
        },
        benefits: [
            "Single source of truth for all enterprise operations.",
            "Elimination of manual, error-prone spreadsheet reporting.",
            "Real-time visibility into KPIs across all departments.",
            "Secure, scalable architecture ready for AI integration."
        ],
        faqs: [
            { q: "Which cloud platforms do you support?", a: "We are cloud-agnostic, supporting AWS, Google Cloud, and Microsoft Azure data ecosystems." },
            { q: "How do you handle sensitive data compliance?", a: "All pipelines are engineered to comply with GDPR, HIPAA, and SOC2 standards from day one." },
            { q: "Will our team need to learn new tools?", a: "We design intuitive dashboards tailored to your team's existing technical fluency, minimizing onboarding time." }
        ]
    },
    "web-development": {
        id: "web-development",
        title: "Web Development & SEO",
        icon: Code,
        description: "Full-stack digital support to enhance your online presence and organic reach.",
        headerImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        problem: "Legacy websites suffer from slow performance, poor mobile optimization, and low search visibility, directly damaging brand equity and lead generation.",
        solution: "We engineer high-performance, modern web architectures coupled with aggressive SEO strategies to dominate search rankings and convert traffic effortlessly.",
        process: [
            { title: "UX/UI Design & Prototyping", description: "Create wireframes focusing on conversion rate optimization." },
            { title: "Full-Stack Development", description: "Build scalable, secure applications using modern frameworks." },
            { title: "SEO Optimization", description: "Implement structural, technical, and content SEO." },
            { title: "Deployment & Monitoring", description: "Ensure continuous uptime and performance tracking." }
        ],
        tools: [
            { name: "Modern React/Next.js", icon: MonitorSmartphone },
            { name: "Technical SEO Analytics", icon: SearchCode },
            { name: "Headless CMS Architecture", icon: Database },
            { name: "Performance Optimization", icon: TrendingUp }
        ],
        casePreview: {
            metric: "210%",
            label: "Increase in organic traffic within the first 6 months post-launch.",
            company: "Innovative SaaS Startup"
        },
        benefits: [
            "Lightning-fast page loads that reduce bounce rates.",
            "Pixel-perfect responsive design across all devices.",
            "Higher organic visibility on Google and Bing search.",
            "Scalable codebase ready for future feature expansions."
        ],
        faqs: [
            { q: "Do you use templates?", a: "No, every web platform we build is a fully custom software engineering project tailored exactly to your brand." },
            { q: "How long does SEO take to show results?", a: "While technical SEO fixes show immediate indexing improvements, aggressive organic growth typically compounds over 3 to 6 months." },
            { q: "Can we manage the content ourselves?", a: "Absolutely. We integrate powerful Headless CMS solutions allowing your marketing team to edit content seamlessly." }
        ]
    },
    "industry-intelligence": {
        id: "industry-intelligence",
        title: "Industry Intelligence",
        icon: TrendingUp,
        description: "Tailored reports and sector-specific intelligence for high-stakes decision makers.",
        headerImage: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        problem: "Generalist market overviews fail to provide the granular, sector-specific intelligence needed for highly specialized B2B industries.",
        solution: "We provide bespoke, deep-dive intelligence reports that map macro-economic shifts, regulatory changes, and niche market dynamics tailored specifically to your sector.",
        process: [
            { title: "Scope Mapping", description: "Determine the exact parameters and niche sectors of interest." },
            { title: "Primary Research", description: "Conduct expert interviews and B2B surveys." },
            { title: "Macro & Micro Synthesis", description: "Correlate global trends with local market realities." },
            { title: "Executive Briefing", description: "Deliver high-impact presentations to stakeholders." }
        ],
        tools: [
            { name: "Sector Forecasting", icon: TrendingUp },
            { name: "Regulatory Tracking", icon: ShieldCheck },
            { name: "Supply Chain Analysis", icon: Workflow },
            { name: "Competitor Benchmarking", icon: BarChart }
        ],
        casePreview: {
            metric: "$12M",
            label: "Revenue protected by anticipating massive regulatory shifts.",
            company: "Global Energy Provider"
        },
        benefits: [
            "Access to exclusive, non-public intelligence sources.",
            "Preemptive knowledge of regulatory changes.",
            "Deep understanding of supply chain vulnerabilities.",
            "Clear mapping of competitor M&A strategies."
        ],
        faqs: [
            { q: "Is the data sourced legally?", a: "Yes, all our intelligence is gathered through rigorous, ethical, and fully compliant Primary and Secondary research methodologies." },
            { q: "Can we request a one-off report?", a: "Yes, we offer both one-off, deep-dive dossiers and ongoing intelligence retainer packages." },
            { q: "How specialized can you get?", a: "Extremely. From precision agriculture technology software to subsea cabling logistics, our analysts can dive into the narrowest of niches." }
        ]
    },
    "marketing-ops": {
        id: "marketing-ops",
        title: "Marketing & Ops Support",
        icon: HandHeart,
        description: "Streamlining processes for efficient business operations while enhancing brand visibility.",
        headerImage: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        problem: "Marketing teams often operate in a vacuum divorced from core operations, resulting in disjointed campaigns and inefficient budget allocation.",
        solution: "We fuse marketing strategies with operational frameworks, ensuring that promotional activities run like clockwork and yield high-fidelity, trackable leads.",
        process: [
            { title: "Operational Audit", description: "Review current marketing systems, tech stacks, and workflows." },
            { title: "Campaign Architecture", description: "Design omnichannel strategies supported by robust ops." },
            { title: "Automation Integration", description: "Deploy marketing automation and CRM setups." },
            { title: "Continuous Optimization", description: "A/B test and refine based on real operational throughput." }
        ],
        tools: [
            { name: "CRM Setup & Tuning", icon: Database },
            { name: "Marketing Automation", icon: Workflow },
            { name: "Omnichannel Strategies", icon: Lightbulb },
            { name: "Lead Attribution Modeling", icon: BarChart }
        ],
        casePreview: {
            metric: "40%",
            label: "Reduction in Customer Acquisition Cost (CAC) through ops streamlining.",
            company: "B2B Tech Services Firm"
        },
        benefits: [
            "Seamless alignment between sales operations and marketing generation.",
            "Massive reduction in wasted ad spend through granular attribution.",
            "Automated lead nurturing sequences that run 24/7.",
            "Scalable campaign architectures that grow with your company."
        ],
        faqs: [
            { q: "Which CRM platforms do you work with?", a: "We primarily optimize Hubspot, Salesforce, and Zoho, but our strategic frameworks apply universally." },
            { q: "Do you run the ads or just optimize the operations?", a: "We handle the full stack. We optimize the foundational operations and execute the high-growth campaigns layered on top of them." },
            { q: "How do you measure success?", a: "We look strictly at Customer Acquisition Cost (CAC), Pipeline Velocity, and ultimate Return on Ad Spend (ROAS)." }
        ]
    }
};

export function getServiceData(id) {
    return SERVICES_DATA[id] || null;
}

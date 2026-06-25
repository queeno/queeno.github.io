const commonEducation = [
  {
    degree: "Master of Engineering (MEng) Hons in Computer Science and Electronics",
    institution: "University of Bristol",
    location: "Bristol, UK",
    year: "2012"
  }
];

const commonCertificates = [
  { issuer: "Google Cloud Platform (GCP)", name: "Professional Cloud Architect (PCA)", year: "2025" },
  { issuer: "Google Cloud Platform (GCP)", name: "Generative AI Leader", year: "2025" },
  { issuer: "Scrum Alliance", name: "Certified ScrumMaster (CSM)", year: "2015" },
  { issuer: "UK Government", name: "UK Security Clearance (SC) [Previous]", year: "2014" },
  { issuer: "Red Hat", name: "Red Hat Certified System Administrator (RHCSA)", year: "2014" },
  { issuer: "VMware", name: "Certified Advanced Professional 5 - Data Centre Admin (VCAP5-DCA)", year: "2013" },
  { issuer: "VMware", name: "Certified Professional 5 - Data Centre Virtualisation (VCP5-DV)", year: "2013" },
  { issuer: "Google", name: "Python Readability (Internal Code Quality Award)", year: "2011" }
];
const commonLanguages = [
  { language: "English", proficiency: "C2 - Native / Bilingual Proficiency" },
  { language: "Italian", proficiency: "C2 - Native / Bilingual Proficiency" },
  { language: "German", proficiency: "B2 - Professional Working Proficiency" },
  { language: "Danish", proficiency: "A2 - Elementary Proficiency" }
];

export const cv_en = {
  personalInfo: {
    name: "Simon Aquino",
    roles: [
      "Engineering Leader",
      "Cloud-Native Platform Architect",
      "Forward Deployed Engineer"
    ],
    location: "London, United Kingdom",
    email: "hello@simonaquino.com",
    mobile: "+44 (0) 7514 902 489",
    github: "queeno",
    linkedin: "simonaquino",
    instagram: "om.lidt",
    image: "/simon.webp"
  },
  summary: `I am an engineering leader with 16+ years across financial services, government, and high-growth technology. I build and lead engineering teams, own delivery against regulated timelines, and stay close enough to the technology to lead engineers with authority and make sound architectural calls. I work at the point where people leadership, delivery ownership, and deep technical capability meet — equally at home running a team and its budget, or in the stack solving the hard problem myself. I am currently building and leading a greenfield regulated data platform, backed by deep cloud-native experience across GCP, AWS, and Azure (Kubernetes, Internal Developer Platforms, IaC) and secure, compliance-driven delivery.`,
  technicalStrengths: [
    {
      title: "Team Leadership & Org Design",
      description: "Builds and leads engineering teams through the full lifecycle — hiring, onboarding, performance, 1:1 coaching, and career development — and won the organisational case to restructure a team for scale, with the new structure permanently adopted."
    },
    {
      title: "Delivery & Ownership",
      description: "Owns budget, scope, and delivery for regulated greenfield programmes, accountable to client and executive stakeholders for outcomes against audit and regulatory deadlines."
    },
    {
      title: "Platform & Technical Depth",
      description: "Hands-on across GCP, AWS, and Azure (Kubernetes, Internal Developer Platforms, IaC, Go/Python), with the credibility to make and defend architectural and build/buy decisions."
    },
    {
      title: "Stakeholder & Strategy",
      description: "Translates between commercial goals and engineering execution, advising senior and C-suite stakeholders to shape roadmaps and turn technical direction into business outcomes."
    }
  ],
  experience: [
    {
      title: "Engineering Manager, Data Engineering",
      company: "Haleon / Core Engineering Consulting Group",
      location: "London, UK",
      period: "Mar. 2026 - Present",
      points: [
        { bold: "Team Building & Leadership", text: "Founded and lead a team of 6 engineers from zero — owning hiring, onboarding, performance, 1:1 coaching, and career development — building a high-trust culture." },
        { bold: "Budget & Delivery Ownership", text: "Own the engagement end to end (budget, scope, and roadmap), running an iterative release strategy that ships production-grade pipelines against SOX audit and regulatory deadlines." },
        { bold: "Technical Architecture", text: "Architected a Medallion (Bronze/Silver/Gold) data platform on Azure (AKS, ADLS Gen2, PostgreSQL) with Dagster/Python pipelines, delivered as code via Terraform Cloud, Helm, and GitHub Actions." },
        { bold: "Compliance & AI-Assisted Delivery", text: "Built automated SOX controls (PA-02/AM-02) with verifiable lineage from report to raw source, and introduced AI-assisted development and code review to lift team throughput." }
      ]
    },
    {
      title: "Principal Platform Consultant",
      company: "Barclays / Red Badger",
      location: "London, UK",
      period: "Oct. 2025 - Mar. 2026",
      points: [
        { bold: "Greenfield IDP Architecture", text: "Architected and engineered the Payments division's new Internal Developer Platform on AWS/EKS (Go, Terraform, Crossplane, Flux), built for high-throughput, low-latency payment rails." },
        { bold: "Golden Path & Governance", text: "Acted as Technical Authority, designing \"Golden Path\" patterns and automated compliance frameworks that turned legacy constraints into a secure, self-service ecosystem." },
        { bold: "Team Enablement", text: "Transformed legacy software units into Platform Engineers through hands-on pair programming and mentoring, upskilling internal Tech Leads on Cloud-Native best practices." }
      ]
    },
    {
      title: "Principal Consultant, GitHub Migration",
      company: "Haleon / Core Engineering Consulting Group",
      location: "London, UK",
      period: "Apr. 2025 - Sep. 2025",
      points: [
        { bold: "Migration Delivery", text: "Led the technical delivery of an enterprise source-control and CI/CD migration, moving the SAP ERP platform team from Azure DevOps to GitHub with minimal disruption." },
        { bold: "Stakeholder Interface", text: "Coordinated delivery and acted as the interface to Haleon stakeholders, following a competitive tender won by CECG." }
      ]
    },
    {
      title: "Engineering Manager, Cloud Enablement",
      company: "JPMorgan Chase / Core Engineering Consulting Group",
      location: "London, UK",
      period: "Apr. 2023 - Mar. 2025",
      points: [
        { bold: "Team Leadership & Growth", text: "Line-managed and grew the Cloud Enablement team to 13 engineers over two years, owning hiring, onboarding, performance, 1:1 coaching, and career development." },
        { bold: "Organisational Design", text: "Built and won the business case to the Engineering Director to restructure the team for scale, with the new structure permanently adopted into the firm's org chart." },
        { bold: "Enterprise-Scale Architecture", text: "As the most senior technical lead, set direction for the firm-wide GCP foundation and Kubernetes ecosystem (100+ clusters) with NIST/ISO-aligned control frameworks." },
        { bold: "Golden Path & DevEx", text: "Pioneered Crossplane and GitOps (ArgoCD) with observability (Prometheus/Grafana), improving reliability and Developer Experience for thousands of internal developers." }
      ]
    },
    {
      title: "Infrastructure DevOps Lead - AWS",
      company: "Deloitte",
      location: "Copenhagen, Denmark",
      period: "Mar. 2021 - Mar. 2023",
      points: [
        { bold: "Critical Infrastructure", text: "Orchestrated cloud infrastructure for Denmark's national Property Tax Platform (Vurderingsportalen), coordinating across 3 satellite teams to drive delivery autonomy." },
        { bold: "Cost Optimization", text: "Executed an infrastructure consolidation strategy that reduced monthly cloud operational costs by ~70%." },
        { bold: "Security Modernization", text: "Re-architected the authentication layer, replacing custom NGINX solutions with managed AWS API Gateway." }
      ]
    },
    {
      title: "Principal Consultant - Azure",
      company: "Microsoft",
      location: "London, UK",
      period: "Nov. 2020 - Mar. 2021",
      points: [
        { bold: "Architectural Recovery", text: "Led the architectural recovery of a critical trading platform migration for the London Stock Exchange Group (Refinitiv)." },
        { bold: "Throughput Optimization", text: "Resolved throughput blockers by optimising architecture for AKS (Kubernetes) and EventHubs, condensing delivery from years to months." }
      ]
    },
    {
      title: "Lead Platform Engineer - GCP",
      company: "Loveholidays",
      location: "London, UK",
      period: "Mar. 2020 - Oct. 2020",
      points: [
        { bold: "Performance Engineering", text: "Achieved a ~30% performance increase in search response times by profiling Go and Java microservices." },
        { bold: "Custom Tooling", text: "Designed a custom Go library for real-time database synchronisation via Google Cloud Storage." }
      ]
    },
    {
      title: "Lead DevOps Engineer - GCP",
      company: "eBay",
      location: "Berlin, Germany",
      period: "Jun. 2019 - Mar. 2020",
      points: [
        { bold: "Migration Strategy", text: "Orchestrated the strategic migration of the Classifieds vertical to GCP." },
        { bold: "Standardization", text: "Architected standardised GKE workflows and deployment patterns for distributed teams." }
      ]
    },
    {
      title: "Senior DevOps Engineer / Consultant",
      company: "Previous Engagements",
      location: "Europe",
      period: "2012 - 2019",
      points: [
        { bold: "Deloitte UK (2018-2019)", text: "Lead DevOps Engineer for Danish Tax Authority digital transformation. Reduced environment deployment from weeks to hours." },
        { bold: "Element (2017-2018)", text: "Founding DevOps Engineer for InsureTech startup. Built greenfield AWS/Kubernetes foundation." },
        { bold: "HMRC (2016-2017)", text: "Senior DevOps Consultant engineering multi-active platform (AWS/On-Prem) for zero-downtime availability." },
        { bold: "KPMG UK (2015-2016)", text: "Architected multi-tenant AWS foundation for Big Data (Hadoop) processing." },
        { bold: "WTG (2015)", text: "Delivered secure automated monitoring infrastructure for UK Home Office ahead of schedule." },
        { bold: "Gov.UK (2014-2015)", text: "WebOps Engineer for Gov.UK Verify digital identity gateway." },
        { bold: "DigitasLBi (2012-2014)", text: "Managed hardware lifecycle and VMware vSphere Private Cloud." }
      ]
    }
  ],
  skills: {
    "Leadership & Strategy": [
      "Engineering Strategy", "Team Building & Scaling", "Tech Recruitment", "Performance Management", "Org Design", "Executive Stakeholder Management", "FinOps", "Vendor Strategy"
    ],
    "Cloud & Platform": [
      "GCP (Pro Architect)", "AWS", "Azure", "Kubernetes (EKS/GKE)", "Internal Developer Platforms (IDP)", "Crossplane", "Terraform", "ArgoCD", "Flux", "Helm", "Istio"
    ],
    "Architecture & Dev": [
      "Go", "Python", "Java Spring Boot", "Event-Driven Architecture", "Domain-Driven Design (DDD)", "Microservices", "gRPC/REST", "Distributed Systems"
    ],
    "Ops, Security & Data": [
      "SRE", "DevSecOps", "Zero Trust", "IAM & Identity Governance", "SOX / ISO 27001 / NIST", "Data Pipelines (ETL/Medallion)", "Dagster", "PostgreSQL", "Observability (Prometheus/Grafana/Datadog)"
    ]
  },
  education: commonEducation,
  certificates: commonCertificates,
  languages: commonLanguages
};

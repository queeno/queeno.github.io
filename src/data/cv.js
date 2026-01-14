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
      "Principal Platform Lead",
      "Engineering Manager",
      "AI-Native Cloud Architect"
    ],
    location: "London, United Kingdom",
    email: "hello@simonaquino.com",
    mobile: "+44 (0) 7514 902 489",
    github: "queeno",
    linkedin: "simonaquino",
    instagram: "om.lidt",
    image: "/simon.png"
  },
  summary: `I am a hands-on Engineering Leader with 15+ years of experience building and scaling high-performance teams in data-intensive environments. Combining deep architectural expertise in Cloud-Native systems (GCP/AWS, Kubernetes) with a track record of growing engineering units from seed to enterprise scale, I specialise in transitioning teams from 'startup chaos' to maturity. Operating as a 'builder-leader', I thrive on solving complex challenges—from regulatory compliance to distributed orchestration—to deliver speed without sacrificing security.`,
  technicalStrengths: [
    {
      title: "Organisational Growth",
      description: "Extensive experience defining hiring strategies and scaling engineering organisations (from 3 to 50+), managing the full employee lifecycle to build high-trust, autonomous teams."
    },
    {
      title: "Technical Strategy",
      description: "Expert in bridging the gap between business goals and technical execution, designing scalable, event-driven architectures (Kubernetes, Go) and \"Golden Path\" platforms that transform Developer Experience (DevEx) and product velocity."
    },
    {
      title: "Operational Excellence",
      description: "Dedicated to raising the bar on engineering standards, embedding security/compliance (GDPR, ISO, SOX, NIST), and driving continuous improvement in CI/CD, observability, and system resilience."
    },
    {
      title: "Stakeholder Management",
      description: "Skilled in navigating complex multi-stakeholder environments, translating architectural needs into commercial value, and managing multi-million pound budgets to align technical roadmaps with company strategy."
    }
  ],
  experience: [
    {
      title: "Principal Platform Consultant",
      company: "Barclays",
      location: "London, UK",
      period: "Oct. 2025 - Present",
      points: [
        { bold: "Technical Authority", text: "Serving as the Principal Technical Authority for a high-profile greenfield initiative within the Barclays Payments Incubator." },
        { bold: "IDP Architecture", text: "Architecting and engineering the division's new Internal Developer Platform (IDP) on AWS/EKS using Go, Terraform, Crossplane, and Flux." },
        { bold: "Embedded Transformation", text: "Leading technical transformation by operating as a \"Player-Coach\", upskilling internal Tech Leads on platform strategy and Cloud-Native best practices." }
      ]
    },
    {
      title: "Engineering Manager, Accelerator Platform",
      company: "JPMorgan Chase / Core Engineering Consulting Group",
      location: "London, UK",
      period: "Apr. 2023 - Sep. 2025",
      points: [
        { bold: "Scaling High-Performance Teams", text: "Scaled the Cloud Enablement unit from 3 to 50+ engineers, owning the full employee lifecycle (hiring, performance management, retention) to build a diverse, high-trust engineering culture focused on delivery excellence." },
        { bold: "Enterprise-Scale Infrastructure", text: "Architected the firm-wide GCP foundation and Kubernetes ecosystem (100+ clusters), creating repeatable blueprints and automated control implementations (aligned to NIST) to enable the secure delivery of mission-critical, data-intensive workloads." },
        { bold: "Strategic Alignment", text: "Partnered with C-suite executives to align technical roadmaps with business goals, translating architectural decisions into commercial value and managing a multi-million pound vendor budget." },
        { bold: "Operational Excellence", text: "Championed a Platform-as-a-Product mindset, introducing Crossplane and GitOps to significantly improve Developer Experience (DevEx), system observability (Prometheus/Grafana), and platform reliability." }
      ]
    },
    {
      title: "Infrastructure DevOps Lead - AWS",
      company: "Deloitte",
      location: "Copenhagen, Denmark",
      period: "Mar. 2021 - Mar. 2023",
      points: [
        { bold: "Critical Infrastructure", text: "Orchestrated cloud infrastructure for Denmark's national Property Tax Platform (Vurderingsportalen)." },
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
      "Engineering Strategy", "Team Scaling (3-50+)", "Executive Stakeholder Management", "FinOps", "Tech Recruitment", "Remote Leadership", "Vendor Strategy"
    ],
    "Cloud & Platform": [
      "GCP (Pro Architect)", "AWS", "Azure", "Kubernetes (EKS/GKE)", "Internal Developer Platforms (IDP)", "Crossplane", "Terraform", "ArgoCD", "Flux", "Istio"
    ],
    "Architecture & Dev": [
      "Event-Driven Architecture", "Domain-Driven Design (DDD)", "Microservices", "Go", "Python", "Java Spring Boot", "gRPC/REST", "High-Frequency Systems"
    ],
    "Ops, Security & Data": [
      "DevSecOps", "Zero Trust", "ISO 27001/NIST", "Observability (Prometheus/Grafana/Datadog)", "AI/ML Infrastructure Readiness"
    ]
  },
  education: commonEducation,
  certificates: commonCertificates,
  languages: commonLanguages
};

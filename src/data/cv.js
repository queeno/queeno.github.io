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

export const cvProfiles = {
  em: {
    personalInfo: {
      name: "Simon Aquino",
      roles: [
        "Engineering Manager",
        "Head of Platform",
        "Cloud-Native Architect"
      ],
      location: "London, United Kingdom (open to relocation)",
      email: "simon.aquino@gmail.com",
      mobile: "+44 (0) 7514 902 489",
      github: "queeno",
      linkedin: "simonaquino",
      image: "/simon.png"
    },
    summary: `Hands-on Engineering Leader with 15+ years of experience building and scaling high-performance teams in AI-driven and data-intensive environments. Combines deep architectural expertise in Cloud-Native systems (GCP/AWS, Kubernetes) and secure, event-driven architectures with a proven track record of growing engineering units from seed to enterprise scale. A "builder-leader" who thrives on solving complex technical challenges—from regulatory compliance to distributed orchestration—while fostering cultures of ownership and engineering excellence.`,
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
        description: "Skilled in navigating complex multi-stakeholder environments, translating architectural needs into commercial value, and managing multi-million pound budgets."
      }
    ],
    experience: [
      {
        title: "Principal Platform Consultant (Contract)",
        company: "Barclays (Payments Incubator)",
        location: "London, UK",
        period: "Oct. 2025 - Present",
        points: [
          { bold: "Greenfield Strategy", text: "Architecting the Internal Developer Platform (IDP) for the Payments division, leveraging AWS and Kubernetes to modernise DevEx and critical processing rails for high-throughput payments." },
          { bold: "Organisational Transformation", text: "Leading the technical transformation of a software unit into Cloud-Native Platform Engineers, accelerating adoption through hands-on pair programming and coaching the internal Tech Lead on platform strategy and team enablement." },
          { bold: "Strategic Governance", text: "Acting as the Technical Authority for the incubator, defining 'Golden Path' architecture patterns and automated compliance frameworks to transition legacy systems into a secure, self-service ecosystem." }
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
          { bold: "Multi-Vendor Leadership", text: "Led the cloud infrastructure stream for Denmark's critical Property Tax Platform, orchestrating 3 satellite teams to drive delivery autonomy and resolve cross-functional architectural blockers." },
          { bold: "Strategic Cost Optimisation", text: "Executed a high-impact infrastructure consolidation strategy, simplifying legacy complexity to reduce monthly cloud operational costs without compromising system performance." },
          { bold: "Modernisation & Security", text: "Eliminated high-risk technical debt by replacing brittle custom authentication with managed AWS API Gateway, establishing a standardised, secure pattern for external integrations." }
        ]
      },
      {
        title: "Principal Consultant - Azure",
        company: "Microsoft",
        location: "London, UK",
        period: "Nov. 2020 - Mar. 2021",
        points: [
          { bold: "High-Frequency Trading Acceleration", text: "Rescued a stalled on-prem to Azure migration for a major trading platform, optimising AKS and EventHubs architectures to handle massive throughput and condense the delivery timeline from years to months." },
          { bold: "Strategic Enablement", text: "Delivered the first fully automated development environment, acting as the technical bridge between client business units and Microsoft Product Engineering." }
        ]
      },
      {
        title: "Lead Platform Engineer - GCP",
        company: "Loveholidays",
        location: "London, UK",
        period: "Mar. 2020 - Oct. 2020",
        points: [
          { bold: "Performance Engineering", text: "Diagnosed and resolved critical latency bottlenecks in the core search engine, profiling Go/Java microservices to optimise Kubernetes autoscaling and achieve a 30% performance increase." },
          { bold: "Event-Driven Architecture", text: "Designed and developed a custom Go library for real-time database synchronisation via GCS, reducing data propagation latency from minutes to seconds to improve customer search accuracy." }
        ]
      },
      {
        title: "Lead DevOps Engineer - GCP",
        company: "eBay",
        location: "Berlin, Germany",
        period: "Jun. 2019 - Mar. 2020",
        points: [
          { bold: "Global Cloud Transformation", text: "Orchestrated the strategic migration of eBay’s Classifieds vertical to Google Cloud (GCP), architecting standardised GKE workflows to enable rapid deployment for distributed engineering teams across Europe." }
        ]
      },
      {
        title: "Senior DevOps Engineer / Consultant",
        company: "Previous Engagements (Select Highlights)",
        location: "Europe",
        period: "2010 - 2019",
        points: [
          { bold: "Deloitte (Copenhagen)", text: "Architected immutable AWS infrastructure for critical Danish Tax systems, introducing IaC to reduce deployment frequency from weeks to hours." },
          { bold: "Element Insurance (Berlin)", text: "Built the greenfield AWS/Kubernetes foundation for a high-growth FinTech startup, serving as Interim Team Lead to scale early engineering capability." },
          { bold: "HMRC (London)", text: "Core WebOps Engineer for the UK's hyper-scale digital tax platform; contributed to open-source tooling to ensure multi-cloud resilience during peak filing windows." },
          { bold: "Google (London/Dublin)", text: "Developed Python/App Engine automation tools to optimise internal engineering workflows, awarded multiple peer bonuses for code quality and innovation." }
        ]
      }
    ],
    skills: {
      "Leadership & Strategy": [
        "Engineering Strategy", "Tech Recruitment", "Team Scaling (3-50+)", "Remote/Distributed Leadership",
        "Performance Management", "Executive Stakeholder Management", "Vendor Strategy", "Budgeting", "FinOps"
      ],
      "Cloud & Platform": [
        "GCP (Pro Architect)", "AWS", "Azure", "Kubernetes (K8s)", "Internal Developer Platforms (IDP)",
        "Developer Experience (DevEx)", "Platform-as-a-Product", "Terraform/Hashicorp", "Crossplane", "ArgoCD", "Flux", "Helm", "Istio"
      ],
      "Architecture & Dev": [
        "Go", "Python", "Ruby", "Bash", "C", "Java Spring Boot", "Event-Driven Architecture",
        "Distributed Systems", "Microservices", "API Design (gRPC/REST)", "Domain-Driven Design (DDD)"
      ],
      "Ops, Security & Data": [
        "Prometheus", "Grafana", "Datadog", "DevSecOps", "Zero Trust", "ISO27001/SOC2 Controls",
        "AI/ML Infrastructure Readiness", "SRE Practices"
      ]
    },
    education: commonEducation,
    certificates: commonCertificates
  },
  ic: {
    personalInfo: {
      name: "Simon Aquino",
      roles: [
        "Forward Deployed Engineer",
        "Principal Platform Engineer",
        "AI-Native Cloud Architect"
      ],
      location: "London, United Kingdom (open to relocation)",
      email: "simon.aquino@gmail.com",
      mobile: "+44 (0) 7514 902 489",
      github: "queeno",
      linkedin: "simonaquino",
      image: "/simon.png"
    },
    summary: `Forward Deployed Engineer with 15+ years of experience architecting and engineering hyper-scale distributed systems. I operate at the intersection of technical strategy and hands-on execution, embedding directly with client teams to deliver mission-critical infrastructure while simultaneously elevating their engineering capabilities. I specialise in translating business objectives into robust "Golden Path" Internal Developer Platforms, leveraging AWS/Azure/GCP to ensure delivery impact while cultivating team autonomy through mentorship and technical leadership.`,
    technicalStrengths: [
      {
        title: "Strategic Technical Delivery",
        description: "I bridge the gap between architectural vision and production reality. I partner with leadership to define technical roadmaps and then lead the hands-on implementation, delivering firm-wide infrastructure (e.g., global Kubernetes fleets managed via GitHub and Helm) that directly enables business goals."
      },
      {
        title: "Advanced Cloud Native Engineering",
        description: "Deep expertise in orchestrating massive container ecosystems. I extend Kubernetes primitives using custom controllers and Operators (Go/Python) effectively solving complex multi-tenant and cross-cloud challenges."
      },
      {
        title: "Embedded Enablement & Leadership",
        description: "I drive culture change by working alongside engineers. I assume a \"playing coach\" role—pairing, mentoring, and upskilling teams on complex CI/CD pipelines and modern stacks to instil engineering rigour and ensure system evolution."
      },
      {
        title: "SRE & Operational Resilience",
        description: "I engineer reliability into the core platform. I champion a Site Reliability Engineering culture, implementing observability, error budgeting, and self-healing mechanisms to guarantee high availability and system resilience under scale."
      }
    ],
    experience: [
      {
        title: "Principal Platform Consultant (Contract)",
        company: "Barclays (Payments Incubator)",
        location: "London, UK",
        period: "Oct. 2025 - Present",
        points: [
          { bold: "Greenfield IDP Engineering", text: "Architected and built a high-performance Internal Developer Platform (IDP) on AWS and Kubernetes (EKS). Managed configuration via Helm and GitHub, developing \"Golden Path\" templates in Go/Python that abstract complexity and optimise DevEx." },
          { bold: "Embedded Workforce Transformation", text: "Operating as a technical \"player-coach\" within legacy software teams. I drive Cloud-Native adoption through daily pair programming, upskilling engineers on CI/CD pipelines and SRE best practices to ensure long-term autonomy." },
          { bold: "High-Stakes Execution", text: "Technical Authority for critical payment rails. Delivering a secure, self-service ecosystem that balances strict financial governance with the agility required for high-throughput data integrations and future GenAI workloads." }
        ]
      },
      {
        title: "Engineering Manager, Platform Lead (Consultant)",
        company: "JPMorgan Chase / Core Engineering Consulting Group",
        location: "London, UK",
        period: "Apr. 2023 - Sep. 2025",
        points: [
          { bold: "Embedded Scaling & Enablement", text: "Embedded within the Cloud Enablement team to drive technical scaling from 3 to 50+ engineers. I paired daily with the workforce to establish a \"You Build It, You Run It\" culture, upskilling teams on SRE best practices and modern cloud-native tech." },
          { bold: "Hyper-Scale Kubernetes Architecture", text: "Architected and engineered the firm-wide GCP foundation and Kubernetes ecosystem (100+ clusters). Delivered AI-ready blueprints integrating Vertex AI and data pipelines, enabling secure transition to data-intensive GenAI workloads." },
          { bold: "Golden Path Engineering", text: "Engineered a \"Golden Path\" strategy that abstracted infrastructure complexity using Crossplane and GitOps. Drastically reduced cognitive load and improved DevEx and system observability (Prometheus/Grafana) for thousands of internal developers." },
          { bold: "Strategic Technical Execution", text: "Acted as a bridge between business goals and engineering execution. Translated high-level objectives into executable technical roadmaps and managed the hands-on delivery of complex distributed systems." }
        ]
      },
      {
        title: "Infrastructure DevOps Lead (Contract)",
        company: "Deloitte",
        location: "Copenhagen, Denmark",
        period: "Mar. 2021 - Mar. 2023",
        points: [
          { bold: "Hands-on Embedded Leadership", text: "Embedded as the technical lead for Denmark's critical Property Tax Platform. I actively coded alongside cross-functional engineers, breaking down architectural silos and upskilling the team to own the solution independently." },
          { bold: "Infrastructure Modernisation", text: "Parachuted in to audit and execute a ruthlessly efficient consolidation strategy for a sprawling infrastructure estate. Simplified legacy complexity and slashed monthly cloud operational costs on AWS while boosting system performance." },
          { bold: "API Gateway Re-Engineering", text: "Eradicated high-risk technical debt by replacing brittle custom authentication with managed AWS API Gateway." }
        ]
      },
      {
        title: "Principal Consultant - Azure",
        company: "Microsoft",
        location: "London, UK",
        period: "Nov. 2020 - Mar. 2021",
        points: [
          { bold: "High-Frequency Trading Acceleration", text: "Rescued a stalled on-prem to Azure migration for a major trading platform. Optimised AKS and EventHubs architectures to handle massive throughput, condensing the delivery timeline from years to months." },
          { bold: "Strategic Enablement", text: "Delivered the first fully automated development environment, acting as the technical bridge between client business units and Microsoft Product Engineering to unblock critical delivery paths." }
        ]
      },
      {
        title: "Lead Platform Engineer - GCP",
        company: "Loveholidays",
        location: "London, UK",
        period: "Mar. 2020 - Oct. 2020",
        points: [
          { bold: "Performance Engineering", text: "Diagnosed and resolved critical latency bottlenecks in the core search engine. Profiled Go/Java microservices to optimise Kubernetes autoscaling, achieving a 30% performance increase." },
          { bold: "Event-Driven Architecture", text: "Designed and developed a custom Go library for real-time database synchronisation via GCS, reducing data propagation latency from minutes to seconds to improve customer search accuracy." }
        ]
      },
      {
        title: "Lead DevOps Engineer - GCP",
        company: "eBay",
        location: "Berlin, Germany",
        period: "Jun. 2019 - Mar. 2020",
        points: [
          { bold: "Global Cloud Transformation", text: "Orchestrated the strategic migration of eBay’s Classifieds vertical to Google Cloud (GCP). Architected standardised GKE workflows to enable rapid deployment for distributed engineering teams across Europe." }
        ]
      },
      {
        title: "Senior DevOps Engineer / Consultant",
        company: "Previous Engagements (Select Highlights)",
        location: "Europe",
        period: "2010 - 2019",
        points: [
          { bold: "Deloitte (Copenhagen)", text: "Architected immutable AWS infrastructure for critical Danish Tax systems, introducing Terraform (IaC) to reduce deployment frequency from weeks to hours." },
          { bold: "Element Insurance (Berlin)", text: "Built the greenfield AWS/Kubernetes foundation for a high-growth FinTech startup, serving as Interim Team Lead to scale early engineering capability." },
          { bold: "HMRC (London)", text: "Core WebOps Engineer for the UK's hyper-scale digital tax platform; contributed to open-source tooling to ensure multi-cloud resilience during peak filing windows." },
          { bold: "Google (London/Dublin)", text: "Developed Python/App Engine automation tools to optimise internal engineering workflows, awarded multiple peer bonuses for code quality and innovation." }
        ]
      }
    ],
    skills: {
      "Cloud Native Ecosystem": [
        "Kubernetes (Expert)", "AWS", "GCP", "Azure", "Helm", "Terraform", "Crossplane", "GitOps (ArgoCD/Flux)", "Istio", "Internal Developer Platforms (IDP)"
      ],
      "Languages & Engineering": [
        "Go", "Python", "Java/Spring Boot", "Bash", "Distributed Systems Design", "Event-Driven Architecture", "Microservices", "API Design (gRPC/REST)"
      ],
      "SRE, DevOps & Security": [
        "GitHub Actions", "CI/CD Pipelines", "Prometheus", "Grafana", "Datadog", "Site Reliability Engineering (SRE)", "DevSecOps", "Zero Trust", "Chaos Engineering"
      ],
      "Technical Leadership": [
        "Technical Strategy", "Pair Programming", "Workforce Upskilling", "Developer Experience (DevEx)", "Team Scaling", "Stakeholder Management", "\"Golden Path\" Architecture", "FinOps"
      ]
    },
    education: commonEducation,
    certificates: commonCertificates
  }
};

export const cv_it = {
  personalInfo: {
    name: "Simon Aquino",
    roles: [
      "Engineering Leader",
      "Architetto di Piattaforme Cloud-Native",
      "Forward Deployed Engineer"
    ],
    location: "Londra, Regno Unito",
    email: "hello@simonaquino.com",
    mobile: "+44 (0) 7514 902 489",
    github: "queeno",
    linkedin: "simonaquino",
    instagram: "om.lidt",
    image: "/simon.webp"
  },
  summary: `Sono un engineering leader con oltre 16 anni di esperienza tra servizi finanziari, settore pubblico e tecnologia ad alta crescita. Costruisco e guido team di ingegneri, sono responsabile della delivery rispetto a scadenze regolamentate e resto abbastanza vicino alla tecnologia da guidare gli ingegneri con autorevolezza e prendere solide decisioni architetturali. Lavoro esattamente nel punto in cui leadership delle persone, responsabilità di delivery e profonda competenza tecnica si incontrano — a mio agio sia nel guidare un team e il suo budget, sia nel risolvere io stesso il problema difficile nel codice. Attualmente costruisco e guido una piattaforma dati greenfield regolamentata, sostenuto da una profonda esperienza cloud-native su GCP, AWS e Azure (Kubernetes, Internal Developer Platforms, IaC) e da una delivery sicura e orientata alla conformità.`,
  technicalStrengths: [
    {
      title: "Leadership di Team & Organizzazione",
      description: "Costruisce e guida team di ingegneri lungo l'intero ciclo di vita – assunzione, onboarding, performance, coaching 1:1 e sviluppo di carriera – e ha vinto il business case organizzativo per ristrutturare un team in ottica di scalabilità, con la nuova struttura adottata in modo permanente."
    },
    {
      title: "Delivery & Responsabilità",
      description: "Possiede budget, scope e delivery di programmi greenfield regolamentati, rispondendo a stakeholder clienti ed executive per i risultati rispetto a scadenze di audit e normative."
    },
    {
      title: "Piattaforma & Profondità Tecnica",
      description: "Hands-on su GCP, AWS e Azure (Kubernetes, Internal Developer Platforms, IaC, Go/Python), con la credibilità per prendere e difendere decisioni architetturali e di build/buy."
    },
    {
      title: "Stakeholder & Strategia",
      description: "Traduce tra obiettivi commerciali ed esecuzione tecnica, fornendo consulenza a stakeholder senior e C-suite per definire roadmap e trasformare la direzione tecnica in risultati di business."
    }
  ],
  experience: [
    {
      title: "Engineering Manager, Data Engineering",
      company: "Haleon / Core Engineering Consulting Group",
      location: "Londra, UK",
      period: "Mar. 2026 - Presente",
      points: [
        { bold: "Costruzione del Team & Leadership", text: "Ho fondato e guido un team di 6 ingegneri da zero – con responsabilità su assunzione, onboarding, performance, coaching 1:1 e sviluppo di carriera – costruendo una cultura ad alta fiducia." },
        { bold: "Responsabilità di Budget & Delivery", text: "Possiedo l'ingaggio end-to-end (budget, scope e roadmap), guidando una strategia di rilascio iterativa che consegna pipeline production-grade rispetto a scadenze di audit SOX e normative." },
        { bold: "Architettura Tecnica", text: "Ho progettato una piattaforma dati Medallion (Bronze/Argento/Oro) su Azure (AKS, ADLS Gen2, PostgreSQL) con pipeline Dagster/Python, distribuita come codice tramite Terraform Cloud, Helm e GitHub Actions." },
        { bold: "Conformità & Delivery Assistita da AI", text: "Ho costruito controlli SOX automatizzati (PA-02/AM-02) con tracciabilità verificabile dal report alla sorgente grezza e introdotto sviluppo e code review assistiti da AI per aumentare il throughput del team." }
      ]
    },
    {
      title: "Principal Platform Consultant",
      company: "Barclays / Red Badger",
      location: "Londra, UK",
      period: "Ott. 2025 - Mar. 2026",
      points: [
        { bold: "Architettura IDP Greenfield", text: "Ho progettato e realizzato la nuova Internal Developer Platform della divisione Payments su AWS/EKS (Go, Terraform, Crossplane, Flux), costruita per payment rails ad alto throughput e bassa latenza." },
        { bold: "Golden Path & Governance", text: "Ho agito come Technical Authority, progettando pattern \"Golden Path\" e framework di conformità automatizzati che hanno trasformato i vincoli legacy in un ecosistema sicuro e self-service." },
        { bold: "Abilitazione del Team", text: "Ho trasformato unità software legacy in Platform Engineer attraverso pair programming hands-on e mentoring, aggiornando i Tech Lead interni sulle best practice Cloud-Native." }
      ]
    },
    {
      title: "Principal Consultant, GitHub Migration",
      company: "Haleon / Core Engineering Consulting Group",
      location: "Londra, UK",
      period: "Apr. 2025 - Set. 2025",
      points: [
        { bold: "Delivery della Migrazione", text: "Ho guidato la delivery tecnica di una migrazione enterprise di controllo del codice sorgente e CI/CD, spostando il team della piattaforma SAP ERP da Azure DevOps a GitHub con disruzione minima." },
        { bold: "Interfaccia con gli Stakeholder", text: "Ho coordinato la delivery e agito come interfaccia verso gli stakeholder di Haleon, a seguito di una gara competitiva vinta da CECG." }
      ]
    },
    {
      title: "Engineering Manager, Cloud Enablement",
      company: "JPMorgan Chase / Core Engineering Consulting Group",
      location: "Londra, UK",
      period: "Apr. 2023 - Mar. 2025",
      points: [
        { bold: "Leadership & Crescita del Team", text: "Ho gestito (line management) e fatto crescere il team Cloud Enablement fino a 13 ingegneri in due anni, con responsabilità su assunzione, onboarding, performance, coaching 1:1 e sviluppo di carriera." },
        { bold: "Progettazione Organizzativa", text: "Ho costruito e vinto il business case con l'Engineering Director per ristrutturare il team in ottica di scalabilità, con la nuova struttura adottata in modo permanente nell'organigramma dell'azienda." },
        { bold: "Architettura su Scala Aziendale", text: "Come lead tecnico più senior, ho definito la direzione per la fondazione GCP a livello aziendale e l'ecosistema Kubernetes (100+ cluster) con framework di controllo allineati a NIST/ISO." },
        { bold: "Golden Path & DevEx", text: "Ho introdotto Crossplane e GitOps (ArgoCD) con osservabilità (Prometheus/Grafana), migliorando affidabilità e Developer Experience per migliaia di sviluppatori interni." }
      ]
    },
    {
      title: "Infrastructure DevOps Lead - AWS",
      company: "Deloitte",
      location: "Copenaghen, Danimarca",
      period: "Mar. 2021 - Mar. 2023",
      points: [
        { bold: "Infrastruttura Critica", text: "Ho orchestrato l'infrastruttura cloud per la Piattaforma Nazionale delle Imposte Immobiliari della Danimarca (Vurderingsportalen), coordinando 3 team satellite per favorire l'autonomia di delivery." },
        { bold: "Ottimizzazione dei Costi", text: "Ho eseguito una strategia di consolidamento dell'infrastruttura che ha ridotto i costi operativi cloud mensili di ~70%." },
        { bold: "Modernizzazione della Sicurezza", text: "Ho ri-architettato il livello di autenticazione, sostituendo soluzioni NGINX personalizzate con AWS API Gateway gestito." }
      ]
    },
    {
      title: "Principal Consultant - Azure",
      company: "Microsoft",
      location: "Londra, UK",
      period: "Nov. 2020 - Mar. 2021",
      points: [
        { bold: "Recupero Architetturale", text: "Guidato il recupero architetturale di una migrazione critica della piattaforma di trading per il London Stock Exchange Group (Refinitiv)." },
        { bold: "Ottimizzazione del Throughput", text: "Risolto i blocchi di throughput ottimizzando l'architettura per AKS (Kubernetes) ed EventHubs, condensando la consegna da anni a mesi." }
      ]
    },
    {
      title: "Lead Platform Engineer - GCP",
      company: "Loveholidays",
      location: "Londra, UK",
      period: "Mar. 2020 - Ott. 2020",
      points: [
        { bold: "Ingegneria delle Prestazioni", text: "Raggiunto un aumento delle prestazioni del ~30% nei tempi di risposta della ricerca profilando microservizi Go e Java." },
        { bold: "Tooling Personalizzato", text: "Progettato una libreria Go personalizzata per la sincronizzazione del database in tempo reale tramite Google Cloud Storage." }
      ]
    },
    {
      title: "Lead DevOps Engineer - GCP",
      company: "eBay",
      location: "Berlino, Germania",
      period: "Giu. 2019 - Mar. 2020",
      points: [
        { bold: "Strategia di Migrazione", text: "Orchestrato la migrazione strategica del verticale Classifieds su GCP." },
        { bold: "Standardizzazione", text: "Architettato flussi di lavoro GKE standardizzati e pattern di distribuzione per team distribuiti." }
      ]
    },
    {
      title: "Senior DevOps Engineer / Consultant",
      company: "Impegni Precedenti",
      location: "Europa",
      period: "2010 - 2019",
      points: [
        { bold: "Deloitte UK (2018-2019)", text: "Lead DevOps Engineer per la trasformazione digitale dell'Autorità Fiscale Danese. Ridotto il deployment degli ambienti da settimane a ore." },
        { bold: "Element (2017-2018)", text: "Founding DevOps Engineer per startup InsureTech. Costruito fondazione greenfield AWS/Kubernetes." },
        { bold: "HMRC (2016-2017)", text: "Senior DevOps Consultant per la realizzazione di una piattaforma multi-active (AWS/On-Prem) per disponibilità senza downtime." },
        { bold: "KPMG UK (2015-2016)", text: "Architettato fondazione AWS multi-tenant per l'elaborazione Big Data (Hadoop)." },
        { bold: "WTG (2015)", text: "Consegnato infrastruttura di monitoraggio automatizzato sicuro per UK Home Office in anticipo sui tempi." },
        { bold: "Gov.UK (2014-2015)", text: "WebOps Engineer per il gateway di identità digitale Gov.UK Verify." },
        { bold: "DigitasLBi (2012-2014)", text: "Gestito ciclo di vita hardware e VMware vSphere Private Cloud." },
        { bold: "Google (2010-2011)", text: "Stagista Corporate Operations Engineer presso l'helpdesk IT interno di Google (Londra, poi Dublino); ricevuti più peer bonus e la certificazione Python Readability di Google." }
      ]
    }
  ],
  skills: {
    "Leadership & Strategia": [
      "Engineering Strategy", "Team Building & Scaling", "Tech Recruitment", "Performance Management", "Org Design", "Executive Stakeholder Management", "FinOps", "Vendor Strategy"
    ],
    "Cloud & Piattaforma": [
      "GCP (Pro Architect)", "AWS", "Azure", "Kubernetes (EKS/GKE)", "Internal Developer Platforms (IDP)", "Crossplane", "Terraform", "ArgoCD", "Flux", "Helm", "Istio"
    ],
    "Architettura & Sviluppo": [
      "Go", "Python", "Java Spring Boot", "Event-Driven Architecture", "Domain-Driven Design (DDD)", "Microservices", "gRPC/REST", "Distributed Systems"
    ],
    "Ops, Sicurezza & Dati": [
      "SRE", "DevSecOps", "Zero Trust", "IAM & Identity Governance", "SOX / ISO 27001 / NIST", "Data Pipelines (ETL/Medallion)", "Dagster", "PostgreSQL", "Observability (Prometheus/Grafana/Datadog)"
    ]
  },
  education: [
    {
      degree: "Master of Engineering (MEng) Hons in Computer Science and Electronics",
      institution: "University of Bristol",
      location: "Bristol, UK",
      year: "2012"
    }
  ],
  certificates: [
    { issuer: "Google Cloud Platform (GCP)", name: "Professional Cloud Architect (PCA)", year: "2025" },
    { issuer: "Google Cloud Platform (GCP)", name: "Generative AI Leader", year: "2025" },
    { issuer: "Scrum Alliance", name: "Certified ScrumMaster (CSM)", year: "2015" },
    { issuer: "UK Government", name: "UK Security Clearance (SC) [Previous]", year: "2014" },
    { issuer: "Red Hat", name: "Red Hat Certified System Administrator (RHCSA)", year: "2014" },
    { issuer: "VMware", name: "Certified Advanced Professional 5 - Data Centre Admin (VCAP5-DCA)", year: "2013" },
    { issuer: "VMware", name: "Certified Professional 5 - Data Centre Virtualisation (VCP5-DV)", year: "2013" },
    { issuer: "Google", name: "Python Readability (Internal Code Quality Award)", year: "2011" }
  ],
  languages: [
    { language: "Inglese", proficiency: "C2 - Madrelingua / Bilingue" },
    { language: "Italiano", proficiency: "C2 - Madrelingua / Bilingue" },
    { language: "Tedesco", proficiency: "B2 - Competenza professionale lavorativa" },
    { language: "Danese", proficiency: "A2 - Elementare" }
  ]
};

/**
 * Single source of truth for every fact on the site and in the generated resume PDFs.
 *
 * Rules for editing this file:
 * - Only confirmed facts. Anything not yet confirmed carries a "[CONFIRM: ...]" marker
 *   so it is easy to find with a text search before publishing.
 * - Every number needs context (scope, baseline or timeframe). If it has none, leave it out.
 *
 * After editing, run `npm run assets` to regenerate the resume PDFs and share image.
 */

export type Track = "iam" | "cloud-soc" | "network" | "web-devsecops";

export const tracks: { id: Track; label: string; description: string }[] = [
  {
    id: "iam",
    label: "Identity & Access",
    description: "Entra ID, Conditional Access, MFA, role-based access and identity lifecycle.",
  },
  {
    id: "cloud-soc",
    label: "Cloud & SOC",
    description: "Alert triage, detection, monitoring and cloud security operations.",
  },
  {
    id: "network",
    label: "Network Security",
    description: "Segmentation, firewall policy, VPN and traffic validation.",
  },
  {
    id: "web-devsecops",
    label: "Web & DevSecOps",
    description: "Secondary skill: secure web platforms, CI/CD, hosting and programming foundations.",
  },
];

export type FlowDiagram = {
  title: string;
  caption: string;
  stages: { label: string; nodes: string[] }[];
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  location?: string;
  /** One line on the organization's size or scope. */
  scope?: string;
  summary?: string;
  concurrentNote?: string;
  highlights: string[];
};

export type OtherExperienceItem = {
  role: string;
  organization: string;
  period: string;
  location?: string;
  summary: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMediaItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  track: Track;
  category: string;
  period?: string;
  description: string;
  outcomes?: string[];
  technologies: string[];
  role?: string;
  links?: ProjectLink[];
  media?: ProjectMediaItem[];
  diagram?: FlowDiagram;
  featured?: boolean;
  privateCode?: boolean;
};

export type CaseStudy = {
  slug: string;
  title: string;
  track: Track;
  context: string;
  challenge: string;
  actions: string[];
  tools: string[];
  outcome: string;
  /** Drafts are kept for reference but not rendered until confirmed. */
  draft?: boolean;
};

export type CredentialStatus = "Certified" | "In progress" | "Planned";

export type Credential = {
  name: string;
  shortName: string;
  issuer: string;
  status: CredentialStatus;
  /** e.g. "Nov 2026" or "Valid Dec 2024 – Dec 2027". */
  earned?: string;
  target?: string;
  badgeIcon?: string;
  credentialUrl?: string;
  /** Additional verification links, e.g. the issuer's own verification page. */
  extraLinks?: ProjectLink[];
  /** Shown in place of a verification link until the real link is added. */
  verificationPlaceholder?: string;
  acquiredSkills?: string[];
};

export type EducationItem = {
  credential: string;
  program: string;
  institution: string;
  location: string;
  period: string;
  coursework?: string[];
};

export type SkillTier = {
  tier: string;
  description: string;
  groups: { domain: string; items: string[] }[];
};

export type FocusArea = {
  title: string;
  description: string;
  href: string;
};

export type TrustMarker = {
  value: string;
  label: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle?: string;
};

export const profile = {
  name: "Patrick Ngenzi",
  /** Short job title: header, page titles, structured data. */
  title: "Security Analyst",
  /** Full positioning line: hero, og/twitter titles, resume header. */
  headline: "Security Analyst – Identity, Cloud & Network Security",
  currentRole: "IT System Specialist",
  currentEmployer: "Near North District School Board",
  /**
   * Headshot path, relative to /public (e.g. "/images/profile/patrick-ngenzi.jpg").
   * Leave empty to show the initials monogram. This is the only line to change.
   */
  photo: "",
  intro:
    "I have 6+ years in IT and security, starting in February 2020. As an IT System Specialist at Near North District School Board, I triage security alerts, investigate phishing and compromised accounts, automate account lifecycle work with PowerShell, and review firewall activity in Fortinet FortiAnalyzer.",
  summary:
    "I work across security operations, identity and network security for an Ontario school board with 34 schools and 5,000+ devices. That means Microsoft Defender for Office 365 and Entra ID investigations, hybrid Active Directory and Conditional Access, vulnerability remediation through Intune, WSUS and SCCM, and Fortinet firewall policy. In labs and projects I have built Azure network segmentation with Microsoft Sentinel detections, Conditional Access baselines and an AI-assisted alert triage engine.",
  whyIWorkInSecurity:
    "I got into security because I like hard puzzles, and these ones protect people, systems and the services they rely on.",
  longTermGoal:
    "Long term, I am working toward security leadership and management.",
  location: "North Bay, Ontario",
  availability:
    "Open to Ontario-wide roles: remote, hybrid or on-site, relocation and on-call.",
  email: "ngenzipack@gmail.com",
  /** Printed on the downloadable resume PDFs only, never on the website. */
  phone: "+1 647-783-7018",
  driversLicence: "Full G licence",
  links: {
    portfolio: "https://ngenzi.neotha.com/",
    portfolioMirror: "https://ngenzipack.github.io/portfolio/",
    linkedin: "https://www.linkedin.com/in/patrick-ngenzi-801193134/",
    github: "https://github.com/Ngenzipack",
  },
  topSkills: [
    "Identity & access – Entra ID, Conditional Access",
    "Threat investigation – Microsoft Defender",
    "Network security – Fortinet",
  ],
  targetRoles: [
    "Security / SOC Analyst",
    "Network Security Analyst",
    "IAM Specialist",
    "Security Engineer",
  ],
  secondaryRoles: ["Systems Administrator", "Network Administrator"],
  beyondTech:
    "Outside of work I play chess and soccer, and I enjoy time at the piano.",
} as const;

export const trustMarkers: TrustMarker[] = [
  {
    value: "6+ years",
    label: "IT and security",
    description: "Since February 2020, across a school board, telecom and the service desk.",
  },
  {
    value: "5,000+",
    label: "Devices protected",
    description: "34 schools, 2,000+ staff and 10,000+ students at Near North District School Board.",
  },
  {
    value: "150+",
    label: "Incidents a month",
    description: "Malware and security incidents investigated and contained each month at the school board.",
  },
  {
    value: "4",
    label: "Certifications",
    description: "Microsoft SC-300, CompTIA Security+, Google Cybersecurity and IBM Windows Defender and Firewall.",
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: "Security operations",
    description:
      "Alert triage across ESET, SolarWinds, Intune, MaaS360 and Microsoft Defender; phishing and compromised-account response; root cause analysis.",
    href: "/projects#track-cloud-soc",
  },
  {
    title: "Identity and access",
    description:
      "Hybrid Active Directory and Entra ID, Conditional Access, MFA, role-based access and PowerShell account lifecycle automation.",
    href: "/projects#track-iam",
  },
  {
    title: "Network security",
    description:
      "FortiAnalyzer review, firewall and network policy, IoT isolation with VLANs, SSL/TLS certificates and site-to-site VPN.",
    href: "/projects#track-network",
  },
  {
    title: "Vulnerability and risk",
    description:
      "Defender for Cloud findings prioritized by risk, patching through Intune, WSUS and SCCM, BitLocker, and MFIPPA privacy controls.",
    href: "/experience",
  },
];

/** How I handle an incident. Confirmed by Patrick, Nov 2026. */
export const incidentSteps = [
  {
    title: "Investigate",
    description:
      "Start from the evidence: sign-in and audit logs, mail traces, firewall logs and the affected users.",
  },
  {
    title: "Contain and fix",
    description:
      "Reset or block accounts, remove malicious mail, isolate devices, tighten access or firewall policy, and patch.",
  },
  {
    title: "Document and automate",
    description:
      "Write up the root cause and remediation and, where a task repeats, script it in PowerShell so it is done the same way next time.",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "IT System Specialist",
    organization: "Near North District School Board",
    period: "Nov 2023 – Present",
    location: "North Bay, Ontario",
    scope: "Ontario public school board with 34 schools, 5,000+ devices, 2,000+ staff and 10,000+ students.",
    highlights: [
      "Monitor and triage security alerts from ESET, SolarWinds, Microsoft Intune, MaaS360 and Microsoft security tools, investigating and containing 150+ malware and security incidents a month.",
      "Investigate phishing and compromised accounts with Microsoft Defender for Office 365 and Entra ID audit logs, and support investigations with KQL, Defender XDR, Defender for Cloud and Microsoft Purview as needed.",
      "Administer hybrid Active Directory and Microsoft Entra ID with role-based access, MFA, Conditional Access and least privilege, and script account creation, changes and offboarding in PowerShell.",
      "Review firewall activity in Fortinet FortiAnalyzer, create and manage firewall, device and network policies, isolate IoT devices such as vape detectors and cameras with VLANs and firewall rules, and renew SSL/TLS certificates.",
      "Review vulnerability findings in Microsoft Defender for Cloud and FortiAnalyzer, prioritize remediation by risk, and deploy patches through Microsoft Intune, WSUS and SCCM. Enforce BitLocker encryption and harden Azure virtual machines and NSG rules.",
      "Perform root cause analysis on recurring security and network incidents, document remediation and escalation, and recommend control changes.",
      "Wrote incident response and disaster recovery procedures, review the security of new systems and vendors before rollout, prepare security reports, support audit responses and apply MFIPPA privacy controls to student and staff data.",
      "Built the board's internal AI ticketing chatbot, designed to keep student and staff data out of prompts.",
      "Administer Exchange Online mailboxes and Microsoft 365 groups, deploy apps and images with Intune, and run VMware and Hyper-V virtual servers.",
      "Design and deliver phishing, password, MFA and safe-browsing training to 12+ groups of teachers, administrators and students, and carry out after-hours maintenance.",
    ],
  },
  {
    role: "Network Specialist",
    organization: "Bell",
    period: "Jan 2022 – Dec 2023",
    location: "Hamilton, Ontario",
    scope: "Network and security support across 4 sites in Ancaster, Burlington, Oakville and Hamilton, serving 2,000+ users.",
    concurrentNote: "Overlapped with Near North District School Board from Nov to Dec 2023.",
    highlights: [
      "Triaged Microsoft Defender for Endpoint alerts weekly, investigated and isolated compromised devices, escalated confirmed threats and documented malware response steps.",
      "Monitored Cisco and Palo Alto logs for suspicious traffic, blocked malicious IPs, and monitored ISP and data centre links.",
      "Reviewed and cleaned up FortiGate and Palo Alto firewall policy to reduce exposed services while keeping approved access.",
      "Implemented Entra ID role-based access and least-privilege controls, and automated onboarding and offboarding with PowerShell.",
      "Secured Aerohive wireless with WPA3, tuned access point channels and configurations, and isolated guest and IoT traffic on VLANs.",
      "Wrote firewall change management procedures and led knowledge-sharing sessions on firewall and wireless security.",
    ],
  },
  {
    role: "Technical Support Analyst I",
    organization: "SP Data Digital",
    period: "Feb 2020 – Jan 2022",
    location: "Hamilton, Ontario",
    highlights: [
      "Monitored security alerts, triaged phishing and email security reports, and remediated malware with CrowdStrike by isolating workstations, running deep scans and re-imaging infected devices.",
      "Managed access in Active Directory and Okta, including MFA resets, least-privilege access requests, password policy enforcement, periodic access reviews and offboarding.",
      "Remediated critical vulnerabilities, including Log4j, by patching 50+ servers, and ran routine OS and third-party patching with Microsoft Intune.",
      "Resolved Tier 1 and Tier 2 tickets, including account lockouts, VPN and firewall configuration, and escalations, and cut repeat outages through proactive maintenance and standard troubleshooting.",
    ],
  },
];

export const otherExperience: OtherExperienceItem[] = [
  {
    role: "Full-Stack Developer (Freelance)",
    organization: "Self-employed",
    period: "Jul 2022 – Present",
    location: "Ontario",
    summary:
      "Built and deployed 3+ production web applications secured with role-based access, MFA, passkeys, secure uploads and rate limiting, with CI/CD in Docker, Jenkins and GitHub Actions, including tests, security audits and rollback controls.",
  },
  {
    role: "Independent Property Manager (Part-Time)",
    organization: "Self-employed",
    period: "Jan 2022 – Feb 2025",
    location: "North Bay, Ontario",
    summary:
      "Assessed 10+ vendors against PIPEDA privacy practices, restricted access to tenant financial data, and managed keycard and camera-system access.",
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "azure-iam-security-architecture",
    title: "Azure Hybrid Network and IAM Security Architecture",
    track: "iam",
    category: "Identity & Access / Cloud Security",
    period: "2026",
    role: "Designer and implementer",
    description:
      "A simulated school-board hybrid environment: an Azure VNet connected to a simulated on-premises VNet over an IPsec VPN, with Entra ID groups, Conditional Access and Microsoft Sentinel alert rules.",
    outcomes: [
      "Built two VNets with eight subnets (Staff, Students, Servers and a gateway subnet in each), a VPN Gateway and 15+ NSG rules that block student subnets from reaching servers.",
      "Created 30 test identities across Staff, Student and IT Admin groups, with Conditional Access policies for MFA, compliant devices for IT admins and blocked legacy authentication.",
      "Connected sign-in, audit and risky-user logs to Microsoft Sentinel and wrote KQL alert rules for failed and risky sign-ins.",
    ],
    technologies: [
      "Microsoft Azure",
      "Microsoft Entra ID",
      "Conditional Access",
      "MFA",
      "NSG",
      "VPN Gateway",
      "Microsoft Sentinel",
      "KQL",
      "Azure CLI",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Ngenzipack/Azure-IAM-Security-Architecture",
      },
    ],
    diagram: {
      title: "Architecture",
      caption:
        "Simplified from the repository's architecture diagram: identity controls, the cloud VNet, the IPsec tunnel to the simulated school, and Sentinel monitoring.",
      stages: [
        {
          label: "Identity",
          nodes: ["Entra ID: Staff, Students, IT Admin groups", "Conditional Access: MFA, compliant device, block legacy auth"],
        },
        {
          label: "Azure VNet-Cloud",
          nodes: ["Staff subnet + NSG", "Students subnet + NSG (no server access)", "Servers subnet + NSG", "VPN gateway"],
        },
        {
          label: "IPsec VPN",
          nodes: ["Site-to-site tunnel"],
        },
        {
          label: "Simulated on-premises",
          nodes: ["Staff, Students, Servers subnets", "VPN gateway"],
        },
        {
          label: "Monitoring",
          nodes: ["Microsoft Sentinel: SignInLogs, AuditLogs, RiskyUsers", "KQL alert rules: failed and risky sign-ins"],
        },
      ],
    },
    featured: true,
  },
  {
    slug: "entra-conditional-access-baselines",
    title: "Entra Conditional Access Baselines",
    track: "iam",
    category: "Identity & Access",
    period: "2026",
    role: "Author",
    description:
      "A baseline set of Microsoft Entra Conditional Access policies with staged rollout playbooks, documented exception patterns and post-deployment validation checks.",
    outcomes: [
      "Policies cover MFA and authentication strengths, named locations and risk-based sign-in controls.",
      "Rollout starts with pilot groups and moves in phases by user segment and workload sensitivity, with exceptions tracked to a remediation date.",
    ],
    technologies: ["Microsoft Entra ID", "Conditional Access", "Authentication strengths", "Named locations", "PowerShell"],
    links: [{ label: "View on GitHub", href: "https://github.com/Ngenzipack/entra-conditional-access-baselines" }],
  },
  {
    slug: "microsoft-security-lab",
    title: "Microsoft Security Lab",
    track: "iam",
    category: "Identity & Access / Monitoring",
    period: "2026",
    role: "Lab builder",
    description:
      "A Microsoft test tenant where I send Entra sign-in, audit and network access logs to Log Analytics, and practise Privileged Identity Management, access reviews and single sign-on.",
    technologies: ["Microsoft Entra ID", "Log Analytics", "Privileged Identity Management", "Access reviews", "Single sign-on"],
    privateCode: true,
  },
  {
    slug: "iam-policy-automation",
    title: "IAM Policy Automation Toolkit",
    track: "iam",
    category: "Identity & Access / Automation",
    period: "2026",
    role: "Developer",
    description:
      "A Python and PowerShell toolkit that turns role requirements into least-privilege policy definitions for Azure and Entra, checks them against deny-list guardrails, and exports audit reports. The command-line interface is still in progress.",
    technologies: ["Python", "PowerShell", "Azure", "Microsoft Entra ID", "JSON/YAML policies"],
    links: [{ label: "View on GitHub", href: "https://github.com/Ngenzipack/iam-policy-automation" }],
  },
  {
    slug: "intelligent-security-alert-triage-engine",
    title: "Intelligent Security Alert Triage Engine",
    track: "cloud-soc",
    category: "SOC Automation / AI-Assisted Triage",
    period: "2026",
    role: "Designer and developer",
    description:
      "A proof-of-concept Python and Streamlit tool that pulls alerts from the Wazuh API, an Elasticsearch index or JSON/CSV files, classifies them with a local LLM, maps them to MITRE ATT&CK techniques, scores risk and writes an audit log for analysts.",
    outcomes: [
      "Validates the model's JSON output, retries malformed responses and falls back to a rule-based classifier when the LLM is unavailable.",
      "Writes plain-English summaries and response recommendations for suspicious PowerShell, brute-force, malware, phishing and privilege-escalation alerts.",
      "Tested with pytest, linted with Ruff and checked on every push by GitHub Actions.",
    ],
    technologies: [
      "Python 3.11",
      "Wazuh API",
      "Elasticsearch",
      "Local LLM",
      "MITRE ATT&CK",
      "Risk scoring",
      "Streamlit",
      "Pandas",
      "Pytest",
      "Ruff",
      "GitHub Actions",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Ngenzipack/intelligent-security-alert-triage-engine",
      },
    ],
    diagram: {
      title: "Data flow",
      caption: "Simplified from the repository's data-flow diagram.",
      stages: [
        { label: "Sources", nodes: ["Wazuh API", "Elasticsearch index", "JSON or CSV files"] },
        { label: "Normalize", nodes: ["Canonical alert schema"] },
        { label: "Analyze", nodes: ["Local LLM classification", "JSON validation and retry", "Rule-based fallback"] },
        { label: "Enrich", nodes: ["MITRE ATT&CK mapping", "Risk and severity score"] },
        { label: "Output", nodes: ["JSON audit log", "Streamlit dashboard"] },
      ],
    },
    media: [
      {
        src: "/images/projects/intelligent-security-alert-triage-engine/dashboard-overview.png",
        alt: "Streamlit dashboard for the alert triage engine showing ingestion controls and a table of recent alerts.",
        width: 1600,
        height: 805,
        caption: "Dashboard: ingest alerts, filter by classification and review triage results.",
      },
      {
        src: "/images/projects/intelligent-security-alert-triage-engine/metrics-charts.png",
        alt: "Classification distribution and criticality timeline charts from the alert triage engine.",
        width: 1098,
        height: 512,
        caption: "Triage analytics: classification distribution and criticality over time.",
      },
    ],
    featured: true,
  },
  {
    slug: "network-monitoring-automation",
    title: "Network Monitoring and Security Automation",
    track: "cloud-soc",
    category: "Monitoring / Automation",
    period: "2023",
    role: "Personal project",
    description:
      "A personal monitoring setup with SolarWinds and PRTG, plus PowerShell automation that backs up and audits Fortinet configurations over SCP.",
    outcomes: [
      "Configured SolarWinds and PRTG to watch device availability and alert on failures.",
      "Scripted scheduled Fortinet configuration backups over SCP with PowerShell.",
      "Automated Fortinet configuration audits with the same PowerShell jobs.",
    ],
    technologies: ["SolarWinds", "PRTG", "PowerShell", "SCP", "Fortinet"],
    diagram: {
      title: "Workflow",
      caption: "Simplified workflow of the monitoring and backup automation.",
      stages: [
        { label: "Devices", nodes: ["Fortinet firewalls", "Network devices and servers"] },
        { label: "Monitor", nodes: ["SolarWinds", "PRTG availability alerts"] },
        { label: "Automate", nodes: ["PowerShell scheduled jobs", "Config backup over SCP"] },
        { label: "Audit", nodes: ["Automated configuration audit", "Documented findings"] },
      ],
    },
    featured: true,
    privateCode: true,
  },
  {
    slug: "enterprise-network-segmentation-lab",
    title: "Enterprise Network Segmentation and Security Lab",
    track: "network",
    category: "Network Security / Segmentation",
    period: "2024",
    role: "Lab architect",
    description:
      "A lab that segments staff, student, guest, IoT, VoIP and server traffic into VLANs, routes between them on Cisco equipment, enforces approved flows with Fortinet firewall rules and a site-to-site VPN, and validates the boundaries in Wireshark.",
    outcomes: [
      "Mapped the topology, trust boundaries and approved flows so each firewall rule has a stated business purpose.",
      "Isolated guest and IoT VLANs from staff and server networks to limit lateral movement.",
      "Tested each policy change with packet captures and a rollback step, and documented the topology in Visio.",
    ],
    technologies: [
      "Cisco",
      "Fortinet",
      "VLAN segmentation",
      "Inter-VLAN routing",
      "Site-to-site VPN",
      "Wireshark",
      "Visio",
    ],
    diagram: {
      title: "Lab topology",
      caption: "Simplified topology of the segmentation lab.",
      stages: [
        { label: "User VLANs", nodes: ["Staff", "Student", "Guest", "IoT", "VoIP"] },
        { label: "Routing", nodes: ["Cisco inter-VLAN routing"] },
        { label: "Policy", nodes: ["Fortinet firewall rules: approved flows only"] },
        { label: "Protected", nodes: ["Server VLAN", "Site-to-site VPN", "Internet"] },
        { label: "Validation", nodes: ["Wireshark captures", "Rollback plan"] },
      ],
    },
    featured: true,
    privateCode: true,
  },
  {
    slug: "neotha-platform",
    title: "Neotha – Secure Booking and Events Platform",
    track: "web-devsecops",
    category: "Secure Web Platform / DevSecOps",
    period: "Ongoing",
    role: "Owner and lead developer",
    description:
      "My own booking and events marketplace. I built passkey (WebAuthn) authentication and the booking and payment workflows, and run the CI/CD pipeline, hosting and monitoring.",
    outcomes: [
      "Built with React, TypeScript, Node.js and MySQL, with passkeys, role-based access and rate limiting.",
      "Jenkins pipeline runs tests, SonarQube code analysis and security audits before Docker images ship, with rollback controls.",
      "Runs behind Nginx with Sentry error tracking and Prometheus and Grafana monitoring.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MySQL",
      "WebAuthn passkeys",
      "Docker",
      "Jenkins",
      "SonarQube",
      "Nginx",
      "Sentry",
      "Prometheus",
      "Grafana",
    ],
    links: [
      {
        label: "Visit neotha.com",
        href: "https://www.neotha.com/",
      },
    ],
    diagram: {
      title: "Delivery pipeline",
      caption: "Simplified delivery and monitoring path for Neotha.",
      stages: [
        { label: "Source", nodes: ["GitHub repository"] },
        { label: "CI", nodes: ["Jenkins: tests", "SonarQube analysis", "Security audit"] },
        { label: "Ship", nodes: ["Docker images", "Rollback controls"] },
        { label: "Run", nodes: ["Cloudflare DNS and TLS", "Nginx", "Node.js + MySQL"] },
        { label: "Observe", nodes: ["Sentry", "Prometheus", "Grafana"] },
      ],
    },
    featured: true,
    privateCode: true,
  },
  {
    slug: "client-websites",
    title: "Client Websites – Nkurunziza and Sylva Renovations",
    track: "web-devsecops",
    category: "Client Websites / Hosting Support",
    period: "Ongoing",
    role: "Developer and hosting administrator",
    description:
      "Two sites I built and still run: nkurunziza.ca, a personal portfolio site, and sylvarenovations.ca, a paid project for a renovation company.",
    outcomes: [
      "Built responsive sites that work on desktop and mobile.",
      "Handle hosting, DNS, SSL/TLS and updates for both sites.",
      "Limit access, back up before changes and keep clients informed.",
    ],
    technologies: [
      "Next.js",
      "Responsive design",
      "Hosting",
      "DNS",
      "SSL/TLS",
      "Client support",
    ],
    links: [
      { label: "Visit nkurunziza.ca", href: "https://nkurunziza.ca/en/" },
      { label: "Visit sylvarenovations.ca", href: "https://www.sylvarenovations.ca/" },
    ],
    privateCode: true,
  },
  {
    slug: "expense-tracker-product",
    title: "Expense Tracker – Shared Receipt and Cost-Splitting App",
    track: "web-devsecops",
    category: "Full-Stack Application",
    period: "2026",
    role: "Full-stack developer",
    description:
      "A private web app for shared household expenses: upload receipts, review totals by month and split costs between roommates.",
    outcomes: [
      "Replaced manual tracking with receipt uploads, monthly totals and a per-person split.",
      "Each roommate signs in with their own account through NextAuth.js; passwords are hashed with bcrypt and forms are protected against CSRF.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "NextAuth.js",
      "MySQL",
      "bcrypt",
      "File upload",
    ],
    privateCode: true,
  },
  {
    slug: "portfolio-pipeline",
    title: "This Portfolio – Next.js Static Site and CI/CD",
    track: "web-devsecops",
    category: "CI/CD / Static Hosting",
    period: "2026",
    role: "Developer and maintainer",
    description:
      "This site: a Next.js static export hosted on Hostinger behind Cloudflare, with a GitHub Actions workflow that publishes a mirror to GitHub Pages on every push to main.",
    outcomes: [
      "No backend or database, so there is no server-side attack surface to maintain.",
      "Every fact on the site and in the resume PDFs comes from one content file.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub Actions",
      "GitHub Pages",
      "Cloudflare",
    ],
    links: [
      { label: "View repository", href: "https://github.com/Ngenzipack/portfolio" },
    ],
  },
  {
    slug: "python-engineering-foundations",
    title: "Python Foundations",
    track: "web-devsecops",
    category: "Programming Practice",
    period: "2023",
    role: "Developer",
    description:
      "Small public Python projects: a budget tracker, a probability simulator and an object-oriented polygon calculator.",
    technologies: ["Python", "Object-oriented programming", "Git"],
    links: [
      { label: "Budget App", href: "https://github.com/Ngenzipack/Budget-App" },
      { label: "Probability Calculator", href: "https://github.com/Ngenzipack/Probability-Calculator" },
      { label: "Polygon Area Calculator", href: "https://github.com/Ngenzipack/Polygon-Area-Calculator" },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-access-hardening",
    title: "Access Hardening with Entra ID and Conditional Access",
    track: "iam",
    context: "Bell, 2022–2023",
    challenge:
      "Identity controls across Azure and Microsoft 365 were inconsistent, which raised the risk of account takeover.",
    actions: [
      "Mapped privileged and standard access paths, then rebuilt role-based access around least privilege.",
      "Rolled out Conditional Access, MFA and legacy-authentication blocking in stages.",
      "Wrote onboarding, offboarding and access-review steps so the team could keep the controls in place.",
    ],
    tools: ["Microsoft Entra ID", "Conditional Access", "PowerShell"],
    outcome: "Fewer accounts with excessive permissions and consistent MFA coverage.",
  },
  {
    slug: "case-study-firewall-segmentation",
    title: "Firewall Cleanup and Segmentation",
    track: "network",
    context: "Bell, 2022–2023",
    challenge:
      "Open and legacy firewall rules made it hard to prove which access paths were approved, and increased lateral-movement risk.",
    actions: [
      "Reviewed traffic flows and rebuilt FortiGate and Palo Alto policy around approved ports, services and trust boundaries.",
      "Segmented staff, guest, IoT and server traffic into VLANs and validated packet flow with a rollback plan.",
      "Wrote firewall change management procedures and set up a regular review cycle.",
    ],
    tools: ["FortiGate", "Palo Alto", "Wireshark", "VLAN design"],
    outcome: "Smaller external exposure with approved connectivity kept in place.",
  },
  {
    slug: "case-study-devsecops-rollout",
    title: "DevSecOps Pipeline and Monitoring for Neotha",
    track: "web-devsecops",
    context: "Neotha, my own platform, 2022–present",
    challenge:
      "A multi-service platform needed safer deployments, better runtime monitoring and clear incident-response steps.",
    actions: [
      "Built a Jenkins pipeline with tests, SonarQube analysis, security audits and staged rollouts with rollback.",
      "Standardized Docker Compose deployments, Nginx reverse-proxy configuration and health checks.",
      "Added Sentry, Prometheus and Grafana, and wrote runbooks for incident triage.",
    ],
    tools: ["Jenkins", "SonarQube", "Docker Compose", "Nginx", "Sentry", "Prometheus", "Grafana"],
    outcome: "Releases pass tests and security checks before they ship, and errors and performance are visible in Sentry and Grafana.",
  },
];

export const education: EducationItem[] = [
  {
    credential: "Diploma",
    program: "Computer Engineering Technology – Mechatronic Systems",
    institution: "Mohawk College",
    location: "Hamilton, Ontario",
    period: "Sep 2019 – Jun 2022",
    coursework: ["Network Security", "Web Security", "Advanced Networks", "Server Administration"],
  },
];

export const credentials: Credential[] = [
  {
    name: "Microsoft Certified: Identity and Access Administrator Associate",
    shortName: "SC-300",
    issuer: "Microsoft",
    status: "Certified",
    earned: "Nov 2026",
    credentialUrl: "https://learn.microsoft.com/en-us/users/NgenziPatrick-2475/credentials/CE4F1F1C9F096914",
  },
  {
    name: "CompTIA Security+",
    shortName: "Security+",
    issuer: "CompTIA",
    status: "Certified",
    earned: "Valid Dec 2024 – Dec 2027",
    badgeIcon: "/images/comptia-security-plus-credly.png",
    credentialUrl: "https://www.credly.com/badges/d215b8e4-3f70-4885-9ca8-91583c0b7b5a",
    extraLinks: [
      {
        label: "CompTIA verification",
        href: "https://cp.certmetrics.com/comptia/en/public/verify/credential/TJVKFQVSR2RQ165R",
      },
    ],
    acquiredSkills: [
      "Threat, attack and vulnerability identification",
      "Risk management and mitigation",
      "Threat management operations",
      "Intrusion detection",
    ],
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    shortName: "Google Cybersecurity",
    issuer: "Google",
    status: "Certified",
    earned: "Jul 2023",
    credentialUrl: "https://www.credly.com/badges/41c959b5-36f0-498f-8073-0a0500526f64",
  },
  {
    name: "Microsoft Windows Defender and Firewall",
    shortName: "IBM Defender & Firewall",
    issuer: "IBM",
    status: "Certified",
    earned: "Aug 2023",
  },
  {
    name: "Microsoft Certified: Security Operations Analyst Associate",
    shortName: "SC-200",
    issuer: "Microsoft",
    status: "In progress",
    target: "Late November 2026",
  },
  {
    name: "Fortinet Certified Professional – Network Security",
    shortName: "FCP Network Security",
    issuer: "Fortinet",
    status: "Planned",
  },
];

export const certifiedCredentials = credentials.filter((c) => c.status === "Certified");
export const upcomingCredentials = credentials.filter((c) => c.status !== "Certified");

export const skillTiers: SkillTier[] = [
  {
    tier: "Hands-on daily",
    description: "Tools I use in my current role at Near North District School Board.",
    groups: [
      {
        domain: "Security operations",
        items: [
          "Microsoft Defender for Office 365",
          "Phishing and compromised-account response",
          "ESET",
          "SolarWinds",
          "MaaS360",
          "Root cause analysis",
        ],
      },
      {
        domain: "Identity and email",
        items: [
          "Microsoft Entra ID audit and sign-in logs",
          "Hybrid Active Directory",
          "Conditional Access and MFA",
          "Group Policy",
          "PowerShell account automation",
          "Exchange Online",
        ],
      },
      {
        domain: "Network",
        items: [
          "Fortinet FortiAnalyzer",
          "FortiGate firewall and network policy",
          "VLAN and IoT isolation",
          "SSL/TLS certificates",
        ],
      },
      {
        domain: "Vulnerability, endpoints and servers",
        items: [
          "Microsoft Defender for Cloud",
          "Microsoft Intune",
          "WSUS and SCCM",
          "BitLocker",
          "Azure VMs and NSGs",
          "VMware vSphere",
          "Hyper-V",
          "Windows Server 2016–2022",
        ],
      },
      {
        domain: "Governance",
        items: [
          "Incident response and DR procedures",
          "Vendor security reviews",
          "Security reporting and audit support",
          "MFIPPA",
        ],
      },
    ],
  },
  {
    tier: "Lab / project experience",
    description: "Built in my labs and projects, or used in previous roles at Bell and SP Data Digital.",
    groups: [
      {
        domain: "Detection and SOC",
        items: [
          "Microsoft Sentinel",
          "Log Analytics",
          "Microsoft Defender for Endpoint",
          "Defender Vulnerability Management",
          "CrowdStrike",
          "MITRE ATT&CK mapping",
          "Wazuh and Elasticsearch APIs",
        ],
      },
      {
        domain: "Identity",
        items: ["Privileged Identity Management", "Access reviews", "Single sign-on", "Okta"],
      },
      {
        domain: "Network",
        items: [
          "Palo Alto firewalls",
          "Cisco Catalyst",
          "FortiSwitch and FortiAP",
          "Site-to-site and IPsec VPN",
          "Aerohive wireless and WPA3",
          "Wireshark",
        ],
      },
      {
        domain: "Automation and DevSecOps",
        items: [
          "Python",
          "Bash",
          "SQL",
          "Docker",
          "Jenkins",
          "GitHub Actions",
          "React, TypeScript and Node.js",
        ],
      },
    ],
  },
  {
    tier: "Working knowledge",
    description: "Used as needed or in a supporting role. I can work with these and ramp up quickly.",
    groups: [
      {
        domain: "Microsoft security, as needed at work",
        items: ["KQL", "Microsoft Defender XDR", "Microsoft Purview"],
      },
      {
        domain: "Other tools",
        items: ["SentinelOne", "Ansible", "Ubuntu Linux"],
      },
      {
        domain: "Frameworks and privacy",
        items: ["NIST Cybersecurity Framework", "CIS Controls and Benchmarks", "Zero Trust", "PIPEDA", "PHIPA"],
      },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/patrick-ngenzi-801193134/",
    handle: "patrick-ngenzi",
  },
  {
    label: "GitHub",
    href: "https://github.com/Ngenzipack",
    handle: "Ngenzipack",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
/** The three projects shown on the home page: one per security track. */
export const homeProjects = ["azure-iam-security-architecture", "intelligent-security-alert-triage-engine", "enterprise-network-segmentation-lab"]
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is ProjectItem => Boolean(p));
export const publishedCaseStudies = caseStudies.filter((c) => !c.draft);

export const resumeFiles = {
  cybersecurity: {
    label: "Cybersecurity resume (PDF)",
    href: "/resume/Patrick-Ngenzi-Resume-Cybersecurity.pdf",
  },
  network: {
    label: "Network security resume (PDF)",
    href: "/resume/Patrick-Ngenzi-Resume-Network-Security.pdf",
  },
  master: {
    label: "Master resume (PDF)",
    href: "/resume/Patrick-Ngenzi-Resume-Master.pdf",
  },
} as const;

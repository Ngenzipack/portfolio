export type PillarLink = {
  title: string;
  description: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  location?: string;
  summary?: string;
  highlights: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  period?: string;
  description: string;
  outcomes?: string[];
  technologies: string[];
  role?: string;
  links?: ProjectLink[];
  featured?: boolean;
  privateCode?: boolean;
};

export type SkillCategory = {
  category: string;
  description?: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer?: string;
  year?: string;
  status?: string;
};

export type ServiceItem = {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  outcome?: string;
};

export type TrustMarker = {
  value: string;
  label: string;
  description?: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period?: string;
  coursework?: string[];
};

export type Award = {
  year: string;
  title: string;
  issuer: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle?: string;
};

export const profile = {
  name: "Patrick Ngenzi",
  title: "Cybersecurity, IAM & Cloud Security Specialist",
  shortTitle: "Security Analyst & DevSecOps Engineer",
  subtitle:
    "Identity & Access Management - Cloud Security - Network Security",
  tagline:
    "Securing identity, cloud, endpoint, and network environments with practical controls.",
  intro:
    "Cybersecurity and DevSecOps professional with 5+ years across school-board, telecom, service-desk, client web, and privacy-sensitive environments. I secure Microsoft identity, Azure, endpoints, networks, and production web platforms while keeping documentation clear for the teams who operate them.",
  summary:
    "Cybersecurity, IAM, cloud-security, and network-security professional with hands-on experience in Entra ID, Active Directory, RBAC, MFA, Conditional Access, Azure VM/NSG hardening, Microsoft Defender, ESET, SolarWinds, firewall policy cleanup, wireless segmentation, vulnerability remediation, PowerShell automation, and secure web/server operations.",
  location: "North Bay, Ontario - Remote, hybrid, or on-site",
  office: {
    room: "Room 133",
    streetAddress: "790 Norman Ave",
    addressLocality: "North Bay",
    addressRegion: "ON",
    postalCode: "P1B 8C4",
    addressCountry: "CA",
    displayAddress: "790 Norman Ave, North Bay, ON P1B 8C4",
  },
  email: "ngenzipack@gmail.com",
  phoneVisible: false,
  availability: "Open to Security Analyst, DevSecOps, IAM, Cloud Security, SOC/NOC, and Network Security roles.",
  links: {
    portfolio: "https://ngenzi.neotha.com/",
    portfolioMirror: "https://ngenzipack.github.io/portfolio/",
    linkedin: "https://www.linkedin.com/in/patrick-ngenzi-801193134/",
    github: "https://github.com/Ngenzipack",
    chess: "https://link.chess.com/play/5x6NtV",
  },
  focusAreas: [
    "Identity and access governance with Microsoft Entra ID and Active Directory",
    "Azure cloud security, NSG hardening, Defender, Sentinel, ESET, and SolarWinds monitoring",
    "Network security, firewall cleanup, VPN, VLAN segmentation, WPA3, and wireless isolation",
    "DevSecOps, secure web platforms, hosting, client support, and server management",
  ],
  targetRoles: [
    "Security Analyst",
    "IAM Analyst",
    "Cloud Security Analyst",
    "DevSecOps Engineer",
    "SOC/NOC Analyst",
    "Network Security Administrator",
  ],
  beyondTech:
    "Outside of work I play chess and soccer, and I enjoy time at the piano.",
} as const;

export const trustMarkers: TrustMarker[] = [
  {
    value: "1,000+",
    label: "Endpoints supported",
    description: "Identity, endpoint, access, connectivity, and availability support in a multi-site public-sector environment.",
  },
  {
    value: "150+",
    label: "Monthly incidents mitigated",
    description: "Malware and security events triaged through ESET, SolarWinds, Defender-style workflows, and clear escalation notes.",
  },
  {
    value: "25%",
    label: "Firewall exposure reduced",
    description: "Policy cleanup and approved access-path validation while maintaining operational connectivity.",
  },
  {
    value: "5+",
    label: "Years in IT and security",
    description: "Hands-on across cybersecurity operations, IAM, cloud security, network support, and secure web platforms.",
  },
];

export const pillars: PillarLink[] = [
  {
    title: "Identity and Access",
    description:
      "Entra ID, Active Directory, RBAC, MFA, Conditional Access, onboarding/offboarding, and access review discipline.",
    href: "/services",
  },
  {
    title: "Cloud Security",
    description:
      "Azure VM, VNet, NSG, VPN Gateway, Microsoft Sentinel, Defender, and Log Analytics hardening.",
    href: "/projects",
  },
  {
    title: "Network Defense",
    description:
      "Fortinet and Palo Alto firewall cleanup, VLAN segmentation, WPA3, Aerohive WAPs, VPN, IDS/IPS concepts, and Wireshark validation.",
    href: "/experience",
  },
  {
    title: "DevSecOps and Server Operations",
    description:
      "PowerShell and Python automation, secure deployments, DNS/SSL/hosting support, client platforms, and operational runbooks.",
    href: "/skills",
  },
];

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Identity and Access Security",
    description:
      "Operate and improve Microsoft identity controls for least-privilege access, reliable user lifecycle workflows, and stronger authentication.",
    capabilities: [
      "Microsoft Entra ID and Active Directory",
      "RBAC, MFA, and Conditional Access",
      "Onboarding, offboarding, and stale-account cleanup",
      "Access reviews and privileged-access concepts",
    ],
    outcome:
      "Least-privilege access that is easier to audit and safer to operate, including 19% excessive-permission reduction in prior work.",
  },
  {
    number: "02",
    title: "Cloud and Endpoint Security Operations",
    description:
      "Harden Azure and endpoint environments while keeping monitoring, remediation, and patch follow-through practical for operations teams.",
    capabilities: [
      "Azure VM, VNet, subnet, NSG, and VPN Gateway hardening",
      "Microsoft Defender, M365 Defender, ESET, and SolarWinds workflows",
      "Microsoft Sentinel, Log Analytics, and suspicious authentication review",
      "Server patching and vulnerability remediation, including Log4j response",
    ],
    outcome:
      "Better visibility and faster response, including 150+ monthly security incidents mitigated and documented.",
  },
  {
    number: "03",
    title: "Network Security and Segmentation",
    description:
      "Strengthen hybrid and on-premises networks with secure access paths, segmented traffic, and validated firewall policy.",
    capabilities: [
      "Fortinet and Palo Alto firewall rule cleanup",
      "VLAN segmentation for staff, guest, IoT, VoIP, and server traffic",
      "WPA3 and Aerohive wireless isolation",
      "VPN, Wireshark validation, and IDS/IPS concepts",
    ],
    outcome:
      "Reliable networks with reduced attack surface, clearer approved flows, and stronger isolation between user and device groups.",
  },
  {
    number: "04",
    title: "DevSecOps, Client Platforms, and Server Management",
    description:
      "Build and maintain secure web platforms for clients while applying security thinking to frontend, backend, hosting, and server operations.",
    capabilities: [
      "Next.js, React, TypeScript, and secure frontend delivery",
      "Backend integration, DNS, SSL/TLS, hosting, and server administration",
      "PowerShell, Python, SQL log queries, and event-log collection",
      "Client support, troubleshooting, documentation, and deployment hygiene",
    ],
    outcome:
      "Production websites and services that customers can rely on, backed by practical server management and secure deployment habits.",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Intermediate IT System Support",
    organization: "Near North District School Board",
    period: "Nov 2023 - Present",
    location: "North Bay, Ontario",
    summary:
      "Support identity, endpoint protection, Azure hardening, user security training, and incident response across a multi-site public-sector environment.",
    highlights: [
      "Support 1,000+ endpoints while triaging endpoint-security, access, connectivity, and availability issues for teachers, administrators, and students.",
      "Operate SolarWinds and ESET monitoring; mitigate 150+ malware/security incidents monthly with remediation follow-through and clear escalation notes.",
      "Harden Azure virtual machines and NSG security rules while reviewing access exposure and Conditional Access alignment.",
      "Delivered phishing, password hygiene, MFA, and secure-browsing guidance for 12+ users/groups, reducing reported suspicious incidents by 30%.",
    ],
  },
  {
    role: "Network Specialist",
    organization: "Bell",
    period: "Jan 2022 - Dec 2023",
    location: "Hamilton, Ontario",
    summary:
      "Strengthened network security, IAM hygiene, wireless segmentation, and endpoint detection practices in a telecom-support environment.",
    highlights: [
      "Configured Fortinet and Palo Alto firewall rules and tightened policy exposure, reducing attack surface by 25% while preserving approved access paths.",
      "Implemented Entra ID RBAC and least-privilege controls, cutting excessive permissions by 19%; automated onboarding/offboarding with PowerShell.",
      "Secured Aerohive WAPs with WPA3 encryption and VLAN segmentation to isolate guest and IoT traffic.",
      "Configured Microsoft Defender for Endpoint workflows to detect, investigate, and isolate compromised devices.",
    ],
  },
  {
    role: "Technical Support Analyst I",
    organization: "SP Data Digital",
    period: "Feb 2020 - Jan 2022",
    location: "Hamilton, Ontario",
    summary:
      "Front-line incident response and secure access support for a high-volume customer environment.",
    highlights: [
      "Resolved 95% of Tier I/II tickets within 20 minutes, including account lockouts, access requests, endpoint issues, and security escalations.",
      "Patched 50+ servers for critical vulnerabilities, including Log4j, helping reduce exploit exposure and improve resilience.",
      "Reduced critical outages by 70% through proactive maintenance, documentation, escalation discipline, and repeatable troubleshooting protocols.",
      "Maintained secure access and customer-service discipline in a high-volume privacy-sensitive support environment.",
    ],
  },
  {
    role: "Property Manager",
    organization: "Independent Property Management",
    period: "Jan 2022 - Feb 2025",
    location: "North Bay, Ontario",
    summary:
      "Managed physical and digital access workflows while protecting tenant privacy and vendor accountability.",
    highlights: [
      "Assessed 10+ third-party vendors for PIPEDA-aligned data privacy practices.",
      "Protected sensitive tenant financial data and PII through access-control and confidentiality practices.",
      "Managed keycard, CCTV, and facilities access workflows using least-privilege and auditability principles.",
      "Coordinated vendor and stakeholder communication for security-critical maintenance windows.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "azure-iam-security-architecture",
    title: "Azure Hybrid Network and IAM Security Architecture",
    category: "Cloud Security / IAM / Sentinel",
    period: "2026",
    role: "Designer and Implementer",
    description:
      "Enterprise-style hybrid security architecture for an education environment. The project combines segmented Azure VNets, simulated on-prem connectivity, Entra ID governance, Conditional Access, RBAC, MFA, and Microsoft Sentinel detections.",
    outcomes: [
      "Designed two VNets, eight subnets, VPN Gateway connectivity, and 15+ NSG rules to separate Staff, Students, Servers, and gateway traffic.",
      "Implemented 30 governed identities across Staff, Student, and IT Admin groups with MFA, blocked legacy authentication, compliant-device requirements, and least-privilege RBAC.",
      "Documented Sentinel and Log Analytics detections for failed logins, risky sign-ins, and authentication review using KQL-backed alert logic.",
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
    featured: true,
  },
  {
    slug: "enterprise-network-segmentation-lab",
    title: "Enterprise Network Segmentation and Security Lab",
    category: "Network Security / Segmentation",
    period: "2024",
    role: "Lab Architect",
    description:
      "Network-defense case study focused on segmentation, firewall policy design, and validation. It models how staff, student, guest, IoT, VoIP, and server traffic should be isolated and tested in an enterprise environment.",
    outcomes: [
      "Mapped topology, trust boundaries, and approved flows so firewall rules are tied to business purpose instead of open-ended access.",
      "Modeled guest and IoT isolation to reduce lateral-movement risk across unmanaged devices and user groups.",
      "Created a repeatable validation approach for firewall policy design, packet-flow testing, rollback, and Wireshark evidence.",
    ],
    technologies: [
      "Cisco",
      "Fortinet",
      "VLAN",
      "Site-to-Site VPN",
      "Wireshark",
      "Firewall Policy Design",
    ],
    featured: true,
  },
  {
    slug: "neotha-secure-product-engineering",
    title: "Neotha - Owner-Led Platform, Client Support, and Server Operations",
    category: "DevSecOps / Full-Stack / Operations",
    period: "Ongoing",
    role: "Owner, Founder, and Lead Engineer",
    description:
      "Owner-led technology platform and client-service work where I build frontend and backend systems, support customers, manage hosting/server environments, and apply secure deployment habits to live business platforms.",
    outcomes: [
      "Deliver production websites and client systems with React/Next.js, TypeScript, backend integration, SEO metadata, responsive UI, and accessibility-aware interfaces.",
      "Manage DNS, SSL/TLS, hosting configuration, deployment troubleshooting, uptime support, and customer requests for live services.",
      "Apply security-minded operations: environment separation, dependency hygiene, least-privilege access, backups, documentation, and careful change management.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Backend Integration",
      "DNS",
      "SSL/TLS",
      "Server Management",
      "Hosting",
      "DevSecOps",
    ],
    links: [
      {
        label: "Visit neotha.com",
        href: "https://www.neotha.com/",
      },
    ],
    featured: true,
    privateCode: true,
  },
  {
    slug: "network-monitoring-automation",
    title: "Network Monitoring and Security Automation Initiative",
    category: "Security Operations / Automation",
    period: "2023",
    role: "Operations Engineer",
    description:
      "Monitoring and automation initiative shaped around real support work: availability signals, security follow-up, stale-account review, event-log collection, and repeatable documentation for faster troubleshooting.",
    outcomes: [
      "Used SolarWinds/PRTG-style monitoring patterns to centralize availability and operational security signals.",
      "Built PowerShell workflows for provisioning review, stale-account checks, event-log collection, and access-audit follow-up.",
      "Improved repeatability with documented checks that reduce manual workload and make security follow-through easier to hand off.",
    ],
    technologies: [
      "SolarWinds",
      "PRTG",
      "PowerShell",
      "Event Logs",
      "Access Review",
      "Security Auditing",
      "User Lifecycle Automation",
    ],
    featured: true,
    privateCode: true,
  },
  {
    slug: "nkurunziza-client-platform",
    title: "Nkurunziza - Client Web Platform and Hosting Support",
    category: "Client Platform / Full-Stack Delivery",
    period: "Ongoing",
    role: "Full-Stack Developer and Server Manager",
    description:
      "Client-facing web platform delivered with frontend/backend ownership, hosting, and operational support. This project demonstrates client communication, production reliability, deployment discipline, and secure server-management habits.",
    outcomes: [
      "Built and maintained a live web experience with clean navigation, responsive UI, and public-facing business reliability.",
      "Handled deployment, DNS/SSL alignment, hosting configuration, server updates, and customer support for ongoing operations.",
      "Applied practical security controls around access, backups, change discipline, and production troubleshooting.",
    ],
    technologies: [
      "Frontend Development",
      "Backend Support",
      "Responsive UI",
      "Hosting",
      "DNS",
      "SSL/TLS",
      "Server Management",
      "Client Support",
    ],
    links: [
      {
        label: "Visit nkurunziza.ca",
        href: "https://nkurunziza.ca/en/",
      },
    ],
    privateCode: true,
  },
  {
    slug: "sylva-renovations-client-website",
    title: "Sylva Renovations - Client Website and Hosting Operations",
    category: "Client Website / Hosting Operations",
    period: "Ongoing",
    role: "Full-Stack Developer and Server Manager",
    description:
      "Client website built and maintained for Sylva Renovations, with professional frontend delivery, backend/hosting support, SSL/TLS configuration, DNS alignment, and ongoing production troubleshooting.",
    outcomes: [
      "Delivered a clean public-facing website that presents the client professionally and works across desktop and mobile screens.",
      "Handled hosting setup, DNS, SSL/TLS, deployment updates, and operational support for the live business site.",
      "Applied the same security-minded habits I use in IT work: controlled access, careful changes, backups, documentation, and reliable client communication.",
    ],
    technologies: [
      "Frontend Development",
      "Responsive UI",
      "Backend Support",
      "Hosting",
      "DNS",
      "SSL/TLS",
      "Server Management",
      "Client Support",
    ],
    links: [
      {
        label: "Visit sylvarenovations.ca",
        href: "https://www.sylvarenovations.ca/",
      },
    ],
    privateCode: true,
  },
  {
    slug: "expense-tracker-product",
    title: "Expense Tracker - Roommate Receipt and Cost-Sharing App",
    category: "Product Engineering / Data Workflow",
    period: "2026",
    role: "Full-Stack Developer",
    description:
      "Private full-stack application for shared household expenses. The app is designed around receipt upload, monthly review, total tracking, and cleaner cost-splitting between roommates.",
    outcomes: [
      "Organized a real workflow around uploads, totals, monthly review, and shared accountability instead of manual tracking.",
      "Shows practical product thinking: user input, data capture, privacy-sensitive records, and clear monthly summaries.",
      "Adds backend/data-handling experience that supports secure web and DevSecOps positioning.",
    ],
    technologies: [
      "TypeScript",
      "Frontend Development",
      "Backend Integration",
      "File Upload",
      "Data Modeling",
      "Privacy-Aware Handling",
      "GitHub",
    ],
    privateCode: true,
  },
  {
    slug: "portfolio-github-pages-pipeline",
    title: "Portfolio - Next.js Static Export and GitHub Pages Pipeline",
    category: "DevSecOps / CI/CD / Portfolio",
    period: "2026",
    role: "Developer and Maintainer",
    description:
      "This portfolio is maintained as a professional public GitHub project using Next.js, TypeScript, static export, GitHub Actions, and GitHub Pages deployment under the /portfolio path.",
    outcomes: [
      "Configured one clean public repository for hiring review with a GitHub Pages deployment workflow and static export output.",
      "Built recruiter-focused case-study pages with direct links, resume download, responsive navigation, dark mode, and no fake contact backend.",
      "Verified linting, production builds, route base paths, metadata, and generated static assets for Pages hosting.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "GitHub Actions",
      "GitHub Pages",
      "Static Export",
      "SEO Metadata",
    ],
    links: [
      {
        label: "View live portfolio",
        href: "https://ngenzipack.github.io/portfolio/",
      },
      {
        label: "View repository",
        href: "https://github.com/Ngenzipack/portfolio",
      },
    ],
  },
  {
    slug: "python-engineering-foundations",
    title: "Python Engineering Foundations",
    category: "Programming Fundamentals / GitHub Practice",
    period: "2023",
    role: "Developer",
    description:
      "Public Python projects that show core programming fundamentals: formatting, date/time logic, probability simulation, object-oriented geometry, and budget/category tracking.",
    outcomes: [
      "Built small, readable Python utilities with testable logic and clear problem boundaries.",
      "Practiced object-oriented design, data formatting, arithmetic rules, probability simulation, and command-line style problem solving.",
      "Maintains a public GitHub trail of programming foundations that supports broader engineering credibility.",
    ],
    technologies: [
      "Python",
      "Object-Oriented Programming",
      "Data Structures",
      "Simulation",
      "Testing",
      "Git",
      "GitHub",
    ],
    links: [
      {
        label: "Budget App",
        href: "https://github.com/Ngenzipack/Budget-App",
      },
      {
        label: "Probability Calculator",
        href: "https://github.com/Ngenzipack/Probability-Calculator",
      },
      {
        label: "Polygon Area Calculator",
        href: "https://github.com/Ngenzipack/Polygon-Area-Calculator",
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Computer Engineering Technology",
    institution: "Mohawk College",
    period: "Graduate",
    coursework: [
      "Advanced Networks",
      "Server Administration",
      "Web Security",
      "Operating Systems",
      "Programming Foundations",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    year: "Certified",
  },
  {
    name: "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    year: "Certified",
  },
  {
    name: "Microsoft SC-300: Identity and Access Administrator",
    issuer: "Microsoft",
    status: "In Progress",
  },
];

export const awards: Award[] = [
  {
    year: "2026",
    title: "Published Azure IAM Security Architecture reference project",
    issuer: "GitHub - Ngenzipack/Azure-IAM-Security-Architecture",
  },
  {
    year: "2024",
    title: "Reduced reported suspicious incidents by 30% through security awareness training",
    issuer: "Near North District School Board",
  },
  {
    year: "2023",
    title: "Reduced firewall attack surface by 25% and excessive permissions by 19%",
    issuer: "Bell",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Cloud Security",
    description:
      "Building, segmenting, and monitoring secure environments on Microsoft Azure.",
    items: [
      "Microsoft Azure (VM, VNet, NSG, VPN Gateway)",
      "Microsoft Sentinel and Log Analytics",
      "Microsoft 365 Defender",
      "Microsoft Defender for Endpoint",
      "ESET endpoint protection",
      "SolarWinds monitoring",
      "Hybrid connectivity",
      "Server patching and vulnerability remediation",
    ],
  },
  {
    category: "Identity and Access Management",
    description:
      "Designing and operating identity controls aligned to least privilege.",
    items: [
      "Microsoft Entra ID",
      "Conditional Access",
      "Multi-Factor Authentication",
      "Role-based access control",
      "Privileged Identity Management",
      "Active Directory",
      "Access reviews",
      "Onboarding and offboarding",
      "Stale-account cleanup",
    ],
  },
  {
    category: "Network Defense",
    description:
      "Hardening and monitoring on-premises and hybrid network paths.",
    items: [
      "Fortinet and Palo Alto firewalls",
      "IDS and IPS tuning",
      "VPN (site-to-site and remote access)",
      "Aerohive WAPs",
      "WPA3 and guest/IoT isolation",
      "VLAN segmentation",
      "Packet analysis with Wireshark",
    ],
  },
  {
    category: "DevSecOps and Automation",
    description:
      "Automating security operations and applying engineering rigor to controls.",
    items: [
      "PowerShell scripting",
      "Python security scripting",
      "Bash and shell tooling",
      "SQL log querying",
      "Event-log collection",
      "Git and GitHub workflows",
      "Ticketing and SLA documentation",
    ],
  },
  {
    category: "Software and Web",
    description:
      "Modern web engineering applied with a security-first delivery mindset.",
    items: [
      "TypeScript",
      "JavaScript",
      "React and Next.js",
      "Java",
      "C#",
      "Tailwind CSS",
      "Backend integration",
      "DNS, SSL/TLS, and hosting operations",
      "Server management",
      "Client support",
      "Accessibility-aware UI",
    ],
  },
  {
    category: "Frameworks and Standards",
    description:
      "Working knowledge of frameworks used to align controls with risk.",
    items: [
      "NIST Cybersecurity Framework",
      "CIS Benchmarks",
      "Zero Trust principles",
      "PIPEDA and privacy-aware handling",
      "Audit-ready documentation",
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
  {
    label: "Email",
    href: "mailto:ngenzipack@gmail.com",
    handle: "ngenzipack@gmail.com",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const supportingProjects = projects.filter((project) => !project.featured);

export const projects = [
  {
    id: 1,
    title: "AutoFlow AI & System Automation Engine",
    subtitle: "Enterprise event-driven workflow orchestrator with self-healing automation loops",
    size: "md:col-span-2",
    category: "System Automation",
    tags: ["Advanced System Automation", "AI Workflow", "Node.js", "Python", "Kubernetes", "Redis"],
    metrics: "10M+ Executions/Day • 99.99% Uptime",
    description:
      "Architected an autonomous workflow orchestration platform that connects legacy backend pipelines with AI decision agents. Automates infrastructure failover, dynamic scaling, and complex multi-step enterprise business processes.",
    features: [
      "Event-driven trigger pipelines with real-time telemetry and dead-letter handling",
      "Self-healing system scripts reducing manual DevOps incidents by 85%",
      "Visual drag-and-drop workflow builder backed by deterministic execution DAGs",
      "Automated compliance auditing with instant slack & email alerts"
    ],
    accent: "from-blue-600/30 via-indigo-600/20 to-slate-800/10",
    badgeColor: "accent",
    demoUrl: "https://autoflow-automation.example.com",
    githubUrl: "https://github.com/developer/autoflow-automation-engine",
    featured: true
  },
  {
    id: 2,
    title: "Agentic AI Multi-Step Workflow Hub",
    subtitle: "LLM agent orchestration framework with RAG vector search & dynamic tools",
    size: "md:col-span-1",
    category: "AI Workflow",
    tags: ["AI Workflow", "Full-Stack Development", "React", "FastAPI", "Pinecone", "LangChain"],
    metrics: "120ms Vector Retrieval • 4.9★ Rating",
    description:
      "A full-stack agentic platform enabling teams to create, test, and deploy customized AI workflows. Features dynamic prompt chaining, document embedding vector search, and automated code generation.",
    features: [
      "Multi-agent task delegation with streaming response visualization",
      "Hybrid RAG architecture indexing unstructured enterprise documents",
      "Human-in-the-loop review nodes for critical decision gates"
    ],
    accent: "from-cyan-500/20 via-blue-600/20 to-teal-500/10",
    badgeColor: "cyan",
    demoUrl: "https://ai-workflow-hub.example.com",
    githubUrl: "https://github.com/developer/ai-workflow-hub",
    featured: true
  },
  {
    id: 3,
    title: "ScaleDeck Full-Stack SaaS Platform",
    subtitle: "High-throughput cloud portal with real-time analytics & Stripe billing",
    size: "md:col-span-1",
    category: "Full-Stack Development",
    tags: ["Full-Stack Development", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    metrics: "500k+ Active Users • Sub-100ms API",
    description:
      "End-to-end full-stack cloud application featuring decoupled microservices, role-based access control (RBAC), subscription management, and responsive real-time data dashboards.",
    features: [
      "Serverless GraphQL API layer with Redis edge caching",
      "Responsive accessible interface with dark/light mode and micro-interactions",
      "Automated subscription lifecycle webhooks via Stripe"
    ],
    accent: "from-indigo-500/20 via-slate-600/20 to-blue-500/10",
    badgeColor: "emerald",
    demoUrl: "https://scaledeck-platform.example.com",
    githubUrl: "https://github.com/developer/scaledeck-fullstack",
    featured: false
  },
  {
    id: 4,
    title: "DevOps & Infrastructure Automation Matrix",
    subtitle: "Automated Kubernetes cluster provisioning & CI/CD deployment pipelines",
    size: "md:col-span-2",
    category: "System Automation",
    tags: ["Advanced System Automation", "Full-Stack Development", "Docker", "Terraform", "Go", "GraphQL"],
    metrics: "Zero-Downtime Releases • 90% Faster CI",
    description:
      "Built a unified developer portal and automation control plane that provisions multi-region infrastructure using Terraform and GitOps. Streamlines code delivery from git commit to production.",
    features: [
      "Automated canary deployments with eBPF metrics verification",
      "Interactive dependency graph rendering cluster state in real time",
      "One-click environment teardown and policy enforcement"
    ],
    accent: "from-sky-600/25 via-blue-700/20 to-slate-900/10",
    badgeColor: "accent",
    demoUrl: "https://automation-matrix.example.com",
    githubUrl: "https://github.com/developer/automation-matrix",
    featured: true
  },
  {
    id: 5,
    title: "AI Automation Copilot & Document Pipeline",
    subtitle: "Automated OCR, semantic extraction, and AI agent output processing",
    size: "md:col-span-3",
    category: "AI Workflow",
    tags: ["AI Workflow", "Advanced System Automation", "Full-Stack Development", "Python", "React", "TypeScript"],
    metrics: "1M+ Documents Processed • 99.4% Accuracy",
    description:
      "An end-to-end AI workflow system that ingests unstructured PDF contracts, extracts key metadata with high precision LLMs, and triggers automated ERP synchronization.",
    features: [
      "Asynchronous celery queue workers for batch AI document extraction",
      "Full-stack React review interface with side-by-side OCR highlight verification",
      "Automated fallback routes to manual review queues upon low confidence scores",
      "Webhooks integrating with SAP, Salesforce, and custom ERPs"
    ],
    accent: "from-blue-600/25 via-cyan-600/20 to-indigo-500/15",
    badgeColor: "accent",
    demoUrl: "https://ai-copilot-pipeline.example.com",
    githubUrl: "https://github.com/developer/ai-copilot-pipeline",
    featured: true
  }
];

export default projects;

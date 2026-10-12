export const experiences = [
  {
    id: "exp-1",
    role: "Staff Frontend Architect",
    company: "Vanguard Cloud Systems",
    period: "2023 — Present",
    location: "San Francisco, CA (Hybrid)",
    summary:
      "Spearheading the core UI architecture across 12 distributed product squads. Modernized enterprise dashboard systems to reactive micro-frontends with Framer Motion and Tailwind.",
    highlights: [
      "Engineered an enterprise design system utilized across 40+ production micro-apps, reducing developer cycle time by 42%.",
      "Architected sub-100ms real-time telemetry dashboards handling millions of concurrent events.",
      "Mentored 18 senior engineers on web performance, accessibility standards (WCAG AAA), and resilient client state management."
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "GraphQL", "WebSockets"]
  },
  {
    id: "exp-2",
    role: "Senior Full-Stack Engineer",
    company: "HyperScale Networks",
    period: "2021 — 2023",
    location: "Austin, TX (Remote)",
    summary:
      "Led high-impact initiatives across the edge infrastructure team, building scalable developer tooling, self-healing deployment pipelines, and analytics consoles.",
    highlights: [
      "Redesigned the primary customer onboarding pipeline, accelerating time-to-first-deploy from 15 minutes to 90 seconds.",
      "Authored distributed caching layers in Redis and Node.js that slashed edge compute expenses by $180k/year.",
      "Pioneered zero-downtime Blue/Green release orchestration across Kubernetes clusters."
    ],
    skills: ["Node.js", "React", "Next.js", "Go", "Docker", "Kubernetes", "PostgreSQL"]
  },
  {
    id: "exp-3",
    role: "Frontend Systems Engineer",
    company: "Aetherial Labs",
    period: "2019 — 2021",
    location: "New York, NY",
    summary:
      "Built interactive data visualization interfaces and algorithmic portfolio modeling tools for quantitative trading desks.",
    highlights: [
      "Implemented Canvas and WebGL visualizers rendering 100,000+ real-time tick markers at 60 FPS.",
      "Standardized atomic state stores with optimistic updates, virtually eliminating perceived UI latency.",
      "Collaborated closely with financial quants to convert mathematical models into interactive web simulations."
    ],
    skills: ["React", "TypeScript", "Canvas/WebGL", "RxJS", "D3.js", "Jest"]
  }
];

export default experiences;

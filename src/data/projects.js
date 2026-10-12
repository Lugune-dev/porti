export const projects = [
  {
    id: 1,
    title: "E-Commerce App",
    subtitle: "High-throughput headless commerce platform with sub-100ms checkout",
    size: "md:col-span-2",
    tags: ["React", "Node", "Next.js", "Redis", "Stripe"],
    metrics: "450k+ Monthly Orders • 99.99% Uptime",
    description:
      "Engineered an enterprise headless commerce orchestrator handling dynamic flash sales, edge-cached inventory sync, and real-time checkout pipelines. Reduced basket abandonment by 24% through instant optimistic cart mutations.",
    features: [
      "Edge-computed inventory locking via Redis pub/sub",
      "Stripe payment orchestrator with automated multi-currency settlement",
      "Dynamic Bento analytics dashboard with zero-latency streaming updates",
      "Sub-second global search indexing via Meilisearch"
    ],
    accent: "from-violet-600/30 via-indigo-600/20 to-purple-600/10",
    badgeColor: "accent",
    demoUrl: "https://ecommerce-preview.example.com",
    githubUrl: "https://github.com/developer/ecommerce-engine",
    featured: true
  },
  {
    id: 2,
    title: "Crypto Tracker",
    subtitle: "Real-time algorithmic orderbook & portfolio telemetry",
    size: "md:col-span-1",
    tags: ["React", "WebSockets", "Tailwind", "Chart.js"],
    metrics: "12ms Tick Latency • 50+ DEX Feeds",
    description:
      "A high-frequency cryptocurrency telemetry suite that multiplexes low-latency WebSockets streams from major liquidity pools. Features zero-jank Canvas charts and custom alert triggers.",
    features: [
      "Bi-directional WebSocket streaming with auto-reconnect backoff",
      "Spring-animated candlestick visualizer with GPU acceleration",
      "Zero-latency portfolio profit/loss computation engines"
    ],
    accent: "from-cyan-500/20 via-blue-600/20 to-teal-500/10",
    badgeColor: "cyan",
    demoUrl: "https://cryptotracker-preview.example.com",
    githubUrl: "https://github.com/developer/crypto-streamer",
    featured: false
  },
  {
    id: 3,
    title: "AI Canvas Studio",
    subtitle: "Multi-agent generative design and canvas workflow system",
    size: "md:col-span-1",
    tags: ["TypeScript", "Python", "FastAPI", "Radix UI"],
    metrics: "85k Active Workspaces • 4.9★ Rating",
    description:
      "Collaborative infinite-canvas workspace uniting multimodal LLM agents with deterministic layout trees. Empowers design teams to prototype fluid user interfaces in real time.",
    features: [
      "CRDT-based conflict-free multiplayer canvas synchronization",
      "Context-aware AI node generation with vector retrieval",
      "Export directly to clean Tailwind CSS and React codebases"
    ],
    accent: "from-emerald-500/20 via-teal-600/20 to-green-500/10",
    badgeColor: "emerald",
    demoUrl: "https://aicanvas.example.com",
    githubUrl: "https://github.com/developer/ai-canvas-studio",
    featured: false
  },
  {
    id: 4,
    title: "DevOps Observability Matrix",
    subtitle: "Distributed tracing aggregator for multi-cloud Kubernetes clusters",
    size: "md:col-span-2",
    tags: ["React", "Go", "GraphQL", "OpenTelemetry", "Docker"],
    metrics: "1.2B Events/Day • Zero-overhead Agent",
    description:
      "Unified observability control plane providing instant correlation across distributed traces, p99 latency spikes, and microservice mesh anomalies across AWS, GCP, and bare-metal nodes.",
    features: [
      "Interactive dependency graph visualization with WebGL",
      "Automated root-cause anomaly detection alerts via eBPF probes",
      "Real-time cluster health heatmaps with sub-second refreshes"
    ],
    accent: "from-purple-600/25 via-pink-600/20 to-rose-600/10",
    badgeColor: "accent",
    demoUrl: "https://matrix-ops.example.com",
    githubUrl: "https://github.com/developer/matrix-observability",
    featured: true
  },
  {
    id: 5,
    title: "Neural Audio Workstation",
    subtitle: "In-browser WebAudio DAW with neural DSP voice filters",
    size: "md:col-span-3",
    tags: ["WebAssembly", "WebAudio API", "React", "Framer Motion", "Rust"],
    metrics: "4.2ms Audio Buffer • Studio-grade Quality",
    description:
      "A complete digital audio workstation engineered in the browser. Powered by Rust compiled to WebAssembly for DSP audio processing with zero dropouts, responsive spring dials, and dynamic spectral analysis.",
    features: [
      "Lock-free AudioWorklet thread orchestrating DSP effects",
      "Framer Motion elastic knob & slider controls with physical inertia",
      "Real-time FFT audio visualizer rendering 60fps waveform cascades",
      "Cloud project synchronization with lossless FLAC export"
    ],
    accent: "from-indigo-600/25 via-violet-600/20 to-cyan-500/15",
    badgeColor: "accent",
    demoUrl: "https://neural-daw.example.com",
    githubUrl: "https://github.com/developer/neural-daw",
    featured: true
  }
];

export default projects;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow,
  Code2,
  Bot,
  Zap,
  CheckCircle2,
  ArrowRight,
  Database,
  GitBranch,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";

export default function SkillPlayground({ onOpenContact }) {
  const [activeSkill, setActiveSkill] = useState("automation");

  const skillData = {
    automation: {
      title: "Advanced System Automation",
      category: "Infrastructure & Orchestration",
      description:
        "Autonomous event-driven engines, self-healing CI/CD deployment pipelines, automated Kubernetes cluster orchestration, and zero-downtime failovers.",
      metrics: ["10M+ Executions/Day", "99.99% Uptime SLA", "85% Incident Reduction"],
      capabilities: [
        "Event-Driven Trigger Mesh & Queue Handling",
        "Automated Multi-Region Failover & Disaster Recovery",
        "Infrastructure as Code (Terraform / Docker / Helm)",
        "Zero-Downtime Blue/Green Release Pipelines",
      ],
      codeSnippet: `// Event-driven System Automation Trigger
const pipeline = new AutomationPipeline({
  trigger: "cloud_event_webhook",
  retryPolicy: { maxAttempts: 5, backoffMs: 250 },
});

pipeline.on("deploy_failure", async (event) => {
  await AutoRecoveryAgent.rollbackToHealthCheck({
    clusterId: event.clusterId,
    targetRevision: event.previousRevision,
  });
});`,
      accentColor: "border-blue-500/50 text-blue-400 bg-blue-950/20",
      pillBg: "bg-blue-600",
    },
    fullstack: {
      title: "Full-Stack Web Development",
      category: "Frontend & Microservice Systems",
      description:
        "High-scale web applications engineered with React 19, TypeScript, Next.js, Python FastAPI, and Node.js microservices for sub-100ms response times.",
      metrics: ["1.2B+ Requests/Mo", "Sub-100ms Latency", "WCAG AAA Accessible"],
      capabilities: [
        "Fluid React Interfaces & Spring Animations",
        "High-Throughput Node.js & FastAPI REST/GraphQL APIs",
        "Relational & Document Databases (PostgreSQL, Redis)",
        "State Management & Optimistic UI Mutations",
      ],
      codeSnippet: `// High-Performance Full-Stack API Route
export async function GET(req: Request) {
  const session = await auth();
  const cachedData = await redis.get(\`user_\${session.id}\`);

  if (cachedData) return Response.json(JSON.parse(cachedData));

  const dataset = await db.select().from(users).where(eq(users.id, session.id));
  await redis.set(\`user_\${session.id}\`, JSON.stringify(dataset), "EX", 300);

  return Response.json(dataset);
}`,
      accentColor: "border-sky-500/50 text-sky-400 bg-sky-950/20",
      pillBg: "bg-sky-600",
    },
    ai: {
      title: "AI Workflow Integration",
      category: "Agentic Systems & RAG Pipelines",
      description:
        "Production AI workflows connecting multimodal LLMs, vector database retrieval (RAG), dynamic prompt chaining, and automated document extraction.",
      metrics: ["120ms Vector Retrieval", "99.4% Extraction Precision", "Multi-Agent Support"],
      capabilities: [
        "Multi-Agent Dynamic Task Delegation Frameworks",
        "Hybrid RAG Vector Search (Pinecone, Qdrant, ChromaDB)",
        "Automated Contract & PDF Semantic Extraction",
        "Human-in-the-Loop Verification & Fallback Logic",
      ],
      codeSnippet: `// Agentic AI Workflow Execution Node
const agent = new WorkflowAgent({
  model: "gpt-4o-mini",
  vectorStore: new PineconeStore({ index: "enterprise-docs" }),
});

const result = await agent.executePipeline({
  task: "extract_contract_clauses",
  inputDocument: pdfBuffer,
  confidenceThreshold: 0.95,
});`,
      accentColor: "border-indigo-500/50 text-indigo-400 bg-indigo-950/20",
      pillBg: "bg-indigo-600",
    },
  };

  const current = skillData[activeSkill];

  return (
    <section id="skills-playground" className="py-20 relative bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <GitBranch className="h-3.5 w-3.5" /> Interactive Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Core Skill Matrix & Systems Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Select a core domain below to inspect live code patterns, capability metrics, and architectural specifications.
          </p>
        </div>

        {/* Skill Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveSkill("automation")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeSkill === "automation"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700"
            }`}
          >
            <Workflow className="h-4 w-4" />
            <span>Advanced System Automation</span>
          </button>

          <button
            onClick={() => setActiveSkill("fullstack")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeSkill === "fullstack"
                ? "bg-sky-600 text-white shadow-lg shadow-sky-600/30"
                : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700"
            }`}
          >
            <Code2 className="h-4 w-4" />
            <span>Full-Stack Development</span>
          </button>

          <button
            onClick={() => setActiveSkill("ai")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeSkill === "ai"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700"
            }`}
          >
            <Bot className="h-4 w-4" />
            <span>AI Workflow Integration</span>
          </button>
        </div>

        {/* Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkill}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className={`p-6 sm:p-10 rounded-3xl bg-slate-900/90 border ${current.accentColor} backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
          >
            {/* Left Column: Details & Capabilities */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {current.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                  {current.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {current.description}
              </p>

              {/* Key Metrics Row */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {current.metrics.map((m, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-950 border border-slate-800 text-slate-200"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Capability Checklist */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Core Engineering Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span className="leading-tight">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <Button
                  size="sm"
                  variant="primary"
                  onClick={onOpenContact}
                  className="shadow-md shadow-blue-600/20 text-xs"
                >
                  <span>Request System Architecture Call</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Button>
              </div>
            </div>

            {/* Right Column: Code Snippet Display */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-blue-400" />
                    architecture-pattern.ts
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <pre className="p-4 text-[11px] sm:text-xs font-mono text-slate-200 leading-relaxed overflow-x-auto selection:bg-blue-600">
                  <code>{current.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

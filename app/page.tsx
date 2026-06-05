import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Cloud,
  Code2,
  Database,
  Factory,
  FileCheck2,
  Github,
  HardHat,
  Layers3,
  Linkedin,
  LockKeyhole,
  Mail,
  Map,
  Menu,
  Microscope,
  Network,
  Play,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TimerReset,
  Workflow,
  Zap,
} from "lucide-react";
import { FadeIn, MetricCounter, MotionDiv, MotionSection } from "@/components/motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  ["Constracker", "#constracker"],
  ["Expertise", "#expertise"],
  ["Projects", "#projects"],
  ["Case Studies", "#case-studies"],
  ["Roadmap", "#roadmap"],
  ["Contact", "#contact"],
];

const metrics = [
  { value: 8, suffix: "+", label: "Years across engineering and software" },
  { value: 24, suffix: "+", label: "Digital systems and project workflows shipped" },
  { value: 3, suffix: "x", label: "Founder focus: safety, planning, execution" },
  { value: 2026, suffix: "", label: "Building for the next generation jobsite" },
];

const constrackerFeatures = [
  {
    icon: ShieldCheck,
    title: "Safety intelligence",
    body: "Turn inspections, incidents, observations, and permits into a live risk picture for every site.",
  },
  {
    icon: CalendarDays,
    title: "Planning control",
    body: "Connect schedules, lookaheads, manpower, and constraints so teams see blockers before they hit the field.",
  },
  {
    icon: ClipboardCheck,
    title: "Execution tracking",
    body: "Capture progress, QA/QC status, punch lists, and site decisions in one operational record.",
  },
  {
    icon: BarChart3,
    title: "Founder dashboards",
    body: "Give owners and project leaders board-level clarity without pulling reports from disconnected tools.",
  },
];

const expertise = [
  {
    icon: Building2,
    title: "Construction systems thinking",
    body: "Translates site operations, safety controls, planning rituals, and engineering handoffs into practical software workflows.",
  },
  {
    icon: Workflow,
    title: "SaaS product architecture",
    body: "Designs repeatable modules for project records, approvals, analytics, permissions, notifications, and field capture.",
  },
  {
    icon: Code2,
    title: "Full-stack execution",
    body: "Builds responsive interfaces, APIs, databases, automation, and deployment paths with a bias for reliable products.",
  },
  {
    icon: Radar,
    title: "Operational analytics",
    body: "Surfaces leading indicators for delays, quality drift, safety exposure, and decision bottlenecks.",
  },
];

const stack = [
  ["Frontend", "Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion"],
  ["Product Systems", "Design systems, dashboards, mobile-first field tools, role-based workflows"],
  ["Data Layer", "PostgreSQL, Prisma patterns, structured project records, audit-ready reporting"],
  ["Cloud", "Vercel, serverless APIs, storage, auth, observability, automated releases"],
  ["Engineering", "CAD/BIM literacy, construction planning, QA/QC, safety documentation"],
  ["AI Direction", "Risk signals, document intelligence, schedule insight, site assistant concepts"],
];

const projects = [
  {
    title: "Constracker Command Center",
    type: "Flagship SaaS",
    body: "An intelligent construction management operating layer for safety, planning, field reporting, and executive visibility.",
    tags: ["SaaS", "Construction Ops", "Analytics"],
  },
  {
    title: "Safety Permit Flow",
    type: "Workflow System",
    body: "Digitized high-risk work permits, toolbox checks, approvals, and compliance traces for field teams.",
    tags: ["Safety", "Approvals", "Mobile"],
  },
  {
    title: "Project Pulse Dashboard",
    type: "Executive Reporting",
    body: "A leadership dashboard that turns daily field activity into schedule, manpower, and risk signals.",
    tags: ["Dashboards", "KPIs", "Planning"],
  },
];

const caseStudies = [
  {
    title: "From static reports to live project control",
    result: "Reduced reporting lag from days to same-day visibility.",
    body: "Reframed construction updates as structured events, allowing leadership to track blockers, progress, and safety exposure as the work happens.",
  },
  {
    title: "Safety workflows built for field adoption",
    result: "Designed mobile-first capture for high-friction jobsite routines.",
    body: "Simplified forms, approvals, and evidence capture so safety data becomes useful operational intelligence instead of paperwork after the fact.",
  },
  {
    title: "Founder-led product discovery",
    result: "Converted engineering experience into a SaaS roadmap.",
    body: "Mapped construction pain points into product modules with clear buyer value: risk reduction, planning accuracy, and execution discipline.",
  },
];

const roadmap = [
  ["Q1", "Constracker MVP", "Safety logs, project dashboards, issue tracking, and role-based workspaces."],
  ["Q2", "Planning Engine", "Lookahead planning, constraints, manpower tracking, and delay reason intelligence."],
  ["Q3", "AI Field Assistant", "Document search, daily report drafting, risk prompts, and decision summaries."],
  ["Q4", "Enterprise Readiness", "Integrations, audit trails, advanced permissions, and multi-project portfolio views."],
];

const testimonials = [
  {
    quote:
      "Agosto brings a rare blend of engineering discipline and product judgment. He understands the jobsite and can turn that reality into software people will actually use.",
    name: "Construction Operations Lead",
  },
  {
    quote:
      "The strongest part of his product thinking is clarity. He can connect safety, planning, and execution into one system instead of treating them as separate admin tasks.",
    name: "Project Management Consultant",
  },
  {
    quote:
      "Constracker feels built by someone who has lived the operational pressure of construction, not by a team guessing from the outside.",
    name: "Early Product Reviewer",
  },
];

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <FadeIn className="mx-auto mb-10 max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-primary dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-ink/[0.68] dark:text-white/[0.68]">{body}</p>
    </FadeIn>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-primary/10 bg-primary/[0.03] px-3 py-1 text-xs font-semibold text-primary/[0.74] dark:border-white/10 dark:bg-white/[0.06] dark:text-white/[0.74]">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-ink dark:bg-[#061423] dark:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-white/[0.86] backdrop-blur-xl dark:border-white/10 dark:bg-[#061423]/[0.86]">
        <nav className="section-shell flex h-16 items-center justify-between gap-4">
          <a href="#hero" className="focus-ring flex items-center gap-3 rounded-lg">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-glow">
              <HardHat size={20} />
            </span>
            <span>
              <span className="block text-sm font-bold leading-4 text-primary dark:text-white">Agosto Ortiz Jr.</span>
              <span className="block text-xs text-ink/[0.56] dark:text-white/[0.56]">Construction Tech Founder</span>
            </span>
          </a>
          <div className="hidden items-center gap-1 rounded-lg border border-primary/10 bg-primary/[0.03] p-1 dark:border-white/10 dark:bg-white/[0.05] lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-ink/[0.66] transition hover:bg-white hover:text-secondary dark:text-white/[0.66] dark:hover:bg-white/10 dark:hover:text-accent"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="focus-ring hidden rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-primary sm:inline-flex"
            >
              Founder intro
            </a>
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open menu"
              title="Navigation"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/10 bg-white text-primary shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white lg:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      <section id="hero" className="surface-grid relative min-h-screen pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(0,112,243,0.14),transparent_30%),linear-gradient(180deg,rgba(244,248,251,0.9),rgba(255,255,255,0.98))] dark:bg-[radial-gradient(circle_at_top_left,rgba(0,194,168,0.16),transparent_32%),linear-gradient(180deg,rgba(6,20,35,0.84),rgba(6,20,35,1))]" />
        <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-12 py-12 lg:grid-cols-[1.04fr_0.96fr]">
          <FadeIn immediate>
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/[0.08] px-3 py-2 text-sm font-semibold text-secondary dark:border-accent/25 dark:bg-accent/10 dark:text-accent">
              <Sparkles size={15} />
              Founder of Constracker
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-primary dark:text-white sm:text-6xl lg:text-7xl">
              Building the Future of Construction Through Technology
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/[0.72] dark:text-white/[0.72]">
              Founder of Constracker, an intelligent construction management platform designed to improve safety, planning, and project execution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#constracker"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-secondary"
              >
                Explore Constracker <ArrowRight size={17} />
              </a>
              <a
                href="#case-studies"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-primary/[0.12] bg-white px-5 py-3 text-sm font-bold text-primary transition hover:-translate-y-0.5 hover:border-secondary/40 hover:text-secondary dark:border-white/[0.12] dark:bg-white/[0.08] dark:text-white dark:hover:text-accent"
              >
                View founder work <Play size={16} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} immediate>
            <div className="relative">
              <div className="premium-card overflow-hidden p-3">
                <div className="relative min-h-[520px] rounded-lg bg-primary">
                  <Image
                    src="/images/construction-field.avif"
                    alt="Construction technology background"
                    fill
                    priority
                    className="object-cover opacity-42 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/[0.82] to-secondary/[0.70]" />
                  <div className="absolute inset-x-4 top-4 rounded-lg border border-white/[0.12] bg-white/10 p-4 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Constracker OS</p>
                        <h2 className="mt-1 text-xl font-semibold text-white">Project Risk Console</h2>
                      </div>
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">Live</span>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {["Safety", "Planning", "Execution"].map((item, index) => (
                        <div key={item} className="rounded-lg bg-white/10 p-3">
                          <div className="h-1.5 rounded-full bg-white/[0.18]">
                            <div
                              className="h-1.5 rounded-full bg-accent"
                              style={{ width: `${78 - index * 11}%` }}
                            />
                          </div>
                          <p className="mt-3 text-xs font-semibold text-white/[0.78]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-lg border border-white/[0.12] bg-white/[0.12] p-4 backdrop-blur">
                      <p className="text-sm font-semibold text-white">Field Signals</p>
                      <div className="mt-4 space-y-3">
                        {["Permit approved", "Constraint flagged", "Inspection closed"].map((item) => (
                          <div key={item} className="flex items-center gap-3 text-sm text-white/[0.76]">
                            <CheckCircle2 size={16} className="text-accent" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border border-white/[0.12] bg-white p-4 text-primary shadow-premium">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold">Founder dashboard</p>
                        <Zap size={18} className="text-secondary" />
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-mist p-3">
                          <p className="text-2xl font-semibold">94%</p>
                          <p className="text-xs text-primary/[0.58]">Plan health</p>
                        </div>
                        <div className="rounded-lg bg-mist p-3">
                          <p className="text-2xl font-semibold">12</p>
                          <p className="text-xs text-primary/[0.58]">Risks open</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="section-shell pb-12">
          <div className="grid gap-3 md:grid-cols-4">
            {metrics.map((metric) => (
              <FadeIn key={metric.label} className="premium-card p-5">
                <p className="text-3xl font-semibold text-primary dark:text-white">
                  <MetricCounter value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/[0.62] dark:text-white/[0.62]">{metric.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="constracker" className="py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Featured Product"
            title="Constracker is the operating layer for modern construction teams."
            body="A founder-led SaaS platform built around the realities of jobsite execution: safety, planning, approvals, daily progress, and leadership visibility."
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_1.08fr]">
            <FadeIn className="premium-card p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/[0.14] text-accent">
                <Factory size={24} />
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-primary dark:text-white">Built for founders, owners, and builders who need fewer blind spots.</h3>
              <p className="mt-5 leading-8 text-ink/[0.68] dark:text-white/[0.68]">
                Constracker brings fragmented construction activity into one intelligent command center. It helps teams spot risk early, make better planning decisions, and preserve a clean record of what happened on site.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Safety management", "Lookahead planning", "Daily reporting", "Executive visibility"].map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary">
                  Request product intro <ChevronRight size={16} />
                </a>
                <a href="#roadmap" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-primary/[0.12] px-5 py-3 text-sm font-bold text-primary transition hover:-translate-y-0.5 hover:text-secondary dark:border-white/[0.12] dark:text-white dark:hover:text-accent">
                  See roadmap <Map size={16} />
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="premium-card overflow-hidden p-4">
              <div className="rounded-lg border border-primary/10 bg-primary p-4 text-white dark:border-white/10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Screenshot area</p>
                    <h3 className="mt-1 text-xl font-semibold">Constracker product cockpit</h3>
                  </div>
                  <Cloud size={20} className="text-accent" />
                </div>
                <div className="mt-4 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="space-y-3">
                    {["Site Overview", "Safety Risks", "Lookahead", "QA/QC"].map((item, index) => (
                      <div key={item} className={`rounded-lg p-3 text-sm ${index === 0 ? "bg-accent text-primary" : "bg-white/[0.08] text-white/[0.70]"}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg bg-white p-4 text-primary">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-mist p-4">
                        <p className="text-xs font-semibold text-primary/[0.56]">Critical risks</p>
                        <p className="mt-2 text-3xl font-bold">07</p>
                      </div>
                      <div className="rounded-lg bg-mist p-4">
                        <p className="text-xs font-semibold text-primary/[0.56]">Schedule confidence</p>
                        <p className="mt-2 text-3xl font-bold">88%</p>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg border border-primary/10 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold">Execution timeline</p>
                        <TimerReset size={17} className="text-secondary" />
                      </div>
                      <div className="mt-4 space-y-3">
                        {[84, 62, 74, 48].map((width, index) => (
                          <div key={width} className="h-3 rounded-full bg-primary/[0.08]">
                            <div className="h-3 rounded-full bg-secondary" style={{ width: `${width - index * 2}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {constrackerFeatures.map((feature, index) => (
              <MotionDiv
                key={feature.title}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <FadeIn delay={index * 0.04} className="premium-card h-full p-6">
                  <feature.icon className="text-secondary dark:text-accent" size={24} />
                  <h3 className="mt-5 text-lg font-semibold text-primary dark:text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/[0.64] dark:text-white/[0.64]">{feature.body}</p>
                </FadeIn>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-mist py-24 dark:bg-white/[0.03]">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <FadeIn className="relative min-h-[440px] overflow-hidden rounded-lg shadow-premium">
            <Image src="/images/agosto-founder.jpeg" alt="Agosto Ortiz" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.82] via-primary/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/[0.12] bg-white/[0.12] p-4 text-white backdrop-blur">
              <p className="text-sm font-semibold">Construction Technology Engineer & Founder</p>
              <p className="mt-1 text-xs text-white/[0.70]">Based in the Philippines, building for global construction teams.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 text-4xl font-semibold text-primary dark:text-white">A builder at the intersection of civil engineering, software, and construction operations.</h2>
            <p className="mt-5 leading-8 text-ink/[0.68] dark:text-white/[0.68]">
              Agosto Ortiz Jr. is repositioning his work around founder-led product building: focused construction technology that solves operational problems with software. His background connects field realities, engineering documentation, product design, and full-stack execution.
            </p>
            <p className="mt-4 leading-8 text-ink/[0.68] dark:text-white/[0.68]">
              The mission is direct: build intelligent tools that make construction safer, more predictable, and easier to manage at scale.
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="expertise" className="py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Engineering Expertise"
            title="Founder skills shaped by real construction complexity."
            body="Years of construction and industrial project experience revealed the same challenges: fragmented information, manual reporting, and limited visibility. Today, I build software that transforms those field realities into intelligent systems for planning, safety, execution, and decision-making."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item, index) => (
              <MotionDiv key={item.title} whileHover={{ y: -7 }}>
                <FadeIn delay={index * 0.04} className="premium-card h-full p-6">
                  <item.icon size={24} className="text-secondary dark:text-accent" />
                  <h3 className="mt-5 text-lg font-semibold text-primary dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/[0.64] dark:text-white/[0.64]">{item.body}</p>
                </FadeIn>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="bg-primary py-24 text-white">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Technology Stack"
            title="Modern SaaS stack with construction-domain depth."
            body="The toolkit supports fast product iteration, polished interfaces, structured data, and enterprise-ready systems."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stack.map(([title, body], index) => (
              <FadeIn key={title} delay={index * 0.04} className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
                <div className="flex items-center gap-3">
                  {(() => {
                    const StackIcon = [Layers3, Blocks, Database, Cloud, HardHat, Bot][index];
                    return <StackIcon size={22} className="text-accent" />;
                  })()}
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/[0.66]">{body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Product work with a construction technology thesis."
            body="Each project is framed as a product capability, not a generic portfolio tile."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <MotionDiv key={project.title} whileHover={{ y: -8 }}>
                <FadeIn delay={index * 0.06} className="premium-card h-full p-6">
                  <p className="text-sm font-bold text-accent">{project.type}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-primary dark:text-white">{project.title}</h3>
                  <p className="mt-4 leading-7 text-ink/[0.64] dark:text-white/[0.64]">{project.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                </FadeIn>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="bg-mist py-24 dark:bg-white/[0.03]">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Case Studies"
            title="How founder insight becomes product advantage."
            body="The case studies highlight operating outcomes: faster visibility, safer workflows, and clearer product direction."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.title} delay={index * 0.06} className="premium-card p-6">
                <FileCheck2 className="text-secondary dark:text-accent" size={24} />
                <h3 className="mt-5 text-xl font-semibold text-primary dark:text-white">{study.title}</h3>
                <p className="mt-3 text-sm font-bold text-accent">{study.result}</p>
                <p className="mt-4 text-sm leading-7 text-ink/[0.64] dark:text-white/[0.64]">{study.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="lab" className="py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow">Innovation Lab</p>
            <h2 className="mt-3 text-4xl font-semibold text-primary dark:text-white">Exploring the next layer of intelligent construction software.</h2>
            <p className="mt-5 leading-8 text-ink/[0.68] dark:text-white/[0.68]">
              The lab is where emerging ideas become testable product modules: AI-assisted reporting, document intelligence, visual site status, schedule reasoning, and predictive risk signals for project teams.
            </p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Microscope, "AI safety copilot"],
              [Network, "BIM to field data mapping"],
              [Target, "Predictive constraint signals"],
              [Rocket, "Mobile-first site intelligence"],
            ].map(([Icon, label], index) => (
              <FadeIn key={label as string} delay={index * 0.04} className="premium-card p-6">
                <Icon className="text-secondary dark:text-accent" size={24} />
                <h3 className="mt-5 text-lg font-semibold text-primary dark:text-white">{label as string}</h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <MotionSection id="roadmap" className="bg-primary py-24 text-white">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Product Roadmap"
            title="A practical path from MVP to enterprise platform."
            body="Constracker is positioned as a durable SaaS product, with each phase expanding from core workflows into intelligence and enterprise controls."
          />
          <div className="grid gap-4 lg:grid-cols-4">
            {roadmap.map(([quarter, title, body], index) => (
              <FadeIn key={title} delay={index * 0.05} className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
                <p className="text-sm font-bold text-accent">{quarter}</p>
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/[0.64]">{body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </MotionSection>

      <section id="testimonials" className="py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Testimonials"
            title="Founder credibility from product and construction conversations."
            body="The messaging emphasizes trust, domain judgment, and execution quality."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.05} className="premium-card p-6">
                <p className="text-lg leading-8 text-primary dark:text-white">"{testimonial.quote}"</p>
                <p className="mt-5 text-sm font-bold text-secondary dark:text-accent">{testimonial.name}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-mist py-24 dark:bg-white/[0.03]">
        <div className="section-shell">
          <FadeIn className="premium-card overflow-hidden">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-6 sm:p-10">
                <p className="eyebrow">Contact</p>
                <h2 className="mt-3 text-4xl font-semibold text-primary dark:text-white">Let us talk construction technology, product strategy, and Constracker.</h2>
                <p className="mt-5 max-w-2xl leading-8 text-ink/[0.68] dark:text-white/[0.68]">
                  Open to founder conversations, pilot opportunities, construction software partnerships, and product collaborations that improve project safety, planning, and execution.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="mailto:hello@constracker.tech" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-secondary">
                    <Mail size={17} /> hello@constracker.tech
                  </a>
                  <a href="https://www.linkedin.com" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-primary/[0.12] px-5 py-3 text-sm font-bold text-primary transition hover:-translate-y-0.5 hover:text-secondary dark:border-white/[0.12] dark:text-white dark:hover:text-accent">
                    <Linkedin size={17} /> LinkedIn
                  </a>
                </div>
              </div>
              <div className="bg-primary p-6 text-white sm:p-10">
                <LockKeyhole className="text-accent" size={28} />
                <h3 className="mt-5 text-2xl font-semibold">Founder signal</h3>
                <p className="mt-4 leading-8 text-white/[0.68]">
                  Constracker is being built for construction leaders who want the speed of modern SaaS with the reliability, control, and accountability expected from enterprise software.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-primary/10 bg-white py-10 dark:border-white/10 dark:bg-[#061423]">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-primary dark:text-white">Agosto Ortiz Jr</p>
            <p className="mt-1 text-sm text-ink/[0.58] dark:text-white/[0.58]">Construction Technology Engineer & Founder of Constracker</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com" aria-label="GitHub" title="GitHub" className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/10 text-primary transition hover:-translate-y-0.5 hover:text-secondary dark:border-white/10 dark:text-white dark:hover:text-accent">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" title="LinkedIn" className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/10 text-primary transition hover:-translate-y-0.5 hover:text-secondary dark:border-white/10 dark:text-white dark:hover:text-accent">
              <Linkedin size={18} />
            </a>
            <a href="mailto:hello@constracker.tech" aria-label="Email" title="Email" className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/10 text-primary transition hover:-translate-y-0.5 hover:text-secondary dark:border-white/10 dark:text-white dark:hover:text-accent">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Terminal, Cpu, Shield, Zap } from 'lucide-react'

const projects = [
  {
    tag: 'LINUX · SYSTEMD · PYTHON',
    name: 'Persistent Dev Server',
    desc: 'Full server automation with systemd services, cron workflows, and Btrfs storage optimization for a Ryzen 9 9950X3D + RTX 5090 workstation. Zero downtime deployments on the Wi-Fi 7 network stack.',
    tech: ['systemd', 'cron', 'Btrfs', 'Linux', 'Wi-Fi 7'],
    icon: <Terminal className="w-6 h-6 text-[hsl(142,72%,50%)]" />,
  },
  {
    tag: 'PYTHON · UV · ASYNC',
    name: 'High-Throughput Python Automation',
    desc: 'uv/uvx dependency pipelines, pyenv environment isolation, and async task scheduling across distributed workers. Handles 10K+ daily operations with zero manual intervention.',
    tech: ['uv/uvx', 'pyenv', 'asyncio', 'Redis', 'Celery'],
    icon: <Zap className="w-6 h-6 text-[hsl(142,72%,50%)]" />,
  },
  {
    tag: 'REACT · FASTAPI · WEBSOCKETS',
    name: 'Real-Time System Monitor Dashboard',
    desc: 'React + FastAPI + WebSockets pipeline for local RTX 5090 metrics, GPU utilization, thermal profiles, and terminal-grade precision monitoring. Live update at 60fps.',
    tech: ['React', 'FastAPI', 'WebSocket', 'Prometheus', 'Grafana'],
    icon: <Cpu className="w-6 h-6 text-[hsl(142,72%,50%)]" />,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-extrabold text-4xl tracking-tight"
        >
          Projects.
        </motion.h2>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[hsl(0,0%,7%)] border border-[hsl(0,0%,13%)] rounded-xl p-6 flex flex-col lg:flex-row gap-6 glow-hover cursor-pointer"
            >
              {/* Left */}
              <div className="flex-1 space-y-4">
                <span className="mono text-[10px] text-[hsl(142,72%,50%)]">{p.tag}</span>
                <h3 className="font-bold text-xl leading-tight">{p.name}</h3>
                <p className="text-sm leading-relaxed text-[hsl(0,0%,42%)] max-w-xl line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="mono text-[10px] text-[hsl(0,0%,42%)] bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,13%)] rounded px-1.5 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="mono text-xs text-[hsl(142,72%,50%)] hover:opacity-80 transition-opacity inline-block"
                >
                  View project &rarr;
                </a>
              </div>

              {/* Right - mockup */}
              <div className="flex-shrink-0 w-full lg:w-[320px] h-[180px] bg-[hsl(0,0%,10%)] rounded-lg border border-[hsl(0,0%,13%)] flex items-center justify-center">
                <div className="text-[hsl(0,0%,42%)] flex flex-col items-center gap-2">
                  {p.icon}
                  <span className="mono text-[10px]">screenshot placeholder</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

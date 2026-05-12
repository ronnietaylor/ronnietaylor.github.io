import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Star, GitFork, CircleDot } from 'lucide-react'

const repos = [
  {
    name: 'persistent-server-setup',
    lang: 'SystemD',
    stars: 42,
    desc: 'Complete Linux server bootstrap with systemd units, cron automation, and Btrfs subvolume management.',
  },
  {
    name: 'high-throughput-automation',
    lang: 'Python',
    stars: 38,
    desc: 'uv/uvx-based async pipeline processor with pyenv environment isolation and distributed task scheduling.',
  },
  {
    name: 'system-monitor-dashboard',
    lang: 'TypeScript',
    stars: 25,
    desc: 'Real-time system monitor with FastAPI backend, WebSocket streaming, and GPU metrics via NVML.',
  },
]

export default function GitHub() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { label: 'Stars earned', value: '105' },
    { label: 'Public repos', value: '23' },
    { label: 'Contributions this year', value: '847' },
  ]

  return (
    <section className="py-16 bg-[hsl(0,0%,7%)]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-extrabold text-4xl tracking-tight text-center"
        >
          Open source.
        </motion.h2>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4">
          {stats.map(stat => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="glow-hover bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,13%)] rounded-xl px-8 py-6 flex flex-col items-center gap-1 min-w-[160px]"
            >
              <span className="text-3xl font-extrabold text-[hsl(142,72%,50%)]">{stat.value}</span>
              <span className="mono text-[10px] text-[hsl(0,0%,42%)]">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Repos */}
        <div className="grid md:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="glow-hover bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,13%)] rounded-xl p-5 flex flex-col gap-3 text-left transition-colors"
            >
              <div className="flex items-center gap-2">
                <GitFork className="w-4 h-4 text-[hsl(0,0%,42%)]" />
                <span className="mono text-xs text-[hsl(0,0%,95%)]">{repo.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <CircleDot className="w-3 h-3 text-[hsl(142,72%,50%)]" />
                <span className="mono text-[10px] text-[hsl(0,0%,42%)]">{repo.lang}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-[hsl(0,0%,30%)]" />
                  <span className="mono text-[10px] text-[hsl(0,0%,42%)]">{repo.stars}</span>
                </div>
              </div>
              <p className="text-xs text-[hsl(0,0%,42%)] leading-relaxed line-clamp-2">{repo.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

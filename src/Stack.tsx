import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Monitor, Server, Cpu, Database, Shield, Container, Zap } from 'lucide-react'

const categories = [
  {
    label: 'Systems & Infrastructure',
    items: [
      { name: 'Linux', icon: <Shield className="w-5 h-5" /> },
      { name: 'systemd', icon: <Server className="w-5 h-5" /> },
      { name: 'cron', icon: <Monitor className="w-5 h-5" /> },
      { name: 'Docker', icon: <Container className="w-5 h-5" /> },
      { name: 'Btrfs', icon: <Database className="w-5 h-5" /> },
    ],
  },
  {
    label: 'Hardware Platform',
    items: [
      { name: 'Ryzen 9 9950X3D', icon: <Cpu className="w-5 h-5" /> },
      { name: 'RTX 5090', icon: <Cpu className="w-5 h-5" /> },
      { name: '64GB DDR5', icon: <Server className="w-5 h-5" /> },
      { name: 'Wi-Fi 7', icon: <Monitor className="w-5 h-5" /> },
      { name: 'Fractal Meshify 3 XL', icon: <Server className="w-5 h-5" /> },
    ],
  },
  {
    label: 'Languages & Frameworks',
    items: [
      { name: 'Python', icon: <Shield className="w-5 h-5" /> },
      { name: 'FastAPI', icon: <Zap className="w-5 h-5" /> },
      { name: 'React', icon: <Monitor className="w-5 h-5" /> },
      { name: 'TypeScript', icon: <Database className="w-5 h-5" /> },
      { name: 'Tailwind', icon: <Server className="w-5 h-5" /> },
      { name: 'SQL', icon: <Database className="w-5 h-5" /> },
    ],
  },
  {
    label: 'Tools & Workflows',
    items: [
      { name: 'uv/uvx', icon: <Zap className="w-5 h-5" /> },
      { name: 'pyenv', icon: <Shield className="w-5 h-5" /> },
      { name: 'pipx', icon: <Monitor className="w-5 h-5" /> },
      { name: 'Redis', icon: <Database className="w-5 h-5" /> },
      { name: 'Git', icon: <Monitor className="w-5 h-5" /> },
    ],
  },
]

export default function Stack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="stack" className="py-24 bg-[hsl(0,0%,7%)]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-extrabold text-4xl tracking-tight"
        >
          The stack.
        </motion.h2>

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: ci * 0.08 }}
            >
              <h3 className="mono text-[9px] uppercase tracking-widest text-[hsl(0,0%,42%)] mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map(item => (
                  <div
                    key={item.name}
                    className="glow-hover bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,13%)] rounded-lg px-4 py-3 flex items-center gap-2 cursor-default"
                  >
                    {item.icon}
                    <span className="mono text-xs text-[hsl(0,0%,95%)]">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

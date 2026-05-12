import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Cpu, Zap, MemoryStick } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
        {/* Left */}
        <div className="flex-1 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-extrabold text-4xl tracking-tight"
          >
            About me.
          </motion.h2>

          <div className="space-y-4 text-sm leading-relaxed text-[hsl(0,0%,42%)]">
            <p>
              I'm a Linux systems & full-stack developer who treats infrastructure as first-class software. 
              My workstation runs a modern Linux distribution as the primary development environment — from the 
              kernel level up through Python toolchains, all hardened and optimized for sustained high-throughput workloads.
            </p>
            <p>
              I build persistent server environments, automation pipelines, and real-time dashboards that 
              run on my Ryzen 9 9950X33D workstation with an RTX 5090 and 64GB DDR5 — optimized for 
              parallel workloads, GPU-accelerated compute, and zero-config deployments.
            </p>
            <p>
              Whether it's systemd service orchestration, uv/uvx dependency management, or building 
              React + FastAPI applications with live WebSocket data, I focus on performance, 
              reliability, and developer ergonomics. Remote-first, always available.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'Linux',
              'Ryzen 9 9950X3D',
              'RTX 5090',
              '64GB DDR5',
              '1600W Titan PSU',
              'Remote-friendly',
            ].map(chip => (
              <span
                key={chip}
                className="mono text-[10px] text-[hsl(0,0%,95%)] bg-[hsl(0,0%,7%)] border border-[hsl(0,0%,13%)] rounded px-2.5 py-1"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Right - Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:w-[380px] flex-shrink-0"
        >
          <div className="aspect-[4/5] bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,13%)] rounded-xl flex flex-col items-center justify-center gap-3 text-[hsl(0,0%,30%)] sticky top-24">
            <motion.img
              src="https://api.dicebear.com/9.x/notionists/svg?seed=Ronnie&backgroundColor=1a1a1a&textColor=22d472"
              alt="Ronnie"
              className="w-24 h-24 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="mono text-[10px] text-[hsl(0,0%,42%)]">portable photo placeholder</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

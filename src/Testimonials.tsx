import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const testimonials = [
  {
    quote: "Ronnie's understanding of both systems-level infrastructure and modern web frameworks is rare. His Debian-optimized automation pipeline cut our CI times by 40%.",
    name: 'Sarah Chen',
    role: 'Engineering Lead @ CloudScale',
  },
  {
    quote: "The system monitor dashboard he built runs our entire fleet monitoring. Zero-downtime deployments on our end — Ronnie got the systemd setup perfect.",
    name: 'Marcus Rivera',
    role: 'DevOps Manager @ DataStream',
  },
  {
    quote: "FastAPI work was exceptional. He built our real-time data ingestion pipeline and it's handled 2M+ events daily without a single outage. Incredible attention to detail.",
    name: 'Aisha Patel',
    role: 'CTO @ Meridian Labs',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-extrabold text-4xl tracking-tight text-center"
        >
          From clients & teams.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-hover bg-[hsl(0,0%,10%)] border border-t-2 border-t-[hsl(142,72%,50%)] border-x-[hsl(0,0%,13%)] border-b-[hsl(0,0%,13%)] rounded-xl p-6 flex flex-col gap-4"
            >
              <p className="text-sm leading-relaxed italic text-[hsl(0,0%,95%)]/80">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-sm text-white">{t.name}</p>
                <p className="mono text-[10px] text-[hsl(0,0%,42%)]">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Radial green glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[300px] rounded-full blur-[120px] opacity-[0.06]"
          style={{ background: 'hsl(142, 72%, 50%)' }}
        />
      </div>

      <div ref={ref} className="max-w-2xl mx-auto px-6 lg:px-8 text-center relative z-10 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-extrabold text-4xl tracking-tight"
        >
          Let's build something.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mono text-xs text-[hsl(142,72%,50%)]"
        >
          Currently available · Persistent server & dev work preferred · Cron/automation workflows welcome
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 pt-4"
        >
          <a
            href="mailto:letschat@ronnietaylor.com"
          className="mono text-xs font-semibold text-black bg-[hsl(142,72%,50%)] hover:bg-[hsl(142,76%,38%)] rounded px-5 py-2.5 transition-colors"
        >
          Start a conversation &rarr;
        </a>
        <a
          href="mailto:letschat@ronnietaylor.com"
            className="mono text-xs text-[hsl(0,0%,42%)] hover:text-[hsl(142,72%,50%)] transition-colors inline-block"
          >
            Or email me
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="mono text-[10px] text-[hsl(0,0%,30%)] pt-2"
        >
          Typical response time: within 24 hours
        </motion.p>
      </div>
    </section>
  )
}

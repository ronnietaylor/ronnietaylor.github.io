import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Cpu, Zap, MemoryStick } from 'lucide-react'
import ronnieHeadshot from './assets/ronnie-headshot-no-glasses_small.jpeg'

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
              I am a full-stack software engineer with deep experience building and maintaining production software across front end, back end services, payment platforms, cloud infrastructure, and developer tooling. Throughout my career, I have worked directly with clients and stakeholders to translate their needs into reality. Comfortable leading teams, managing technical relationships, or working as an individual contributor. Currently deepening hands-on Python, React, and AI tooling skills.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'Web Apps',
              'Software Engineering',
              'Systems',
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
          <div className="aspect-[4/5] bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,13%)] rounded-xl flex items-center justify-center text-[hsl(0,0%,30%)] sticky top-24 overflow-hidden">
            <motion.img
              src={ronnieHeadshot}
              alt="Ronnie"
              className="w-[95%] aspect-square object-cover rounded-full object-center object-[center_top]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

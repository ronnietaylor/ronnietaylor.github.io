import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 w-full py-24">
        {/* Left */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="mono text-xs text-[hsl(142,72%,50%)]">AVAILABLE FOR HIRE</span>
            <span className="mono text-xs text-[hsl(142,72%,50%)] cursor-blink inline-block w-2 h-[12px] bg-[hsl(142,72%,50%)]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-extrabold tracking-tight leading-[0.92] text-transparent bg-gradient-to-r from-white to-[hsl(0,0%,70%)] bg-clip-text"
            style={{ fontSize: 'clamp(40px, 6.5vw, 66px)' }}
          >
            Building intelligent experiences
            <br />
            that scale.
          </motion.h1>



          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="mono text-xs font-semibold text-black bg-[hsl(142,72%,50%)] hover:bg-[hsl(142,76%,38%)] rounded px-4 py-2 transition-colors duration-180"
            >
              View projects &rarr;
            </a>
            <a
              href="/ronnie-taylor-resume-2026.pdf"
              className="mono text-xs font-semibold text-[hsl(0,0%,95%)] border border-[hsl(0,0%,13%)] hover:border-[hsl(0,0%,30%)] rounded px-4 py-2 transition-colors duration-180"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {['Python', 'FastAPI', 'Ruby', 'React', 'SQL',  'Containers', 'Systems'].map(tag => (
              <span
                key={tag}
                className="mono text-[10px] text-[hsl(142,72%,50%)] bg-[hsl(0,0%,7%)] border border-[hsl(0,0%,13%)] rounded px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right - Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex-shrink-0 float-animate"
          style={{ filter: 'drop-shadow(0 0 40px hsla(142,72%,50%,0.15))' }}
        >
          <div className="bg-[hsl(0,0%,7%)] border border-[hsl(0,0%,13%)] rounded-lg p-4 w-[320px] font-mono text-[13px]">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0,0%,20%)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0,0%,20%)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0,0%,20%)]" />
              <span className="mono text-[10px] text-[hsl(0,0%,30%)] ml-6 self-center">workstation</span>
            </div>

            <div className="space-y-1">
              <span className="text-[hsl(0,0%,42%)]"># Ronnie @ workstation</span>
              <br />
              <span style={{ color: '#22d472' }}>
                <span className="text-white">class</span>{' '}
                <span className="text-white">Developer</span>:{' '}
              </span>
              <span style={{ color: '#22d472' }}>stack</span>={[
                <span key="py" style={{ color: '#22d472' }}>"Python",</span>,
                <span key="py" style={{ color: '#22d472' }}>"Ruby",</span>,
                <span key="react" style={{ color: '#22d472' }}>"JavaScript",</span>,
                <span key="pg" style={{ color: '#22d472' }}>"SQL"</span>,
              ]}
              <br />
              <span style={{ color: '#22d472' }}>focus</span>
              <span className="text-white">=</span>
              <span style={{ color: '#22d472' }}>"Full-Stack"</span>{' '}
              <br />
              <span style={{ color: '#22d472' }}>available</span>
              <span className="text-white">=</span>
              <span style={{ color: '#22d472' }}>True</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

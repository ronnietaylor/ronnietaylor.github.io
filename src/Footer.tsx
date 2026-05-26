import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,3%)] border-t border-[hsl(0,0%,13%)] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-extrabold text-white text-sm">Ronnie Taylor</span>
            <p className="mono text-[10px] text-[hsl(0,0%,42%)]">Full-Stack Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/ronnietaylor" className="flex items-center gap-2 mono text-[10px] text-[hsl(0,0%,42%)] hover:text-[hsl(142,72%,50%)] transition-colors" target="_blank" rel="noopener noreferrer">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ronnie-taylor-20b3236/" className="flex items-center gap-2 mono text-[10px] text-[hsl(0,0%,42%)] hover:text-[hsl(142,72%,50%)] transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="mono text-[10px] text-[hsl(0,0%,30%)]">
            &copy; {new Date().getFullYear()} Ronnie Taylor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)] text-white flex flex-col items-center justify-center px-6">
      <style>{`
        @keyframes mono-cursor-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .mono-cursor { animation: mono-cursor-blink 0.9s step-end infinite; }
      `}</style>
      <div className="text-center space-y-8">
        <div className="space-y-2">
          <h1 className="font-extrabold text-5xl md:text-7xl tracking-tight">Ronnie Taylor</h1>
          <p className="mono text-xs text-[hsl(142,72%,50%)]">
            AI First · Full-Stack Developer
          </p>
        </div>

        <p className="mono text-sm text-[hsl(0,0%,42%)]">
          new site coming soon
          <span className="mono-cursor" style={{ display: 'inline-block', width: '10px', height: '1.2em', backgroundColor: 'hsl(142,72%,50%)', marginLeft: '3px', verticalAlign: 'text-bottom' }} />
        </p>

        <div className="flex items-center justify-center gap-6 pt-4">
          <a
            href="https://github.com/ronnietaylor"
            className="mono text-xs text-[hsl(0,0%,42%)] hover:text-[hsl(142,72%,50%)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="text-[hsl(0,0%,20%)]">·</span>
          <a
            href="https://www.linkedin.com/in/ronnie-taylor-20b3236"
            className="mono text-xs text-[hsl(0,0%,42%)] hover:text-[hsl(142,72%,50%)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="mono text-[10px] text-[hsl(0,0%,20%)] pt-8">
          &copy; {new Date().getFullYear()} Ronnie Taylor
        </p>
      </div>
    </div>
  )
}

export default App

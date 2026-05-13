function App() {
  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)] text-white flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-8">
        <div className="space-y-2">
          <h1 className="font-extrabold text-5xl md:text-7xl tracking-tight">Ronnie Taylor</h1>
          <p className="mono text-xs text-[hsl(142,72%,50%)]">
            Engineering · Systems
          </p>
        </div>

        <p className="mono text-sm text-[hsl(0,0%,42%)]">
          new site coming soon
        </p>

        <div className="flex items-center justify-center gap-6 pt-4">
          <a
            href="#"
            className="mono text-xs text-[hsl(0,0%,42%)] hover:text-[hsl(142,72%,50%)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="text-[hsl(0,0%,20%)]">·</span>
          <a
            href="#"
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

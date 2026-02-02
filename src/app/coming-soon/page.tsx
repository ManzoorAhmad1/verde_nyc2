export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-light text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          We're working on something special
        </p>
        <div className="inline-block">
          <a 
            href="/" 
            className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

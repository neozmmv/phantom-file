const BEAM_ANGLES = [-60, -42, -24, -8, 8, 24, 42, 60];

export default function Hero() {
  return (
    <section
      className="min-h-[82vh] flex items-center px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb" }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">

        {/* ── Left: text ── */}
        <div className="flex flex-col gap-6">
          <p className="hero-eyebrow text-xs font-semibold tracking-[0.18em] uppercase text-purple-900">
            Self-hosted · Open source
          </p>

          <h1
            className="hero-title font-bold leading-tight tracking-tight text-gray-900"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)" }}
          >
            Your files.<br />
            Your server.<br />
            Your control.
          </h1>

          <p className="hero-body text-base leading-relaxed text-gray-500 max-w-sm">
            Upload and share files straight from your own server.
            No third parties, no data caps, no compromise.
          </p>

          <div className="hero-actions flex items-center gap-3 flex-wrap">
            <a
              href="/upload"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-purple-800 rounded-md hover:bg-purple-900 transition-colors"
              style={{ color: "#ffffff" }}
            >
              Get started <span aria-hidden>→</span>
            </a>
            <a
              href="https://github.com/neozmmv/lighthouse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
              style={{ color: "#374151" }}
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* ── Right: lighthouse beam visual ── */}
        <div className="hidden md:block relative h-[420px]">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            {BEAM_ANGLES.map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <line
                  key={i}
                  className="beam-ray"
                  x1="250" y1="530"
                  x2={250 + Math.sin(rad) * 700}
                  y2={530 - Math.cos(rad) * 700}
                  stroke="#7c3aed"
                  strokeWidth={Math.abs(deg) < 12 ? "1.5" : "0.8"}
                  style={{ animationDelay: `${i * 0.35}s` }}
                />
              );
            })}

            {[90, 175, 260, 345, 430].map((r, i) => (
              <circle
                key={r}
                cx="250" cy="530" r={r}
                fill="none"
                stroke="#7c3aed"
                strokeWidth="0.5"
                strokeDasharray="3 10"
                opacity={0.10 - i * 0.015}
              />
            ))}

            <circle cx="250" cy="530" r="5" fill="#7c3aed" opacity="0.4" />
            <circle cx="250" cy="530" r="12" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>

      </div>
    </section>
  );
}
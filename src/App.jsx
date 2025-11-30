import React, { useState, useEffect } from "react";

export default function App() {
  const poems = [
    `Page 1

I stitch the night with neon thread,
Dream-cities hum inside my head.
Pixels pulse and bright ideas start,
A paper moon — a designer's heart.`,
    `Page 2

Margins whisper in electric green,
Kerning soft, yet sharply keen.
I sketch the flow, the user's sigh,
Then launch the sky where colors fly.`,
    `Page 3

This book of lines, these quiet rhymes,
Are prototypes of future times.
Hire me to shape your user's day,
I'll turn their path — in neon way.`
  ];

  const [bookOpen, setBookOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (!bookOpen) {
      setPageIndex(0);
      setIsFlipping(false);
    }
  }, [bookOpen]);

  function nextPage() {
    if (isFlipping) return;
    if (pageIndex >= poems.length - 1) return;
    setIsFlipping(true);
    setTimeout(() => {
      setPageIndex((p) => p + 1);
      setIsFlipping(false);
    }, 650);
  }

  function prevPage() {
    if (isFlipping) return;
    if (pageIndex <= 0) return;
    setIsFlipping(true);
    setTimeout(() => {
      setPageIndex((p) => p - 1);
      setIsFlipping(false);
    }, 650);
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-float bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-30 w-[120%] h-[120%] transform -translate-x-20 -translate-y-20 blur-3xl"></div>
      </div>

      <header className="py-10 px-8 flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter neon-text">Bhumika — UI/UX Designer</h1>
        <nav className="space-x-4">
          <a className="neon-pill" href="#work">Work</a>
          <a className="neon-pill" href="#about">About</a>
          <button onClick={() => setBookOpen(true)} className="neon-pill">Poems</button>
          <a className="neon-pill" href="#contact">Contact</a>
        </nav>
      </header>

      <main className="px-8 pb-20">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight neon-text">Designing delightful<br/>product experiences</h2>
            <p className="mt-6 max-w-xl text-lg text-gray-300">I blend visual craft with user research to build clean interfaces that businesses love and users enjoy. Specialised in product UX, micro-interactions and brand-forward UI.</p>

            <div className="mt-8 flex gap-4">
              <a href="#work" className="btn-neon">See work</a>
              <a href="#contact" className="btn-outline-neon">Hire me</a>
            </div>
          </div>

          <div className="rounded-2xl p-6 glass-card">
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-neon rounded-xl">
              <div className="text-center">
                <div className="mb-4 neon-badge">Featured Project</div>
                <h3 className="text-2xl font-semibold">CoManager — Garage Service UI</h3>
                <p className="mt-2 text-gray-300">Improved service workflow; reduced task completion time by streamlining screens (visual case study available on request).</p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mt-14">
          <h3 className="text-2xl font-bold neon-text">Selected work</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {Array.from({length:6}).map((_,i)=> (
              <article key={i} className="p-4 rounded-xl glass-card hover:scale-105 transform transition">
                <div className="h-40 rounded-md bg-gradient-to-br from-purple-900 via-pink-600 to-indigo-500 shadow-neon flex items-end p-4">
                  <h4 className="font-semibold">Project {i+1}</h4>
                </div>
                <p className="mt-3 text-gray-300 text-sm">Short line about the project and your role — how you solved the user's problem and polished the interface.</p>
                <div className="mt-4 flex gap-2">
                  <button className="text-sm neon-pill">Case study</button>
                  <button className="text-sm btn-outline-neon">Prototype</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-14">
          <h3 className="text-2xl font-bold neon-text">About me</h3>
          <div className="mt-4 max-w-2xl text-gray-300">
            <p>I'm a UI/UX designer focusing on product interfaces, visual storytelling and polished interactions. I enjoy turning complex flows into delightful experiences.</p>
            <ul className="mt-4 list-disc ml-6 text-gray-300">
              <li>Skills: Figma, prototyping, user research, visual design</li>
              <li>Open to: Freelance and full-time roles</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="mt-14">
          <h3 className="text-2xl font-bold neon-text">Contact</h3>
          <p className="mt-2 text-gray-300">Interested in working together? Email: <span className="neon-accent">youremail@example.com</span></p>
        </section>

      </main>

      {bookOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="relative w-[90%] md:w-3/4 max-w-4xl h-[70vh] bg-[rgba(0,0,0,0.7)] rounded-2xl p-6 neon-border">
            <button onClick={() => setBookOpen(false)} className="absolute top-4 right-4 text-sm neon-pill">Close</button>

            <div className="flex h-full items-center justify-center">
              <div className="book-container">
                <div className={`page left-page ${isFlipping && 'left-flip'}`}>
                  <div className="page-inner">
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-200 p-6">{poems[Math.max(0, pageIndex-1)] || ''}</pre>
                  </div>
                </div>

                <div className={`page right-page ${isFlipping ? 'right-flip' : ''}`}>
                  <div className="page-inner">
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-900 dark:text-gray-200 p-6">{poems[pageIndex]}</pre>
                  </div>
                </div>

              </div>
            </div>

            <div className="absolute bottom-6 left-6 flex gap-3">
              <button onClick={prevPage} className="neon-pill">Prev</button>
              <button onClick={nextPage} className="neon-pill">Next</button>
            </div>

            <div className="absolute bottom-6 right-6 text-sm text-gray-300">Page {pageIndex+1} / {poems.length}</div>

          </div>
        </div>
      )}

    </div>
  );
}

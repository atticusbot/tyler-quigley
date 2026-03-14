import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-section').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── NAV ────────────────────────────────────── */}
      <nav>
        <div className="container">
          <a href="#" className="nav-name">Tyler P. Quigley</a>
          <ul className="nav-links">
            <li><a href="#research">Research</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#writing">Writing</a></li>
            <li><a href="#photography">Photography</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <span className="hero-label">Ph.D. · Animal Behavior</span>
            <h1 className="hero-name">Tyler P. Quigley</h1>
            <p className="hero-tagline">Ethologist. Open science builder. Science writer.</p>
            <p className="hero-bio">
              I spent nine years at Arizona State University characterizing the honeybee
              blood-brain barrier — developing techniques that didn't yet exist to answer
              questions that hadn't been asked. Since then, I've worked at the intersection
              of science, law, and technology: evaluating IP in emerging biotech fields,
              leading scientific strategy for a decentralized research organization, and
              building AI systems for small businesses.
            </p>
            <div className="hero-links">
              <a href="#">Download CV ↓</a>
              <a href="mailto:tyler@baysideai.co">tyler@baysideai.co</a>
              <a href="https://www.linkedin.com/in/tyler-quigley-ph-d-202931123" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
            </div>
          </div>
          <div className="hero-photo-wrapper">
            <img
              src="/tyler-bees.jpg"
              alt="Tyler P. Quigley in the field"
              className="hero-photo"
            />
          </div>
        </div>
      </section>

      {/* ── RESEARCH ───────────────────────────────── */}
      <section id="research" className="fade-section">
        <div className="container">
          <p className="section-label">Research</p>
          <h2 className="section-title">The Honeybee Blood-Brain Barrier</h2>

          <div className="dissertation-card">
            <h3>The Structure and Function of the Honeybee Blood-Brain Barrier</h3>
            <p className="dissertation-subtitle">
              Doctoral Dissertation · Arizona State University · April 2024
            </p>
            <p className="dissertation-abstract">
              The first in-depth characterization of structure and function of the honeybee
              blood-brain barrier. Characterized ultrastructural organization using TEM, SEM,
              and array tomography; assessed paracellular and transcellular permeability across
              age groups and <em>Varroa</em> parasite load; developed a novel NanoSIMS technique
              demonstrating vitellogenin transport across the barrier into the brain.
            </p>
            <p className="dissertation-advisor">
              Advisor: Gro V. Amdam · Committee: Maitrayee Bose, Jason Newbern, Heather
              Bimonte-Nelson, Lynne Oland
            </p>
          </div>

          <h3 className="publications-subheader">Selected Publications</h3>
          <div className="pub-grid">
            <div className="pub-card">
              <p className="pub-journal">Manuscript in preparation</p>
              <p className="pub-title">
                Tracking Vitellogenin Across the Honeybee Blood-Brain Barrier with Nanoscale
                Secondary Ion Mass Spectrometry
              </p>
              <p className="pub-authors">Quigley, T.P., &amp; Amdam, G.V.</p>
              <div>
                <span className="pub-year">In prep</span>
              </div>
            </div>

            <div className="pub-card">
              <p className="pub-journal">BioRxiv · In review</p>
              <p className="pub-title">
                Ultrastructural Organization of the Honeybee Blood-Brain Barrier and
                Comparison with Age
              </p>
              <p className="pub-authors">Quigley, T.P., &amp; Amdam, G.V. (2024)</p>
              <div>
                <span className="pub-year">2024</span>
                <a
                  className="pub-doi"
                  href="https://doi.org/10.1101/2024.09.27.615080"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOI: 10.1101/2024.09.27.615080
                </a>
              </div>
            </div>

            <div className="pub-card">
              <p className="pub-journal">PLOS ONE · In press</p>
              <p className="pub-title">
                Effect of Aging and <em>Varroa</em> Parasitism on Paracellular and Transcellular
                Permeability of the Honeybee Blood-Brain Barrier
              </p>
              <p className="pub-authors">Quigley, T.P., &amp; Amdam, G.V. (2024)</p>
              <div>
                <span className="pub-year">2024</span>
                <a
                  className="pub-doi"
                  href="https://doi.org/10.1101/2024.09.27.615259"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOI: 10.1101/2024.09.27.615259
                </a>
              </div>
            </div>

            <div className="pub-card">
              <p className="pub-journal">
                Philosophical Transactions of the Royal Society B, 376(1823), 20190738
              </p>
              <p className="pub-title">
                Social Modulation of Ageing: Mechanisms, Ecology, Evolution
              </p>
              <p className="pub-authors">Quigley, T.P., &amp; Amdam, G.V. (2021)</p>
              <div>
                <span className="pub-year">2021</span>
              </div>
            </div>

            <div className="pub-card">
              <p className="pub-journal">
                Current Opinion in Insect Science, 35, 132–137
              </p>
              <p className="pub-title">
                Honey Bees as Bioindicators of Changing Global Agricultural Landscapes
              </p>
              <p className="pub-authors">
                Quigley, T.P., Amdam, G.V., &amp; Harwood, G. (2019)
              </p>
              <div>
                <span className="pub-year">2019</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK ───────────────────────────────────── */}
      <section id="work" className="fade-section">
        <div className="container">
          <p className="section-label">Work</p>
          <h2 className="section-title">Career</h2>

          <div className="timeline">
            <div className="timeline-entry">
              <p className="timeline-date">2025 – Present</p>
              <p className="timeline-title">Founder</p>
              <p className="timeline-org">Bayside AI</p>
              <p className="timeline-desc">
                AI consulting for small businesses on the Maryland shore.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">Jan 2025 – Present</p>
              <p className="timeline-title">Science Lead</p>
              <p className="timeline-org">PsyDAO</p>
              <p className="timeline-desc">
                Scientific strategy and research evaluation for decentralized biotech in
                neuroscience, psychedelics, and longevity.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">Apr 2024 – Dec 2024</p>
              <p className="timeline-title">IP Technical Specialist</p>
              <p className="timeline-org">Calyx Law</p>
              <p className="timeline-desc">
                Evaluated biotech inventions for patentability in psychedelics, AI
                therapeutics, and emerging biotechnologies.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">Apr – Aug 2023</p>
              <p className="timeline-title">Technology Transfer Fellow</p>
              <p className="timeline-org">Skysong Innovations / ASU</p>
              <p className="timeline-desc">
                Evaluated life sciences inventions for commercial pathways and IP potential.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">Mar 2021 – Apr 2024</p>
              <p className="timeline-title">IP Research Assistant</p>
              <p className="timeline-org">Calyx Law</p>
              <p className="timeline-desc">
                Prior art analysis and patent strategy support across psychedelics, AI,
                and web3.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">Aug 2015 – Apr 2024</p>
              <p className="timeline-title">Doctoral Researcher</p>
              <p className="timeline-org">Arizona State University</p>
              <p className="timeline-desc">
                Nine years characterizing the honeybee blood-brain barrier using electron
                microscopy, stereology, and novel assay development.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">2015 – 2018</p>
              <p className="timeline-title">
                Ask-A-Biologist Junior Editor / TA / Curriculum Dev
              </p>
              <p className="timeline-org">ASU</p>
              <p className="timeline-desc">
                Science communication and teaching across undergraduate biology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WRITING ────────────────────────────────── */}
      <section id="writing" className="fade-section">
        <div className="container">
          <p className="section-label">Writing</p>
          <h2 className="section-title">Words</h2>
          <p className="writing-intro">
            Science communication, essays, and occasional poetry. Scattered across
            newsletters, publications, and notebooks.
          </p>

          <div className="writing-grid">
            <div className="writing-card">
              <p className="writing-card-title">The Tab</p>
              <p className="writing-card-subtitle">
                Psychedelic Science Newsletter · 2021 – Present · 800+ subscribers
              </p>
              <p className="writing-card-desc">
                Weekly analysis of psychedelic research — molecular mechanisms, clinical
                trials, ethics.
              </p>
              <a className="writing-card-link" href="https://psychedelicscience.substack.com/archive?sort=top" target="_blank" rel="noopener noreferrer">
                Read →
              </a>
            </div>

            <div className="writing-card">
              <p className="writing-card-title">Freelance Science Writing</p>
              <p className="writing-card-subtitle">2021 – Present</p>
              <p className="writing-card-desc">
                Articles on pharmaceutical bioactivity, research methodology, and emerging
                therapeutics.
              </p>
              <a className="writing-card-link" href="#">
                Read →
              </a>
            </div>

            <div className="writing-card">
              <p className="writing-card-title">Ask-A-Biologist</p>
              <p className="writing-card-subtitle">
                Arizona State University · 2015–2018
              </p>
              <p className="writing-card-desc">
                Educational content on biology research for K-12 and general audiences.
              </p>
              <div className="writing-card-links">
                <a href="https://askabiologist.asu.edu/cicada-life-cycle" target="_blank" rel="noopener noreferrer">Cicada Life Cycle →</a>
                <a href="https://askabiologist.asu.edu/evmed-edit/breast-milk-immunity" target="_blank" rel="noopener noreferrer">Breast Milk Immunity →</a>
                <a href="https://askabiologist.asu.edu/questions/why-we-dream" target="_blank" rel="noopener noreferrer">Why We Dream →</a>
              </div>
            </div>
          </div>

          <p className="writing-note">
            Creative writing, poetry, and photo-documented field notes — coming soon.
          </p>
        </div>
      </section>

      {/* ── PHOTOGRAPHY ────────────────────────────── */}
      <section id="photography" className="fade-section">
        <div className="container">
          <p className="section-label">Photography</p>
          <h2 className="section-title">Field Notes</h2>
          <p className="photo-subtitle">
            Nature, daily life, and the spaces between.
          </p>

          <div className="photo-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="photo-placeholder">
                [ photograph ]
              </div>
            ))}
          </div>

          <p className="photo-note">Portfolio in progress.</p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer>
        <div className="container">
          <span>Tyler P. Quigley</span>
          <span className="sep">·</span>
          <a href="mailto:tyler@baysideai.co">tyler@baysideai.co</a>
          <span className="sep">·</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </>
  )
}

export default App

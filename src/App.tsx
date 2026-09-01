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
      {/* ── TOP ────────────────────────────────────── */}
      <header className="top">
        <img
          src="/profile.jpg"
          alt="Tyler P. Quigley"
          className="profile-photo"
        />
        <h1 className="name">Tyler P. Quigley, Ph.D.</h1>
        <p className="bio">
          Scientist and writer working across biology, intellectual property,
          decentralized science, and AI.
        </p>
        <p className="bio">
          I turn complex research into clear arguments, useful decisions, and
          stories people can follow.
        </p>
        <nav className="main-nav">
          <a href="#science">Science</a>
          <a href="#writing">Writing</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>

      {/* ── SCIENCE ────────────────────────────────── */}
      <section id="science" className="fade-section">
        <div className="container narrow">
          <h2 className="section-title">Science</h2>

          <ul className="pub-list">
            <li className="pub-item">
              <a
                href="https://drive.google.com/file/d/1vRGy15Fo1t0LBUt1Al5YcDK7Q6Yy0nv1/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Structure and Function of the Honeybee Blood-Brain Barrier
              </a>
              <span className="pub-meta">
                Doctoral Dissertation · Arizona State University · 2024
              </span>
            </li>

            <li className="pub-item">
              <a
                href="https://doi.org/10.1101/2024.09.27.615259"
                target="_blank"
                rel="noopener noreferrer"
              >
                Effect of Aging and <em>Varroa</em> Parasitism on the
                Paracellular and Transcellular Permeability of the Honeybee
                Blood-Brain Barrier
              </a>
              <span className="pub-meta">
                Quigley, T.P., &amp; Amdam, G.V. (2026) · PLOS ONE, 21(3), e0343142
              </span>
            </li>

            <li className="pub-item">
              <a
                href="https://doi.org/10.1101/2024.09.27.615080"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ultrastructural Organization of the Honeybee Blood-Brain
                Barrier and Comparison with Age
              </a>
              <span className="pub-meta">
                Quigley, T.P., &amp; Amdam, G.V. (2024) · bioRxiv preprint · DOI:
                10.1101/2024.09.27.615080
              </span>
            </li>

            <li className="pub-item">
              <span className="pub-item-notlinked">
                Tracking Vitellogenin Across the Honeybee Blood-Brain Barrier
                with Nanoscale Secondary Ion Mass Spectrometry
              </span>
              <span className="pub-meta">
                Quigley, T.P., &amp; Amdam, G.V. · Manuscript in preparation
              </span>
            </li>

            <li className="pub-item">
              <a
                href="https://doi.org/10.1098/rstb.2019.0738"
                target="_blank"
                rel="noopener noreferrer"
              >
                Social Modulation of Ageing: Mechanisms, Ecology, Evolution
              </a>
              <span className="pub-meta">
                Quigley, T.P., &amp; Amdam, G.V. (2021) · Philosophical
                Transactions of the Royal Society B, 376(1823), 20190738
              </span>
            </li>

            <li className="pub-item">
              <a
                href="https://doi.org/10.1016/j.cois.2019.06.012"
                target="_blank"
                rel="noopener noreferrer"
              >
                Honey Bees as Bioindicators of Changing Global Agricultural
                Landscapes
              </a>
              <span className="pub-meta">
                Quigley, T.P., Amdam, G.V., &amp; Harwood, G. (2019) · Current
                Opinion in Insect Science, 35, 132–137
              </span>
            </li>

            <li className="pub-item">
              <a
                href="https://drive.google.com/file/d/1QjicbQagZ1QJJkK3oleVCmJosvIS7oGG/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Honeybee Workers as Models of Aging
              </a>
              <span className="pub-meta">
                Quigley, T.P., Amdam, G.V., &amp; Rueppell, O. (2018) · Conn's
                Handbook of Models for Human Aging, 533–547 ·{' '}
                <a
                  href="https://www.sciencedirect.com/science/chapter/edited-volume/pii/B9780128113530000403"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ScienceDirect →
                </a>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── WRITING ────────────────────────────────── */}
      <section id="writing" className="fade-section">
        <div className="container narrow">
          <h2 className="section-title">Writing</h2>

          <div className="writing-subsection">
            <h3>The Tab</h3>
            <p className="writing-sub-desc">
              A psychedelic science newsletter — molecular mechanisms,
              clinical trials, ethics. 2021–present.
            </p>
            <a
              className="writing-sub-link"
              href="https://psychedelicscience.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the newsletter →
            </a>
            <ul className="writing-links">
              <li>
                <a
                  href="https://psychedelicscience.substack.com/p/the-chemistry-of-psychedelics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Chemistry of Psychedelics →
                </a>
              </li>
              <li>
                <a
                  href="https://psychedelicscience.substack.com/p/good-friday-journal-club-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Good Friday Journal Club #4 →
                </a>
              </li>
              <li>
                <a
                  href="https://psychedelicscience.substack.com/p/my-myc-mind"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My, Myc, Mind →
                </a>
              </li>
              <li>
                <a
                  href="https://psychedelicscience.substack.com/p/how-cannabinoids-block-covid-19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How Cannabinoids Block COVID-19 →
                </a>
              </li>
              <li>
                <a
                  href="https://psychedelicscience.substack.com/p/ayahuasca-vine-and-its-anti-inflammatory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ayahuasca Vine and Its Anti-Inflammatory Effects →
                </a>
              </li>
            </ul>
          </div>

          <div className="writing-subsection">
            <h3>Ask A Biologist</h3>
            <p className="writing-sub-desc">
              Educational writing for K-12 and general audiences. Arizona
              State University, 2016–2018.
            </p>
            <ul className="writing-links">
              <li>
                <a
                  href="https://askabiologist.asu.edu/explore/detect-protect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Detect and Protect →
                </a>
              </li>
              <li>
                <a
                  href="https://askabiologist.asu.edu/questions/why-we-dream"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why We Dream →
                </a>
              </li>
              <li>
                <a
                  href="https://askabiologist.asu.edu/plosable/bee-microbiome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bacteria in the Belly of the Bee →
                </a>
              </li>
              <li>
                <a
                  href="https://askabiologist.asu.edu/cicada-life-cycle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cicada Life Cycle →
                </a>
              </li>
              <li>
                <a
                  href="https://askabiologist.asu.edu/evmed-edit/breast-milk-immunity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Breast Milk Immunity →
                </a>
              </li>
              <li>
                <a
                  href="https://askabiologist.asu.edu/explore/antibiotics-bacteria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Antibiotics vs Bacteria: An Evolutionary Battle →
                </a>
              </li>
              <li>
                <a
                  href="https://askabiologist.asu.edu/evmed-edit/hospital-antibiotic-resistance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Down the Drain: Hospital Sewage and Antibiotic Resistance →
                </a>
              </li>
              <li>
                <a
                  href="https://askabiologist.asu.edu/plosable/spies-among-ants"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spies Among Ants →
                </a>
              </li>
              <li>
                <a
                  href="https://askabiologist.asu.edu/explore/cicadas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rising Cicadas →
                </a>
              </li>
            </ul>
          </div>

          <div className="writing-subsection">
            <h3>Other</h3>
            <ul className="writing-links">
              <li>
                <a
                  href="https://psychedelicreview.com/opening-the-mushroom-pharmacopeia-the-case-of-norbaeocystin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Opening the Mushroom Pharmacopeia: The Case of Norbaeocystin →
                </a>
                <span className="writing-links-source">Psychedelic Review</span>
              </li>
              <li>
                <a
                  href="https://psychedelicreview.com/kambo-another-psychedelic-amphibian/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kambô: Another Psychedelic Amphibian? →
                </a>
                <span className="writing-links-source">Psychedelic Review</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── RESUME ─────────────────────────────────── */}
      <section id="resume" className="fade-section">
        <div className="container narrow">
          <h2 className="section-title">Resume</h2>

          <a
            className="resume-download"
            href="https://drive.google.com/file/d/1PISmKxt2GCtWJQNOOFS7mNq-uaxo6Oxb/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View full résumé →
          </a>

          <div className="timeline">
            <div className="timeline-entry">
              <p className="timeline-date">2025 – Present</p>
              <p className="timeline-title">Scientific Evaluation Contractor</p>
              <p className="timeline-org">Edison Scientific and Office Hours</p>
              <p className="timeline-desc">
                Evaluate AI systems performing scientific work across biology
                and chemistry; provide expert baselining for model training.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">2025 – Present</p>
              <p className="timeline-title">Scientific Advisor</p>
              <p className="timeline-org">Stealth Early-Stage Biotech (Women's Health)</p>
              <p className="timeline-desc">
                Advise on preclinical strategy, lead-candidate selection, and
                IND-enabling study design.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">Jan 2025 – Apr 2026</p>
              <p className="timeline-title">Director, Science &amp; Dealflow</p>
              <p className="timeline-org">PsyDAO</p>
              <p className="timeline-desc">
                Ran a decentralized funding system for open-science mental
                health research — sourcing, diligence, and funding decisions
                across 20+ proposals.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">Jan – Dec 2025</p>
              <p className="timeline-title">Consulting Scientist</p>
              <p className="timeline-org">Beeard.ai</p>
              <p className="timeline-desc">
                Evaluated outputs from an agentic biology platform, surfacing
                reasoning failures across neuroscience and chemistry.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">Apr – Dec 2024</p>
              <p className="timeline-title">IP Technical Specialist, Life Sciences</p>
              <p className="timeline-org">Calyx Law</p>
              <p className="timeline-desc">
                Evaluated biotech inventions for feasibility and competitive
                positioning; drafted patent and technical documentation.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">Mar 2021 – Apr 2024</p>
              <p className="timeline-title">IP Research Assistant</p>
              <p className="timeline-org">Calyx Law</p>
              <p className="timeline-desc">
                Supported 25+ patent applications through prior-art research
                and freedom-to-operate analysis.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">Apr – Aug 2023</p>
              <p className="timeline-title">Technology Transfer Fellow</p>
              <p className="timeline-org">Skysong Innovations, Arizona State University</p>
              <p className="timeline-desc">
                Evaluated life sciences inventions for technical merit and
                commercial pathways.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">Aug 2015 – Apr 2024</p>
              <p className="timeline-title">Doctoral Researcher, Animal Behavior &amp; Neuroscience</p>
              <p className="timeline-org">Arizona State University</p>
              <p className="timeline-desc">
                Characterized the honeybee blood-brain barrier end to end,
                adapting NanoSIMS from geochemistry to biology.
              </p>
            </div>

            <div className="timeline-entry">
              <p className="timeline-date">2016 – 2018</p>
              <p className="timeline-title">Science Writer &amp; Public Engagement</p>
              <p className="timeline-org">Ask A Biologist, Arizona State University</p>
              <p className="timeline-desc">
                Managed the Dr. Biology reader Q&amp;A pipeline and developed
                science-education curriculum for K-12 audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer>
        <div className="container">
          <span>Tyler P. Quigley</span>
          <span className="sep">·</span>
          <a href="mailto:tpquigley13@gmail.com">tpquigley13@gmail.com</a>
          <span className="sep">·</span>
          <a
            href="https://www.linkedin.com/in/tyler-quigley-ph-d-202931123"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="sep">·</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </>
  )
}

export default App

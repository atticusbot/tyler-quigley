function App() {
  return (
    <>
      {/* ── STATUS BAR ─────────────────────────────── */}
      <div className="statusbar">
        <div className="shell label">
          <span>Currently</span>
          <span className="now">
            Scientific Evals (Contract),{' '}
            <a
              href="https://edisonscientific.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Edison
            </a>
          </span>
          <span className="x">✕</span>
          <span className="open">Seeking full-time role</span>
        </div>
      </div>

      {/* ── MASTHEAD ───────────────────────────────── */}
      <header className="masthead">
        <div className="shell">
          <div className="plate-wrap">
            <img src="/profile.jpg" alt="Tyler P. Quigley" />
            <div className="plate-caption label">
              <span>Quigley, T. P.</span>
              <span>Ph.D. 2024</span>
            </div>
          </div>

          <div className="identity">
            <h1 className="name">
              Tyler P. Quigley
              <span className="credential">Ph.D., Animal Behavior</span>
            </h1>
            <p className="statement">
              I turn complex research into clear arguments, useful decisions, and{' '}
              <em>stories people can follow.</em>
            </p>
            <p className="descriptor">
              Scientist and writer working across biology, intellectual property,
              decentralized science, and AI.
            </p>
            <div className="contact">
              <a
                href="https://www.linkedin.com/in/tyler-quigley-ph-d-202931123/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span className="x">✕</span>
              <a
                href="https://x.com/TyQuig"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <span className="x">✕</span>
              <a href="mailto:tpquigley13@gmail.com">tpquigley13@gmail.com</a>
            </div>
          </div>
        </div>
      </header>

      {/* ── SECTION NAV ────────────────────────────── */}
      <nav className="sectionnav">
        <div className="shell">
          <a href="#science">
            Science <span className="count">07</span>
          </a>
          <a href="#writing">
            Writing <span className="count">16+</span>
          </a>
          <a href="#resume">
            Resume <span className="count">09</span>
          </a>
        </div>
      </nav>

      <main>
        {/* ── SCIENCE ──────────────────────────────── */}
        <section className="strata" id="science">
          <div className="shell">
            <div className="rail">
              <h2>Science</h2>
              <div className="tick"></div>
              <p className="label">Seven publications ✕ 2018–2026</p>
              <p className="note">
                Ultrastructure and permeability of the honeybee blood-brain
                barrier, plus reviews on social modulation of ageing.
              </p>
            </div>

            <div className="stack">
              <ul className="pubs">
                <li>
                  <span className="year">2024</span>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1vRGy15Fo1t0LBUt1Al5YcDK7Q6Yy0nv1/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="title">
                        The Structure and Function of the Honeybee Blood-Brain
                        Barrier
                      </span>
                    </a>
                    <span className="meta">
                      Doctoral dissertation <span className="x">✕</span>{' '}
                      <span className="venue">Arizona State University</span>
                    </span>
                  </div>
                </li>

                <li>
                  <span className="year">2026</span>
                  <div>
                    <a
                      href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0343142"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="title">
                        Effect of Aging and <em>Varroa</em> Parasitism on the
                        Paracellular and Transcellular Permeability of the
                        Honeybee Blood-Brain Barrier
                      </span>
                    </a>
                    <span className="meta">
                      Quigley, T. P., &amp; Amdam, G. V. <span className="x">✕</span>{' '}
                      <span className="venue">PLOS ONE</span> 21(3), e0343142
                    </span>
                  </div>
                </li>

                <li>
                  <span className="year">2024</span>
                  <div>
                    <a
                      href="https://doi.org/10.1101/2024.09.27.615080"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="title">
                        Ultrastructural Organization of the Honeybee Blood-Brain
                        Barrier and Comparison with Age
                      </span>
                    </a>
                    <span className="flag">In review</span>
                    <span className="meta">
                      Quigley, T. P., &amp; Amdam, G. V. <span className="x">✕</span>{' '}
                      <span className="venue">bioRxiv</span>{' '}
                      10.1101/2024.09.27.615080
                    </span>
                  </div>
                </li>

                <li>
                  <span className="year">—</span>
                  <div>
                    <span className="untitled">
                      Tracking Vitellogenin Across the Honeybee Blood-Brain
                      Barrier with Nanoscale Secondary Ion Mass Spectrometry
                    </span>
                    <span className="flag">In preparation</span>
                    <span className="meta">Quigley, T. P., &amp; Amdam, G. V.</span>
                  </div>
                </li>

                <li>
                  <span className="year">2021</span>
                  <div>
                    <a
                      href="https://doi.org/10.1098/rstb.2019.0738"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="title">
                        Social Modulation of Ageing: Mechanisms, Ecology,
                        Evolution
                      </span>
                    </a>
                    <span className="meta">
                      Quigley, T. P., &amp; Amdam, G. V. <span className="x">✕</span>{' '}
                      <span className="venue">Phil. Trans. R. Soc. B</span>{' '}
                      376(1823), 20190738
                    </span>
                  </div>
                </li>

                <li>
                  <span className="year">2019</span>
                  <div>
                    <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/S2214574519300082"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="title">
                        Honey Bees as Bioindicators of Changing Global
                        Agricultural Landscapes
                      </span>
                    </a>
                    <span className="meta">
                      Quigley, T. P., Amdam, G. V., &amp; Harwood, G.{' '}
                      <span className="x">✕</span>{' '}
                      <span className="venue">
                        Current Opinion in Insect Science
                      </span>{' '}
                      35, 132–137
                    </span>
                  </div>
                </li>

                <li>
                  <span className="year">2018</span>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1QjicbQagZ1QJJkK3oleVCmJosvIS7oGG/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="title">
                        Honeybee Workers as Models of Aging
                      </span>
                    </a>
                    <span className="meta">
                      Quigley, T. P., Amdam, G. V., &amp; Rueppell, O.{' '}
                      <span className="x">✕</span>{' '}
                      <span className="venue">
                        Conn’s Handbook of Models for Human Aging
                      </span>{' '}
                      533–547 <span className="x">✕</span>{' '}
                      <a
                        href="https://www.sciencedirect.com/science/chapter/edited-volume/pii/B9780128113530000403"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ScienceDirect
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── WRITING ──────────────────────────────── */}
        <section className="strata" id="writing">
          <div className="shell">
            <div className="rail">
              <h2>Writing</h2>
              <div className="tick"></div>
              <p className="label">Selected pieces ✕ three outlets</p>
              <p className="note">
                Psychedelic pharmacology and science education. A sample, not the
                full archive.
              </p>
            </div>

            <div className="stack">
              <div className="venuegroup">
                <div className="venuehead">
                  <h3>The Tab</h3>
                  <span className="run">2021–present</span>
                  <span className="spacer"></span>
                  <a
                    className="visit"
                    href="https://psychedelicscience.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the newsletter →
                  </a>
                </div>
                <p className="venuedesc">
                  Self-published psychedelic science newsletter. Selected pieces:
                </p>
                <ul className="pieces">
                  <li>
                    <a
                      href="https://psychedelicscience.substack.com/p/the-chemistry-of-psychedelics"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>The Chemistry of Psychedelics</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://psychedelicscience.substack.com/p/good-friday-journal-club-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>Good Friday Journal Club #4</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://psychedelicscience.substack.com/p/my-myc-mind"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>My, Myc, Mind</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://psychedelicscience.substack.com/p/how-cannabinoids-block-covid-19"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>How Cannabinoids Block COVID-19</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://psychedelicscience.substack.com/p/ayahuasca-vine-and-its-anti-inflammatory"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>Ayahuasca Vine and Its Anti-Inflammatory Effects</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="venuegroup">
                <div className="venuehead">
                  <h3>Ask A Biologist</h3>
                  <span className="run">2016–2018</span>
                  <span className="spacer"></span>
                  <span className="run">Arizona State University</span>
                </div>
                <p className="venuedesc">
                  Educational writing for K–12 and general audiences.
                </p>
                <ul className="pieces">
                  <li>
                    <a
                      href="https://askabiologist.asu.edu/explore/detect-protect"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>Detect and Protect</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://askabiologist.asu.edu/questions/why-we-dream"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>Why We Dream</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://askabiologist.asu.edu/plosable/bee-microbiome"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>Bacteria in the Belly of the Bee</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://askabiologist.asu.edu/cicada-life-cycle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>Cicada Life Cycle</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://askabiologist.asu.edu/evmed-edit/breast-milk-immunity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>Breast Milk Immunity</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://askabiologist.asu.edu/explore/antibiotics-bacteria"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>Antibiotics vs Bacteria: An Evolutionary Battle</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://askabiologist.asu.edu/evmed-edit/hospital-antibiotic-resistance"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>
                        Down the Drain: Hospital Sewage and Antibiotic Resistance
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://askabiologist.asu.edu/plosable/spies-among-ants"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>Spies Among Ants</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://askabiologist.asu.edu/explore/cicadas"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>Rising Cicadas</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="venuegroup">
                <div className="venuehead">
                  <h3>Other</h3>
                  <span className="spacer"></span>
                  <span className="run">Psychedelic Review</span>
                </div>
                <ul className="pieces">
                  <li>
                    <a
                      href="https://psychedelicreview.com/opening-the-mushroom-pharmacopeia-the-case-of-norbaeocystin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>
                        Opening the Mushroom Pharmacopeia: The Case of
                        Norbaeocystin
                        <span className="source">Psychedelic Review</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://psychedelicreview.com/kambo-another-psychedelic-amphibian/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow">→</span>
                      <span>
                        Kambô: Another Psychedelic Amphibian?
                        <span className="source">Psychedelic Review</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESUME ───────────────────────────────── */}
        <section className="strata" id="resume">
          <div className="shell">
            <div className="rail">
              <h2>Resume</h2>
              <div className="tick"></div>
              <p className="note">
                Bench science, patent work, decentralized research funding, and
                expert evaluation of AI systems doing science.
              </p>
            </div>

            <div className="stack">
              <a
                className="resume-cta"
                href="https://drive.google.com/file/d/1mqB1XTb5J4-ujLFYj1ZYIS6YFL5Li6Kb/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View full résumé <span aria-hidden="true">→</span>
              </a>

              <ul className="roles">
                <li>
                  <span className="when">
                    2026 – <span className="current">Present</span>
                  </span>
                  <div>
                    <span className="role">Scientific Evaluation Contractor</span>
                    <span className="org">
                      Edison Scientific and Office Hours
                    </span>
                    <p className="what">
                      Evaluate AI systems performing scientific work across
                      biology and chemistry; provide expert baselining for model
                      training.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">
                    2025 – <span className="current">Present</span>
                  </span>
                  <div>
                    <span className="role">Scientific Advisor</span>
                    <span className="org">
                      Stealth Early-Stage Biotech (Women’s Health)
                    </span>
                    <p className="what">
                      Advise on preclinical strategy, lead-candidate selection,
                      and IND-enabling study design.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2025 – 2026</span>
                  <div>
                    <span className="role">Director, Science &amp; Dealflow</span>
                    <span className="org">PsyDAO</span>
                    <p className="what">
                      Ran a decentralized funding system for open-science mental
                      health research — sourcing, diligence, and funding
                      decisions across 20+ proposals.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2025</span>
                  <div>
                    <span className="role">Consulting Scientist</span>
                    <span className="org">Beeard.ai</span>
                    <p className="what">
                      Evaluated outputs from an agentic biology platform,
                      surfacing reasoning failures across neuroscience and
                      chemistry.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2024</span>
                  <div>
                    <span className="role">
                      IP Technical Specialist, Life Sciences
                    </span>
                    <span className="org">Calyx Law</span>
                    <p className="what">
                      Evaluated biotech inventions for feasibility and
                      competitive positioning; drafted patent and technical
                      documentation.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2023</span>
                  <div>
                    <span className="role">Technology Transfer Fellow</span>
                    <span className="org">
                      Skysong Innovations, Arizona State University
                    </span>
                    <p className="what">
                      Evaluated life sciences inventions for technical merit and
                      commercial pathways.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2021 – 2024</span>
                  <div>
                    <span className="role">IP Research Assistant</span>
                    <span className="org">Calyx Law</span>
                    <p className="what">
                      Supported 25+ patent applications through prior-art
                      research and freedom-to-operate analysis.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2015 – 2024</span>
                  <div>
                    <span className="role">
                      Doctoral Researcher, Animal Behavior
                    </span>
                    <span className="org">Arizona State University</span>
                    <p className="what">
                      Characterized the honeybee blood-brain barrier end to end,
                      adapting NanoSIMS from geochemistry to biology.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2016 – 2018</span>
                  <div>
                    <span className="role">
                      Science Writer &amp; Public Engagement
                    </span>
                    <span className="org">
                      Ask A Biologist, Arizona State University
                    </span>
                    <p className="what">
                      Managed the Dr. Biology reader Q&amp;A pipeline and
                      developed science-education curriculum for K–12 audiences.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer>
        <div className="footrule hatch"></div>
        <div className="shell">
          <span>Tyler P. Quigley, Ph.D.</span>
          <span className="x">✕</span>
          <a href="mailto:tpquigley13@gmail.com">tpquigley13@gmail.com</a>
          <span className="x">✕</span>
          <a
            href="https://www.linkedin.com/in/tyler-quigley-ph-d-202931123/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="x">✕</span>
          <a href="https://x.com/TyQuig" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <span className="spacer"></span>
          <span>© 2026</span>
        </div>
      </footer>
    </>
  )
}

export default App

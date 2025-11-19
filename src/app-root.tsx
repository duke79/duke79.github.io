import CollapsibleSection from './components/collapsible-section';

type LinkItem = {
  label: string;
  href: string;
};

const highlightedProjects: LinkItem[] = [
  {
    label: 'Word-In-Context',
    href: 'https://github.com/duke79/Word-In-Context',
  },
  {
    label: 'Torrent-Buddy',
    href: 'https://github.com/duke79/Torrent-Buddy',
  },
];

const projectCategories: Array<{ title: string; links: LinkItem[] }> = [
  {
    title: 'ReactJS/cordova -',
    links: [
      { label: 'boxofish', href: 'https://github.com/duke79/boxofish' },
      { label: 'Yojaka', href: 'https://github.com/duke79/Yojaka' },
      { label: 'libreact', href: 'https://github.com/duke79/libreact' },
    ],
  },
  {
    title: 'Python (Flask, SQLAlchemy etc.) -',
    links: [
      {
        label: 'Yojaka (Server)',
        href: 'https://github.com/duke79/Yojaka/tree/master/src/server',
      },
      { label: 'Samanvaya', href: 'https://github.com/duke79/Samanvaya' },
      { label: 'dukepy', href: 'https://github.com/duke79/dukepy' },
    ],
  },
  {
    title: 'A little bit of ML -',
    links: [
      { label: 'Kritrima', href: 'https://github.com/duke79/Kritrima' },
    ],
  },
  {
    title: 'A little bit of Flutter -',
    links: [
      { label: 'Abhidhana', href: 'https://github.com/duke79/Abhidhana' },
    ],
  },
  {
    title: 'Some Google Cloud and some Docker -',
    links: [
      { label: 'pysync', href: 'https://github.com/duke79/pysync' },
    ],
  },
];

const AppRoot = () => (
  <div className="container">
    <header>
      <h1>Pulkit Singh</h1>
      <p>Software Engineer</p>
      <address>
        Delhi
        <br />
        Phone: +91 8237384898
        <br />
        Email:{' '}
        <a href="mailto:pulkitsingh01@gmail.com">pulkitsingh01@gmail.com</a>
      </address>
    </header>

    <hr />

    <main>
      <CollapsibleSection sectionId="skills" title="Skills">
        <p>
          6 years of industrial experience in C++. Decent experience with Python
          and hands on experience on some Machine Learning algorithms.
        </p>
        <p>
          Also, good exposure to ReactJS, Java (Android), Google Cloud, Docker.
        </p>
      </CollapsibleSection>

      <hr />

      <CollapsibleSection sectionId="experience" title="Experience">
        <article>
          <h3>Dassault Systemes / Software Engineer</h3>
          <p className="job-meta">
            <time dateTime="2013-07">JULY 2013</time> -{' '}
            <time dateTime="2019-08">AUGUST 2019</time>
          </p>
          <p>Handled development and maintenance for Drafting app in CATIA.</p>
          <p>CATIA is a CAD software built with C++/COM.</p>
          <p className="environment">
            Environment: C++, COM, CAA, Visual Studio
          </p>
        </article>

        <article>
          <h3>
            <a
              href="https://github.com/duke79"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gaveshak
            </a>
          </h3>
          <p>
            Although intended to be a search engine, this one matured to some
            basic crawling.
          </p>
          <p className="environment">
            Environment: C++, CMake, Visual Studio, Boost
          </p>
        </article>

        <article>
          <h3>Android apps</h3>
          <p>
            <a
              href="https://play.google.com/store/apps/developer?id=Pulkit+Singh"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Play Store
            </a>
          </p>
        </article>

        <article>
          <h3>
            <a
              href="https://github.com/duke79/AFSM"
              target="_blank"
              rel="noopener noreferrer"
            >
              AFSM
            </a>
          </h3>
          <p>
            A finite state machine implemented in Java, intended to manage
            Android application state.
          </p>
          <p className="environment">
            Environment: Java, Android, Android Studio, Git
          </p>
        </article>

        <CollapsibleSection
          sectionId="projects"
          title="Projects"
          headingLevel={3}
        >
          <ul>
            {highlightedProjects.map((project) => (
              <li key={project.href}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.label}
                </a>
              </li>
            ))}
          </ul>

          {projectCategories.map((category) => (
            <div key={category.title}>
              <p className="projects-category">{category.title}</p>
              <ul>
                {category.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CollapsibleSection>
      </CollapsibleSection>

      <hr />

      <CollapsibleSection sectionId="education" title="Education">
        <article>
          <h3>MANIT, Bhopal/ B. Tech.</h3>
          <p className="job-meta">
            <time dateTime="2013">2013</time>
          </p>
          <p>Graduated in Computer Science with a CGPA of 7.0</p>
        </article>
      </CollapsibleSection>
    </main>

    <footer>
      <p>
        &copy; <time dateTime="2023">2023</time> Pulkit Singh
      </p>
    </footer>
  </div>
);

export default AppRoot;

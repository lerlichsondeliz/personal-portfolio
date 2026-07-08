import About from './components/About'
import AmbientOrbs from './components/AmbientOrbs'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Section from './components/Section'
import ThemeToggle from './components/ThemeToggle'
import { useDarkMode } from './hooks/useDarkMode'
import { useUnlockedSections } from './hooks/useUnlockedSections'

function App() {
  const { unlock, isUnlocked, unlockedIds } = useUnlockedSections()
  const { theme, toggle } = useDarkMode()

  return (
    <main>
      <AmbientOrbs unlockedIds={unlockedIds} />
      <ThemeToggle theme={theme} onToggle={toggle} />

      <Hero />
      <Nav isUnlocked={isUnlocked} onUnlock={unlock} />

      <Section id="about" title="About" unlocked={isUnlocked('about')}>
        <About />
      </Section>

      <Section id="projects" title="Projects" unlocked={isUnlocked('projects')} wide>
        <Projects />
      </Section>

      <Section id="experience" title="Experience" unlocked={isUnlocked('experience')}>
        <Experience />
      </Section>

      <Section id="contact" title="Contact" unlocked={isUnlocked('contact')}>
        <Contact />
      </Section>

      <Footer />
    </main>
  )
}

export default App

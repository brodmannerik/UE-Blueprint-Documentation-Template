import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Content } from './components/Content'
import { docSections } from './data/docs'

function App() {
  const [activeSection, setActiveSection] = useState('level-blueprint')
  
  const currentSection = docSections.find(s => s.id === activeSection) || docSections[0]

  const handleLogoClick = () => {
    setActiveSection('level-blueprint')
  }

  return (
    <div className="app">
      <Header onLogoClick={handleLogoClick} />
      <div className="app-layout">
        <Sidebar 
          sections={docSections} 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <Content section={currentSection} />
      </div>
    </div>
  )
}

export default App

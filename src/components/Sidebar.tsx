import type { DocSection } from '../types';
import './Sidebar.css';

interface SidebarProps {
  sections: DocSection[];
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export function Sidebar({ sections, activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`sidebar-link ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => onSectionChange(section.id)}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </aside>
  );
}

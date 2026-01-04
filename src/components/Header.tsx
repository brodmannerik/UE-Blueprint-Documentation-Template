import './Header.css';

interface HeaderProps {
  onLogoClick?: () => void;
}

export function Header({ onLogoClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <button className="back-button" onClick={onLogoClick} aria-label="Go back">
          ←
        </button>
        <div className="logo-area" onClick={onLogoClick} style={{ cursor: onLogoClick ? 'pointer' : 'default' }}>
          <h1>UE Blueprint Docs</h1>
        </div>
      </div>
    </header>
  );
}

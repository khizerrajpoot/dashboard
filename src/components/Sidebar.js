import { NavLink } from "react-router-dom";
import { Home, Info, Phone } from "lucide-react";

export default function Sidebar({ isOpen, onToggle }) {
  return (
    <>
      <button className="sidebar-toggle" onClick={onToggle}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
      </button>
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <NavLink to="/" end>
            <Home />
            <span>Home</span>
          </NavLink>
          <NavLink to="/about">
            <Info />
            <span>About</span>
          </NavLink>
          <NavLink to="/contact">
            <Phone />
            <span>Contact</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
}


import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="py-4 px-6 md:px-8 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/90">
      <Link to="/" className="flex items-center group">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="h-10 w-10 bg-gradient-to-br from-novacode-purple to-novacode-lightpurple rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:shadow-lg transition-all duration-300"
        >
          <div className="text-white text-xl font-bold">&lt;/&gt;</div>
        </motion.div>
        <h1 className="text-xl font-heading font-bold bg-gradient-to-r from-novacode-darkpurple to-novacode-purple bg-clip-text text-transparent">Novacode</h1>
      </Link>
      
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-1">
          <NavItem to="/" label="Home" isActive={isActive("/")} />
          <NavItem to="/program" label="Programs" isActive={isActive("/program")} />
          <NavItem to="/partners" label="Partners" isActive={isActive("/partners")} />
          <NavItem to="/connect" label="Connect" isActive={isActive("/connect")} />
          <NavItem to="/info" label="Info" isActive={isActive("/info")} />
          <motion.li 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/apply" 
              className="ml-2 py-2.5 px-6 bg-gradient-to-r from-novacode-purple to-novacode-darkpurple text-white rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Apply Now
            </Link>
          </motion.li>
        </ul>
      </nav>
      
      <div className="md:hidden">
        <button 
          className="p-2 text-gray-600 hover:text-novacode-purple transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 p-4 border-t"
        >
          <nav>
            <ul className="flex flex-col space-y-2">
              <MobileNavItem to="/" label="Home" isActive={isActive("/")} onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem to="/program" label="Programs" isActive={isActive("/program")} onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem to="/partners" label="Partners" isActive={isActive("/partners")} onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem to="/connect" label="Connect" isActive={isActive("/connect")} onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem to="/info" label="Info" isActive={isActive("/info")} onClick={() => setIsMobileMenuOpen(false)} />
              <li className="mt-2">
                <Link 
                  to="/apply" 
                  className="block w-full text-center py-2.5 bg-gradient-to-r from-novacode-purple to-novacode-darkpurple text-white rounded-md font-medium shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

const NavItem = ({ to, label, isActive = false }: { to: string; label: string; isActive?: boolean }) => {
  return (
    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={to}
        className={`py-2 px-4 mx-1 rounded-md transition-all duration-300 ${
          isActive
            ? "text-novacode-purple font-medium bg-novacode-purple/5"
            : "text-gray-700 hover:text-novacode-purple hover:bg-novacode-purple/5"
        }`}
      >
        {label}
      </Link>
    </motion.li>
  );
};

const MobileNavItem = ({ to, label, isActive = false, onClick }: { to: string; label: string; isActive?: boolean; onClick: () => void }) => {
  return (
    <li>
      <Link
        to={to}
        className={`block py-2 px-4 rounded-md transition-all duration-300 ${
          isActive
            ? "text-novacode-purple font-medium bg-novacode-purple/5"
            : "text-gray-700"
        }`}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
};

export default Header;

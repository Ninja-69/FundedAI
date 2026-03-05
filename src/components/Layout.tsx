import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen mesh-gradient flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md border-b border-white/5">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-extrabold tracking-tighter heading-gradient">
            FundedAI
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Download on Play Store" 
              className="h-10"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      {/* Universal Footer */}
      <footer className="px-6 py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-secondary-neutral text-sm">
          <div className="font-mono">
            2025 © Profit AI
          </div>
          <nav className="flex gap-8">
            <Link to="/terms" className="hover:text-accent transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-accent transition-colors">Subscription</Link>
            <Link to="#" className="hover:text-accent transition-colors">Support</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

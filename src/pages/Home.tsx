import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col items-center px-6 pt-20 pb-32">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight heading-gradient">
          Trade & Invest <br />
          <span className="text-profit">Smart with AI.</span>
        </h1>
        
        <p className="text-secondary-neutral text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          AI-powered trading analysis that gives you the insights you need to make informed trading & investment decisions.
        </p>
      </div>

      {/* Ready to trade box */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="glass-card-lg p-10 md:p-16 text-center relative overflow-hidden">
          {/* Subtle background glow inside box */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-profit/5 blur-[80px] rounded-full"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Ready to trade smarter?
          </h2>
          <p className="text-secondary-neutral text-lg mb-10 max-w-xl mx-auto">
            Join thousands of traders who are already using AI to make better investment decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Download
            </button>
            <button className="btn-secondary">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

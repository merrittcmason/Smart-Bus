import React from 'react';
import { Moon, Sun, Play, Square, RotateCcw } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-light-primary dark:bg-dark-primary border-b border-light-border dark:border-dark-border flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold text-light-text dark:text-dark-text font-sf">
          Smart Bus
        </h1>
        <div className="h-6 w-px bg-light-accent dark:bg-dark-accent"></div>
        <span className="text-sm text-light-accent dark:text-dark-accent font-sf">
          Business Process Simulation
        </span>
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 bg-light-secondary dark:bg-dark-secondary rounded-lg p-1">
          <button className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-green-500 hover:bg-green-600 text-white transition-colors">
            <Play size={14} />
            <span className="text-sm font-medium">Run</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-1.5 rounded-md hover:bg-light-accent/20 dark:hover:bg-dark-accent/20 text-light-text dark:text-dark-text transition-colors">
            <Square size={14} />
            <span className="text-sm font-medium">Stop</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-1.5 rounded-md hover:bg-light-accent/20 dark:hover:bg-dark-accent/20 text-light-text dark:text-dark-text transition-colors">
            <RotateCcw size={14} />
            <span className="text-sm font-medium">Reset</span>
          </button>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-light-secondary dark:bg-dark-secondary hover:bg-light-accent/20 dark:hover:bg-dark-accent/20 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun size={18} className="text-dark-text" />
          ) : (
            <Moon size={18} className="text-light-text" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
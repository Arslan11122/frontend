import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Menu, X, Home, Settings, Info } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/word-to-pdf', label: 'Word to PDF', icon: FileText },
    { path: '/pdf-to-word', label: 'PDF to Word', icon: FileText },
    { path: '/txt-to-pdf', label: 'Text to PDF', icon: FileText },
    { path: '/image-to-pdf', label: 'Image to PDF', icon: FileText },
    { path: '/excel-to-pdf', label: 'Excel to PDF', icon: FileText },
    { path: '/features', label: 'Features', icon: Info }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:from-emerald-500 group-hover:to-cyan-500 transition-all duration-300">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              PDF Converter Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-cyan-500/10 hover:text-cyan-400 ${
                  isActive(path)
                    ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'text-gray-300'
                }`}
              >
                <div className="flex items-center space-x-1">
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20">
            <div className="space-y-1">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(path)
                      ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
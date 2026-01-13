import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'da', flag: '🇩🇰', label: 'Dansk' },
  { code: 'it', flag: '🇮🇹', label: 'Italiano' },
];

export function LanguageSwitcher({ currentLang, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentFlag = languages.find(l => l.code === currentLang)?.flag || '🇬🇧';

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 bg-white hover:bg-slate-50 border border-slate-200 rounded-full px-3 py-2 shadow-sm transition-all"
        title="Change Language"
      >
        <span className="text-xl leading-none filter drop-shadow-sm">{currentFlag}</span>
        <ChevronDown size={14} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-slate-50 transition-colors ${currentLang === lang.code ? 'bg-slate-50 font-medium text-slate-900' : 'text-slate-600'
                }`}
            >
              <span className="text-xl leading-none filter drop-shadow-sm">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

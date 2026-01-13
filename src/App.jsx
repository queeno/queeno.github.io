import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { MobileHeader } from './components/MobileHeader';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { cvProfiles as cvEn } from './data/cv';
import { em_de } from './data/cv_de';
import { em_da } from './data/cv_da';
import { em_it } from './data/cv_it';
import { translations } from './data/locales';

const allProfiles = {
  en: cvEn,
  de: { em: em_de, ic: cvEn.ic },
  da: { em: em_da, ic: cvEn.ic },
  it: { em: em_it, ic: cvEn.ic }
};

function CVPage({ defaultLang }) {
  const { lang: urlParamLang } = useParams();

  const normalize = (l) => {
    if (l === 'dk') return 'da';
    if (['en', 'de', 'it', 'da'].includes(l)) return l;
    return null;
  };

  // Initialize lang state. Prefer URL param if valid, else default.
  // Note: We use a function to initialize only once, but here we want to react to URL changes too.
  // Actually, initializing with a value derived from props/params is fine.
  const [currentLang, setCurrentLang] = useState(() => {
    return normalize(urlParamLang) || defaultLang || 'en';
  });

  // Sync state if URL changes (shortcut usage: user explicitly navigates to /de)
  useEffect(() => {
    const l = normalize(urlParamLang);
    if (l) {
      setCurrentLang(l);
    } else if (!urlParamLang && defaultLang) {
      // If root path '/', ensuring we are 'en' (or default)
      setCurrentLang(defaultLang);
    }
  }, [urlParamLang, defaultLang]);

  // Redirect invalid URLs to root
  const validLangs = ['en', 'de', 'it', 'da', 'dk'];
  if (urlParamLang && !validLangs.includes(urlParamLang)) {
    return <Navigate to="/" replace />;
  }

  const currentData = allProfiles[currentLang]?.em || allProfiles['en'].em;
  const currentLabels = translations[currentLang] || translations['en'];

  // Handle Dropdown Change: Update STATE only. Do NOT Redirect/Update URL.
  const handleLanguageChange = (code) => {
    setCurrentLang(code);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <div className="max-w-7xl mx-auto md:flex md:items-start md:justify-center md:gap-6 md:p-6 lg:p-8">
        <Sidebar
          data={currentData}
          lang={currentLang}
          setLang={handleLanguageChange}
          labels={currentLabels}
        />
        <main className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden min-w-0 relative">
          <div className="absolute top-4 right-4 z-10">
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={handleLanguageChange} />
          </div>
          <MobileHeader
            data={currentData}
            lang={currentLang}
            setLang={handleLanguageChange}
          />
          <Content
            data={currentData}
            labels={currentLabels}
          />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<CVPage defaultLang="en" />} />
      <Route path="/:lang" element={<CVPage />} />
      {/* Fallback for unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

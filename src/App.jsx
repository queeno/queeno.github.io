import { useState } from 'react';
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

const detectLocationLang = () => {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log('Detected Timezone:', timeZone); // Debugging: Check your browser's timezone in the console
    if (timeZone === 'Europe/Copenhagen') return 'da';
    if (['Europe/Berlin', 'Europe/Vienna', 'Europe/Zurich', 'Europe/Vaduz', 'Europe/Busingen'].includes(timeZone)) return 'de';
    if (['Europe/Rome', 'Europe/San_Marino', 'Europe/Vatican'].includes(timeZone)) return 'it';
  } catch (e) {
    // Ignore errors
  }
  return 'en';
};

function App() {
  const [currentLang, setCurrentLang] = useState(detectLocationLang());

  const currentData = allProfiles[currentLang]?.em || allProfiles['en'].em;
  const currentLabels = translations[currentLang] || translations['en'];

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

export default App;

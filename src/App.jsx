import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { MobileHeader } from './components/MobileHeader';
import { cvProfiles } from './data/cv';

function App() {
  const currentData = cvProfiles.em;

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <div className="max-w-7xl mx-auto md:flex md:items-start md:justify-center md:gap-6 md:p-6 lg:p-8">
        <Sidebar
          data={currentData}
        />
        <main className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden min-w-0">
          <MobileHeader
            data={currentData}
          />
          <Content data={currentData} />
        </main>
      </div>
    </div>
  );
}

export default App;

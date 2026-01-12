import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { MobileHeader } from './components/MobileHeader';
import { cvProfiles } from './data/cv';

function App() {
  const currentData = cvProfiles.em;

  return (
    <div className="min-h-screen bg-white md:grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr]">
      <Sidebar
        data={currentData}
      />
      <main className="bg-white">
        <MobileHeader
          data={currentData}
        />
        <Content data={currentData} />
      </main>
    </div>
  );
}

export default App;

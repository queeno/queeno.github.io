import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { ObfuscatedPhone } from './ObfuscatedPhone';

export function Sidebar({ data }) {
  const { personalInfo } = data;

  return (
    <aside
      className="hidden md:flex flex-col items-center text-center bg-gradient-to-b from-blue-950 to-slate-700 text-white rounded-2xl shadow-xl shadow-slate-200 border border-slate-300 p-8 md:w-[320px] lg:w-[350px] shrink-0 md:sticky md:top-24 md:max-h-[calc(100vh-12rem)] overflow-y-auto custom-scrollbar animate-fade-in"
    >

      <div
        className="mb-8 relative group transition-transform duration-300 hover:scale-105"
      >
        <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mb-6 ring-1 ring-white/30">
          <picture>
            <source srcSet={personalInfo.image.replace('.png', '.avif')} type="image/avif" />
            <source srcSet={personalInfo.image.replace('.png', '.webp')} type="image/webp" />
            <img
              src={personalInfo.image}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
        </div>
      </div>

      <h1 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight text-white">{personalInfo.name}</h1>

      <div className="space-y-2 mb-8">
        {personalInfo.roles.map((role, index) => (
          <p key={index} className="text-xs font-semibold bg-white/10 text-white py-1.5 px-3 rounded-full inline-block m-1 border border-white/10 shadow-sm backdrop-blur-sm">{role}</p>
        ))}
      </div>

      <div className="w-full h-px bg-white/20 mb-8"></div>

      <div className="space-y-5 w-full flex flex-col items-center">
        <div className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors cursor-default">
          <MapPin size={18} className="text-blue-300" />
          <span className="text-sm">{personalInfo.location}</span>
        </div>

        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors">
          <Mail size={18} className="text-blue-300" />
          <span className="text-sm">{personalInfo.email}</span>
        </a>

        <div className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors cursor-default">
          <Phone size={18} className="text-blue-300" />
          <ObfuscatedPhone phoneNumber={personalInfo.mobile} className="text-sm" />
        </div>

        <div className="flex gap-4 mt-6">
          <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:text-blue-900 hover:bg-white transition-all shadow-sm backdrop-blur-sm">
            <Github size={20} />
          </a>
          <a href={`https://${personalInfo.linkedin.includes('http') ? '' : 'www.linkedin.com/in/'}${personalInfo.linkedin.replace('linkedin.com/in/', '')}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:text-blue-700 hover:bg-white transition-all shadow-sm backdrop-blur-sm">
            <Linkedin size={20} />
          </a>
          {personalInfo.instagram && (
            <a href={`https://instagram.com/${personalInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:text-pink-600 hover:bg-white transition-all shadow-sm backdrop-blur-sm">
              <Instagram size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="mt-auto pt-8 text-xs text-slate-400 hidden md:block">
        © {new Date().getFullYear()} Simon Aquino
      </div>
    </aside>
  );
}

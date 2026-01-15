import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { ObfuscatedPhone } from './ObfuscatedPhone';

export function MobileHeader({ data }) {
  const { personalInfo } = data;

  return (
    <div className="md:hidden bg-gradient-to-b from-blue-950 to-slate-700 border-b border-slate-600 p-8 text-center text-white">

      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20 shadow-md ring-1 ring-white/30">
        <picture>
          <source srcSet={personalInfo.image.replace('.png', '.avif')} type="image/avif" />
          <source srcSet={personalInfo.image.replace('.png', '.webp')} type="image/webp" />
          <img
            src={personalInfo.image}
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      <h1 className="text-3xl font-bold text-white mb-2">{personalInfo.name}</h1>

      <div className="flex flex-wrap justify-center gap-2 mb-4 text-white text-sm font-medium">
        {personalInfo.roles.map((role, index) => (
          <span key={index} className="px-2 py-0.5 bg-white/10 rounded-full border border-white/10 shadow-sm backdrop-blur-sm">
            {role}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-2 items-center text-slate-200 text-sm mb-6">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-blue-300" />
          <span>{personalInfo.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-blue-300" />
          <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">{personalInfo.email}</a>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-blue-300" />
          <ObfuscatedPhone phoneNumber={personalInfo.mobile} />
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 border border-white/20 rounded-full text-white hover:text-blue-900 hover:bg-white transition-all shadow-sm backdrop-blur-sm">
          <Github size={20} />
        </a>
        <a href={`https://${personalInfo.linkedin.includes('http') ? '' : 'www.linkedin.com/in/'}${personalInfo.linkedin.replace('linkedin.com/in/', '')}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 border border-white/20 rounded-full text-white hover:text-blue-700 hover:bg-white transition-all shadow-sm backdrop-blur-sm">
          <Linkedin size={20} />
        </a>
        {personalInfo.instagram && (
          <a href={`https://instagram.com/${personalInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 border border-white/20 rounded-full text-white hover:text-pink-600 hover:bg-white transition-all shadow-sm backdrop-blur-sm">
            <Instagram size={20} />
          </a>
        )}
      </div>
    </div>
  );
}

import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from 'lucide-react';

export function MobileHeader({ data }) {
  const { personalInfo } = data;

  return (
    <div className="md:hidden bg-slate-100 border-b border-slate-300 p-8 text-center">

      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
        <img
          src={personalInfo.image}
          alt={personalInfo.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold text-slate-800 mb-2">{personalInfo.name}</h1>

      <div className="flex flex-wrap justify-center gap-2 mb-4 text-slate-600 text-sm font-medium">
        {personalInfo.roles.map((role, index) => (
          <span key={index} className="px-2 py-0.5 bg-white rounded-full border border-slate-300 shadow-sm">
            {role}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-2 items-center text-slate-500 text-sm mb-6">
        <div className="flex items-center gap-2">
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={14} />
          <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-500 transition-colors">{personalInfo.email}</a>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} />
          <span>{personalInfo.mobile}</span>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white border border-slate-300 rounded-full text-slate-700 hover:text-white hover:bg-slate-800 hover:border-slate-800 transition-all shadow-sm">
          <Github size={20} />
        </a>
        <a href={`https://${personalInfo.linkedin.includes('http') ? '' : 'www.linkedin.com/in/'}${personalInfo.linkedin.replace('linkedin.com/in/', '')}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white border border-slate-300 rounded-full text-slate-700 hover:text-blue-600 hover:border-blue-500 transition-all shadow-sm">
          <Linkedin size={20} />
        </a>
        {personalInfo.instagram && (
          <a href={`https://instagram.com/${personalInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white border border-slate-300 rounded-full text-slate-700 hover:text-blue-600 hover:border-blue-500 transition-all shadow-sm">
            <Instagram size={20} />
          </a>
        )}
      </div>
    </div>
  );
}

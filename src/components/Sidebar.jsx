import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { ObfuscatedPhone } from './ObfuscatedPhone';

export function Sidebar({ data }) {
  const { personalInfo } = data;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden md:flex flex-col items-center text-center bg-slate-100 text-slate-600 rounded-2xl shadow-xl shadow-slate-200 border border-slate-300 p-8 md:w-[320px] lg:w-[350px] shrink-0 md:sticky md:top-24 md:max-h-[calc(100vh-12rem)] overflow-y-auto custom-scrollbar"
    >

      <motion.div
        className="mb-8 relative group"
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 ring-1 ring-slate-300">
          <img
            src={personalInfo.image}
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <h1 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight text-slate-800">{personalInfo.name}</h1>

      <div className="space-y-2 mb-8">
        {personalInfo.roles.map((role, index) => (
          <p key={index} className="text-xs font-semibold bg-white text-slate-600 py-1.5 px-3 rounded-full inline-block m-1 border border-slate-300 shadow-sm">{role}</p>
        ))}
      </div>

      <div className="w-full h-px bg-slate-300 mb-8"></div>

      <div className="space-y-5 w-full flex flex-col items-center">
        <div className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors cursor-default">
          <MapPin size={18} className="text-slate-400" />
          <span className="text-sm">{personalInfo.location}</span>
        </div>

        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
          <Mail size={18} className="text-slate-400" />
          <span className="text-sm">{personalInfo.email}</span>
        </a>

        <div className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors cursor-default">
          <Phone size={18} className="text-slate-400" />
          <ObfuscatedPhone phoneNumber={personalInfo.mobile} className="text-sm" />
        </div>

        <div className="flex gap-4 mt-6">
          <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-slate-300 rounded-full text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 transition-all shadow-sm">
            <Github size={20} />
          </a>
          <a href={`https://${personalInfo.linkedin.includes('http') ? '' : 'www.linkedin.com/in/'}${personalInfo.linkedin.replace('linkedin.com/in/', '')}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-slate-300 rounded-full text-slate-600 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all shadow-sm">
            <Linkedin size={20} />
          </a>
          {personalInfo.instagram && (
            <a href={`https://instagram.com/${personalInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-slate-300 rounded-full text-slate-600 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all shadow-sm">
              <Instagram size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="mt-auto pt-8 text-xs text-slate-400 hidden md:block">
        © {new Date().getFullYear()} Simon Aquino
      </div>
    </motion.aside>
  );
}

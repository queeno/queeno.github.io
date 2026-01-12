import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Sidebar({ data }) {
  const { personalInfo } = data;

  return (
    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden md:flex bg-slate-900 text-white p-8 md:h-screen md:sticky md:top-0 flex-col items-center md:items-start text-center md:text-left shadow-xl z-10 overflow-y-auto"
    >

      <motion.div
        className="mb-6 relative group"
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mx-auto md:mx-0">
          <img
            src={personalInfo.image}
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <h1 className="text-3xl font-bold mb-2 tracking-tight">{personalInfo.name}</h1>

      <div className="space-y-1 mb-6 text-slate-300">
        {personalInfo.roles.map((role, index) => (
          <p key={index} className="text-sm font-medium">{role}</p>
        ))}
      </div>

      <div className="w-full h-px bg-slate-700 my-6"></div>

      <div className="space-y-4 w-full">
        <div className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400 transition-colors">
          <MapPin size={18} />
          <span className="text-sm">{personalInfo.location}</span>
        </div>

        <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400 transition-colors">
          <Mail size={18} />
          <span className="text-sm">{personalInfo.email}</span>
        </a>

        <div className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400 transition-colors">
          <Phone size={18} />
          <span className="text-sm">{personalInfo.mobile}</span>
        </div>

        <div className="flex gap-4 justify-center md:justify-start mt-6">
          <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
            <Github size={20} />
          </a>
          <a href={`https://${personalInfo.linkedin.includes('http') ? '' : 'www.linkedin.com/in/'}${personalInfo.linkedin.replace('linkedin.com/in/', '')}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <div className="mt-auto pt-8 text-xs text-slate-500 hidden md:block">
        © {new Date().getFullYear()} Simon Aquino
      </div>
    </motion.aside>
  );
}

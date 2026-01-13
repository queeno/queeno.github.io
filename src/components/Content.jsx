import { Section } from './Section';
import { Briefcase, GraduationCap, Award, Cpu, Globe, ArrowUpRight, Languages } from 'lucide-react';

export function Content({ data, labels }) {
  // Fallback labels to prevent crash if undefined
  const l = labels || {
    summary: 'Executive Profile',
    experience: 'Professional Experience',
    skills: 'Technical Skills',
    education: 'Education',
    certificates: 'Certificates & Awards',
    languages: 'Languages'
  };

  return (
    <div className="p-8 md:p-12 max-w-4xl mx-auto">

      {/* Summary Section */}
      <Section title={l.summary}>
        <p className="text-lg text-slate-600 leading-8 mb-6">
          {data.summary}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
          {data.technicalStrengths.map((strength, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <ArrowUpRight size={16} className="text-blue-500" />
                {strength.title}
              </h3>
              <p className="text-sm text-slate-600">{strength.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section title={l.experience} delay={0.1}>
        <div className="space-y-10 relative border-l-2 border-slate-200 ml-3 pl-8 pb-4">
          {data.experience.map((job, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-500 shadow-sm"></span>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">{job.period}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 mb-4 font-medium text-sm">
                <Briefcase size={16} />
                <span>{job.company}</span>
                <span className="mx-1">•</span>
                <Globe size={16} />
                <span>{job.location}</span>
              </div>

              <ul className="space-y-3">
                {job.points.map((point, k) => (
                  <li key={k} className="text-slate-700 text-sm md:text-base pl-2">
                    <span className="font-semibold text-slate-900">{point.bold}:</span> {point.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section title={l.skills} delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(data.skills).map(([category, skills], idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Cpu size={18} className="text-blue-600" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded hover:bg-slate-200 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section title={l.education} delay={0.3}>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          {data.education.map((edu, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="p-3 bg-white rounded-lg h-fit shadow-sm">
                <GraduationCap className="text-blue-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                <div className="text-slate-600">{edu.institution}, {edu.location}</div>
                <div className="text-sm text-slate-500 mt-1">{edu.year}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Languages Section */}
      <Section title={l.languages} delay={0.4}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.languages && data.languages.map((lang, idx) => {
            const flags = {
              'English': '🇬🇧', 'Inglese': '🇬🇧', 'Englisch': '🇬🇧', 'Engelsk': '🇬🇧',
              'Italian': '🇮🇹', 'Italiano': '🇮🇹', 'Italienisch': '🇮🇹', 'Italiensk': '🇮🇹',
              'German': '🇩🇪', 'Tedesco': '🇩🇪', 'Deutsch': '🇩🇪', 'Tysk': '🇩🇪',
              'Danish': '🇩🇰', 'Danese': '🇩🇰', 'Dänisch': '🇩🇰', 'Dansk': '🇩🇰'
            };
            return (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl shrink-0">
                  {flags[lang.language] || '🌐'}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{lang.language}</h4>
                  <p className="text-sm text-slate-600">{lang.proficiency}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Certificates Section */}
      <Section title={l.certificates} delay={0.5}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.certificates.map((cert, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
              <Award className="text-amber-500 mt-1 shrink-0" size={18} />
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">{cert.name}</h4>
                <p className="text-xs text-slate-500">{cert.issuer} • {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}

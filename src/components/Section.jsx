import { motion } from 'framer-motion';

export function Section({ title, children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-6 uppercase tracking-wider">
        {title}
      </h2>
      <div className="text-slate-700 leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
}

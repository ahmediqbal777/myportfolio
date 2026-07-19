import { motion } from 'motion/react';
import { Code2, Cpu, Database, LayoutTemplate, MessageSquare, Target, Users, Clock } from 'lucide-react';

const techSkills = [
  { name: 'Java', icon: Code2, color: 'text-orange-400' },
  { name: 'Python', icon: Cpu, color: 'text-blue-400' },
  { name: 'JavaScript & React', icon: LayoutTemplate, color: 'text-cyan-400' },
  { name: 'HTML & CSS', icon: LayoutTemplate, color: 'text-pink-400' },
  { name: 'SQL & MongoDB', icon: Database, color: 'text-emerald-400' },
  { name: 'OOP', icon: Code2, color: 'text-purple-400' },
  { name: 'DSA', icon: Cpu, color: 'text-yellow-400' },
  { name: 'AI Basics', icon: Cpu, color: 'text-indigo-400' },
];

const softSkills = [
  { name: 'Communication & Client Handling', icon: MessageSquare },
  { name: 'Lead Generation', icon: Target },
  { name: 'Problem Solving', icon: Cpu },
  { name: 'Teamwork', icon: Users },
  { name: 'Time Management', icon: Clock },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sm font-mono text-[var(--color-electric-cyan)] tracking-widest uppercase mb-2"
          >
            &gt; CAPABILITIES
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-sans tracking-tight"
          >
            Technical Arsenal
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Tech Skills */}
          <div>
            <h4 className="text-xl font-bold mb-8 font-mono border-b border-white/10 pb-4">{'// Hard Skills'}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  className="interactive glass-card p-6 flex flex-col items-center justify-center text-center gap-3 transition-colors cursor-none"
                >
                  <skill.icon className={`${skill.color} opacity-80`} size={28} />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div className="flex flex-col gap-12">
            <div>
              <h4 className="text-xl font-bold mb-8 font-mono border-b border-white/10 pb-4">{'// Soft Skills'}</h4>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="interactive px-5 py-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-sm"
                  >
                    <skill.icon size={16} className="text-[var(--color-electric-cyan)]" />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 font-mono border-b border-white/10 pb-4">{'// Languages'}</h4>
              <div className="flex gap-6">
                <div className="glass-card px-6 py-4 flex-1">
                  <div className="text-sm text-gray-400 mb-1">English</div>
                  <div className="font-bold">Fluent</div>
                </div>
                <div className="glass-card px-6 py-4 flex-1">
                  <div className="text-sm text-gray-400 mb-1">Urdu</div>
                  <div className="font-bold">Native</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

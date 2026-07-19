import { motion } from 'motion/react';
import { Terminal, Database, Brain, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-[var(--color-electric-cyan)] tracking-widest uppercase mb-2">&gt; SYS.INFO</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-sans tracking-tight">Professional Summary</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio Span 2 columns */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-panel p-6 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-electric-cyan)]/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-[var(--color-electric-cyan)]/10 transition-colors duration-700" />
            <Terminal className="text-[var(--color-electric-cyan)] mb-6 opacity-80" size={32} />
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              I am a Software Engineering undergraduate at <span className="text-white font-medium">Sir Syed University of Engineering and Technology</span> with hands-on project experience across Java, Python, and full-stack web development (JavaScript, React, SQL, MongoDB). 
              <br/><br/>
              I possess a practical grounding in <span className="text-[var(--color-electric-cyan)]">Data Structures and Algorithms</span>, Object-Oriented Programming, and AI fundamentals. As a quick learner, I am seeking to apply my strong problem-solving and development skills in a dynamic software engineering role.
            </p>
          </motion.div>

          {/* Side Bento Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-6 md:p-8 relative overflow-hidden flex flex-col justify-center group"
          >
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors duration-700" />
             <Users className="text-purple-400 mb-6 opacity-80" size={32} />
             <h4 className="text-xl font-bold mb-4">Client Facing</h4>
             <p className="text-sm md:text-base text-gray-400">
               Paired with real-world client communication and lead-generation experience, ensuring technical solutions align with user and business needs.
             </p>
          </motion.div>

          {/* Bottom Bento Boxes */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 md:p-8 group"
          >
            <Database className="text-green-400 mb-4 opacity-80" size={28} />
            <h4 className="text-lg font-bold mb-2">Full Stack Architecture</h4>
            <p className="text-sm text-gray-400">End-to-end development bridging database logic with responsive interfaces.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 glass-panel p-6 md:p-8 group flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="p-4 bg-white/5 rounded-2xl shrink-0">
              <Brain className="text-blue-400" size={32} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Algorithm & AI Fundamentals</h4>
              <p className="text-sm text-gray-400">Applying core DSA and OOP principles to build efficient systems, alongside hands-on computer vision and AI integrations.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

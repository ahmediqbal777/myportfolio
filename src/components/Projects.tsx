import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Stickman Fight",
    category: "2D Fighting Game",
    tech: ["Java", "DSA Project"],
    desc: "Built a two-player fighting game in Java applying OOP principles, collision detection, and a health/state management system using core DSA logic.",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 2,
    title: "Bone Fracture Detection AI",
    category: "AI / Computer Vision",
    tech: ["Python", "OpenCV", "TensorFlow"],
    desc: "Developed a computer vision project to classify X-ray images for possible bone fractures, covering image preprocessing, dataset handling, and model training/testing.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 3,
    title: "Blueprint AI",
    category: "Sketch-to-Website Generator",
    tech: ["Web Engineering", "AI-Assisted Design"],
    desc: "Designed a web engineering concept that converts layout sketches into structured, responsive website designs using an AI-assisted generation flow.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 4,
    title: "Wearition",
    category: "Multi-Brand Fashion Storefront",
    tech: ["Web Development", "React"],
    desc: "Designed and built a responsive multi-brand fashion storefront with a premium, brand-focused UI/UX for an online shopping experience. Hosted at wearition.store.",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 5,
    title: "Event Management System",
    category: "Database Integration",
    tech: ["Java", "SQL"],
    desc: "Implemented a database-integrated system with full CRUD operations for structured event data management.",
    color: "from-yellow-500/20 to-orange-500/20"
  }
];

function ProjectCard({ project, onClick, isDimmed, onMouseEnter, onMouseLeave }: { project: any, onClick: () => void, isDimmed: boolean, onMouseEnter: () => void, onMouseLeave: () => void, key?: number | string }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX(((y - centerY) / centerY) * -10);
    setRotateY(((x - centerX) / centerX) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    onMouseLeave();
  };

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY, scale: isDimmed ? 0.95 : 1, opacity: isDimmed ? 0.4 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`interactive glass-panel p-8 cursor-pointer h-full relative overflow-hidden group perspective-1000`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div style={{ transform: "translateZ(30px)" }}>
        <h4 className="text-sm font-mono text-[var(--color-electric-cyan)] mb-2">{project.category}</h4>
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tech.map((t: string) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-[var(--color-electric-cyan)] tracking-widest uppercase mb-2">&gt; WORK</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-sans tracking-tight">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
              isDimmed={hoveredProject !== null && hoveredProject !== project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
      </div>

      {/* Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full h-[85vh] md:h-[60vh] bg-[#0b0f19]/95 backdrop-blur-xl border-t border-white/10 z-50 rounded-t-3xl p-6 md:p-12 overflow-y-auto"
            >
              <div className="max-w-4xl mx-auto relative pt-4 md:pt-0">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="interactive absolute -top-2 right-0 p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X size={24} />
                </button>
                
                <h4 className="text-sm font-mono text-[var(--color-electric-cyan)] mb-2">{selectedProject.category}</h4>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 pr-10">{selectedProject.title}</h3>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  {selectedProject.desc}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {selectedProject.tech.map((t: string) => (
                    <span key={t} className="px-4 py-2 rounded-full bg-[var(--color-electric-cyan)]/10 border border-[var(--color-electric-cyan)]/20 text-[var(--color-electric-cyan)]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="interactive px-6 py-3 rounded bg-white text-black font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors">
                    <ExternalLink size={18} /> View Live
                  </button>
                  <button className="interactive px-6 py-3 rounded border border-white/20 text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                    <Code size={18} /> Source Code
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

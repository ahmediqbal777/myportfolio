import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Globe, Copy, Check, Send } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '03333744318', action: () => copyToClipboard('03333744318', 'Phone') },
    { icon: Mail, label: 'Email', value: 'ahmediqbal2003f9@gmail.com', action: () => window.open('mailto:ahmediqbal2003f9@gmail.com') },
    { icon: Globe, label: 'LinkedIn', value: 'linkedin.com/in/ahmediqball', action: () => window.open('https://linkedin.com/in/ahmediqball', '_blank') },
    { icon: MapPin, label: 'Location', value: 'Block 17, Gulistan-e-Johar, Karachi', action: () => copyToClipboard('Block 17, Gulistan-e-Johar, Karachi', 'Location') }
  ];

  return (
    <section id="contact" className="pt-24 min-h-screen flex flex-col relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center mb-32 z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sm font-mono text-[var(--color-electric-cyan)] tracking-widest uppercase mb-2"
          >
            &gt; INIT_CONNECTION
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-sans tracking-tight"
          >
            Let's Build Together
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Terminal Box */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-xl border border-white/20 bg-[#050505] overflow-hidden font-mono shadow-2xl"
          >
            <div className="bg-white/10 px-4 py-2 border-b border-white/10 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-gray-400 ml-2">guest@ahmed-portfolio:~</span>
            </div>
            <div className="p-4 md:p-6 text-sm md:text-base text-gray-300">
              <p className="mb-4 break-words"><span className="text-green-400">guest@ahmed-portfolio</span>:<span className="text-blue-400">~</span>$ ./ping_ahmed.sh</p>
              <p className="mb-2">Establishing secure connection...</p>
              <p className="mb-6 text-[var(--color-electric-cyan)]">Connection established.</p>
              
              <form className="flex flex-col gap-4 mt-6">
                <div className="flex flex-col gap-1">
                   <label className="text-xs text-gray-500">Name</label>
                   <input type="text" className="interactive bg-transparent border-b border-white/20 focus:border-[var(--color-electric-cyan)] outline-none py-1 transition-colors" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col gap-1">
                   <label className="text-xs text-gray-500">Message</label>
                   <textarea className="interactive bg-transparent border-b border-white/20 focus:border-[var(--color-electric-cyan)] outline-none py-1 h-20 resize-none transition-colors" placeholder="Enter your message..." />
                </div>
                <button type="button" className="interactive mt-4 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded flex items-center justify-center gap-2 transition-colors text-[var(--color-electric-cyan)]">
                  <Send size={16} /> SEND_MESSAGE
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Badges */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {contactInfo.map((info) => (
              <div 
                key={info.label}
                onClick={info.action}
                className="interactive group glass-panel p-6 flex items-center gap-6 cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[var(--color-electric-cyan)] group-hover:scale-110 transition-transform">
                  <info.icon size={24} />
                </div>
                <div className="flex-grow overflow-hidden">
                  <div className="text-sm text-gray-400 font-mono mb-1">{info.label}</div>
                  <div className="text-base sm:text-lg font-medium break-all">{info.value}</div>
                </div>
                <div className="text-gray-500 group-hover:text-white transition-colors">
                  {copied === info.label ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* SVG Wave Footer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg
          className="relative block w-full h-[150px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            animate={{
              d: [
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.22,200.4,113.8,241.1,109.4,281.4,96.3,321.39,56.44Z",
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.22,200.4,113.8,241.1,109.4,281.4,96.3,321.39,56.44Z".replace(/120H0/g, '120H0').replace(/92.83/g, '62.83').replace(/41.86/g, '71.86'), // slight variation
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.22,200.4,113.8,241.1,109.4,281.4,96.3,321.39,56.44Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            fill="rgba(6, 182, 212, 0.1)"
          ></motion.path>
          <motion.path
            animate={{
              d: [
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z".replace(/72.05/g, '42.05').replace(/13.08/g, '43.08'),
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            fill="rgba(26, 42, 66, 0.4)"
          ></motion.path>
        </svg>
      </div>
    </section>
  );
}

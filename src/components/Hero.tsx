import { motion } from 'framer-motion';
import profileImage from '../assets/profile_image.jfif';
import resumePdf from '../assets/sutkanthapdreddy_resume.pdf';
import { meta } from '../data/portfolioData';
import { Button } from './ui';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-14 px-5 sm:px-8 bg-gradient-hero overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div 
          className="flex flex-col md:grid md:grid-cols-[1fr_auto] md:gap-16 md:items-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* ── Text content ── */}
          <div className="order-2 md:order-1 mt-12 md:mt-0">
            {/* Status badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#4ade80] animate-pulse shrink-0" />
              <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase bg-emerald-400/10 py-1 px-3 rounded-full border border-emerald-400/20">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-[2.5rem] sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-4">
                S Utkantha<br />
                <span className="text-gradient">Priyadarshini Reddy</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.p variants={itemVariants} className="text-ink-secondary text-base sm:text-lg lg:text-xl font-medium mb-5">
              <span className="text-accent-light font-bold">MCA Candidate</span>
              <span className="opacity-50 mx-2">|</span>
              Software Developer
            </motion.p>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="text-ink-muted text-sm sm:text-base leading-relaxed max-w-lg mb-8">
              {meta.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button href="#projects">View Projects →</Button>
              <Button href={resumePdf} variant="outline" download="Utkantha_Resume.pdf">
                ↓ Download Resume
              </Button>
            </motion.div>
          </div>

          {/* ── Photo & Floating Skills ── */}
          <motion.div 
            className="order-1 md:order-2 flex justify-center items-center relative"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Glow Behind Image */}
              <div className="absolute inset-0 rounded-full bg-accent/40 blur-3xl scale-125 animate-pulse" />
              
              {/* Colorful Floating Tech Icons Around Profile */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-8 sm:-top-8 sm:-left-12 z-20 text-[#F7DF1E] drop-shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 sm:w-14 sm:h-14 opacity-90"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M24 0v24H0V0h24zM11.2 19.38c.67.43 1.57.73 2.53.73 2.1 0 3.32-1.07 3.32-2.73 0-3.32-5.4-1.83-5.4-5.32 0-1.85 1.53-3.08 3.65-3.08 1.13 0 2.04.31 2.65.65l-.83 2.22c-.49-.31-1.15-.55-1.92-.55-1.12 0-1.87.64-1.87 1.5 0 2.65 5.42 1.63 5.42 5.37 0 2.37-1.87 3.73-4.13 3.73-1.32 0-2.48-.41-3.32-.97l.9-2.55zM7.05 19.53V10.22h-3v9.34c0 1.93.92 2.82 2.45 2.82 1 0 1.67-.22 2.15-.49l-.57-2.39c-.28.16-.62.3-1.05.3-.65 0-.98-.38-.98-1.27z" fill="currentColor"/></svg>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -15, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-10 sm:-right-16 z-20 text-[#61DAFB] drop-shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 sm:w-16 sm:h-16 opacity-90"><path d="M12 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7.8a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm7.26 2.32c-.85-.14-1.57.44-1.93 1.15-.31.62-.26 1.34.13 1.9l.48.7-2.73 2.73-3.64-3.63a2.49 2.49 0 0 0-2.26-1.55 2.5 2.5 0 0 0-2.26 1.55L3.41 19.3l-1.07-1.07a2.5 2.5 0 0 0-1.77-.73A2.5 2.5 0 0 0 .15 20a2.5 2.5 0 0 0 .42 1.77L2.7 23.9a2.5 2.5 0 0 0 1.77.73 2.5 2.5 0 0 0 1.77-.73L9 21.09l3.64 3.63a2.5 2.5 0 0 0 3.53 0l3.87-3.86a2.5 2.5 0 0 0 .73-1.77 2.5 2.5 0 0 0-.73-1.77l-1.07-1.07a2.5 2.5 0 0 0-.73-1.77zM11.12 23l-2.73-2.73L5.56 23l-2.73-2.73 3.87-3.86 2.73 2.73 2.73-2.73L16 19.24 13.84 21.4l-2.72 1.6zM22.85 20a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" fill="currentColor"/></svg>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 left-0 sm:-bottom-6 sm:left-4 z-20 text-[#3776AB] drop-shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 sm:w-12 sm:h-12 opacity-90"><path d="M12.001 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm-3.41 4.542h6.818c.847 0 1.536.687 1.536 1.533V7.61h-2.15v-.867H9.213v8.528h2.15v-.868h4.636v1.535a1.536 1.536 0 0 1-1.536 1.533H8.59a1.536 1.536 0 0 1-1.535-1.533V6.075a1.536 1.536 0 0 1 1.535-1.533z"/></svg>
              </motion.div>

              <motion.img
                src={profileImage}
                alt={meta.name}
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover object-top border-4 border-border shadow-2xl z-10"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

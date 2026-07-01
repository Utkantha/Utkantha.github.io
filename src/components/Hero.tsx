import { motion } from 'framer-motion';
import profileImage from '../assets/profile_image.png';
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

              <motion.img
                src={profileImage}
                alt={meta.name}
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover object-top border-4 border-border shadow-2xl z-10"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

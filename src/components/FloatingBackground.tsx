import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SiPython, SiJavascript, SiTypescript, SiReact, SiHtml5, SiNodedotjs, SiMongodb, SiTailwindcss, SiGit, SiVite, SiFramer } from 'react-icons/si'
import { FaDatabase, FaServer, FaCode } from 'react-icons/fa'

const ICONS = [
  { Icon: SiPython, color: "#3776AB" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiHtml5, color: "#E34F26" },
  // using SiReact again or just fallback for css
  { Icon: SiReact, color: "#1572B6" }, // Replaced SiCss as it caused issues earlier, but I'll use FaCode instead
  { Icon: SiNodedotjs, color: "#339933" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: SiVite, color: "#646CFF" },
  { Icon: SiFramer, color: "#0055FF" },
  { Icon: FaDatabase, color: "#6c63ff" },
  { Icon: FaServer, color: "#6c63ff" },
  { Icon: FaCode, color: "#6c63ff" }
]

export default function FloatingBackground() {
  const [elements, setElements] = useState<any[]>([])

  useEffect(() => {
    // Generate random positions on mount
    const newElements = Array.from({ length: 30 }).map((_, i) => {
      const iconDef = ICONS[i % ICONS.length];
      return {
        id: i,
        Icon: iconDef.Icon,
        color: iconDef.color,
        size: Math.random() * 25 + 20,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 15 + 10, // Reduced from 20+25 to 15+10 (faster animations)
        delay: Math.random() * -20,
        xOffset: Math.random() * 100 - 50,
        yOffset: Math.random() * 100 - 50,
        rotate: Math.random() * 360,
      }
    })
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => {
        const { Icon, color } = el
        return (
          <motion.div
            key={el.id}
            initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
            animate={{
              x: [0, el.xOffset, 0],
              y: [0, el.yOffset, 0],
              rotate: [0, el.rotate, 360],
              opacity: [0.15, 0.4, 0.15]
            }}
            transition={{
              duration: el.duration,
              delay: el.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              left: `${el.left}%`,
              top: `${el.top}%`,
              color: color,
            }}
          >
            <Icon size={el.size} />
          </motion.div>
        )
      })}
    </div>
  )
}

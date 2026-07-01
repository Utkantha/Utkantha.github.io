import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SiPython, SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss, SiNodedotjs, SiMongodb, SiTailwindcss, SiGit, SiVite, SiFramer } from 'react-icons/si'
import { FaDatabase, FaServer, FaCode } from 'react-icons/fa'

const ICONS = [
  SiPython, SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss, SiNodedotjs, SiMongodb, SiTailwindcss, SiGit, SiVite, SiFramer,
  FaDatabase, FaServer, FaCode
]

export default function FloatingBackground() {
  const [elements, setElements] = useState<any[]>([])

  useEffect(() => {
    // Generate random positions on mount
    const newElements = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      Icon: ICONS[i % ICONS.length],
      size: Math.random() * 25 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 20 + 25,
      delay: Math.random() * -20,
      xOffset: Math.random() * 100 - 50,
      yOffset: Math.random() * 100 - 50,
      rotate: Math.random() * 360,
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => {
        const { Icon } = el
        return (
          <motion.div
            key={el.id}
            initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
            animate={{
              x: [0, el.xOffset, 0],
              y: [0, el.yOffset, 0],
              rotate: [0, el.rotate, 360],
              opacity: [0.1, 0.3, 0.1]
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
            }}
          >
            <Icon 
              size={el.size} 
              className="text-accent/30 dark:text-accent-light/30" 
            />
          </motion.div>
        )
      })}
    </div>
  )
}

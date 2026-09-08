import { motion } from 'framer-motion'
import { Code2, Database, Globe, Cpu, Terminal, Layout, Layers, Monitor, Server, Smartphone, Cloud, Key, Wifi, Zap, Hexagon } from 'lucide-react'
import { useEffect, useState } from 'react'

const ICONS = [Code2, Database, Globe, Cpu, Terminal, Layout, Layers, Monitor, Server, Smartphone, Cloud, Key, Wifi, Zap, Hexagon]

export default function FloatingBackground() {
  const [elements, setElements] = useState<any[]>([])

  useEffect(() => {
    // Generate random positions only on mount so it matches client hydration
    const newElements = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      Icon: ICONS[i % ICONS.length],
      size: Math.random() * 20 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20,
      xOffset: Math.random() * 100 - 50,
      yOffset: Math.random() * 100 - 50,
      rotate: Math.random() * 360,
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {elements.map((el) => {
        const { Icon } = el
        return (
          <motion.div
            key={el.id}
            initial={{ 
              x: 0, 
              y: 0, 
              rotate: 0,
              opacity: 0
            }}
            animate={{
              x: [0, el.xOffset, 0],
              y: [0, el.yOffset, 0],
              rotate: [0, el.rotate, 360],
              opacity: [0.03, 0.08, 0.03]
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
              className="text-ink-muted dark:text-ink-secondary" 
            />
          </motion.div>
        )
      })}
    </div>
  )
}

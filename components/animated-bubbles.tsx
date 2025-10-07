"use client"

import { useEffect, useState } from "react"

export function AnimatedBubbles() {
  const [bubbles, setBubbles] = useState<Array<{ id: number; left: string; delay: string; duration: string }>>([])

  useEffect(() => {
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 10}s`,
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bottom-0 w-2 h-2 bg-ocean-light/20 rounded-full animate-bubble"
          style={{
            left: bubble.left,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration,
          }}
        />
      ))}
    </div>
  )
}

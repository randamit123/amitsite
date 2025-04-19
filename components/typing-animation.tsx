'use client'

import { useState, useEffect } from 'react'

export function TypingAnimation() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const phrases = [
    'AI/ML Researcher',
    'Software Engineer',
    'UCLA Math & CS Undergraduate'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % phrases.length
      const fullText = phrases[currentIndex]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      // Set typing speed
      if (isDeleting) {
        setTypingSpeed(50) // Faster when deleting
      } else {
        setTypingSpeed(150) // Normal speed when typing
      }

      // If completed typing the current phrase
      if (!isDeleting && text === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500)
      } 
      // If deleted the current phrase
      else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        // Small pause before typing the next phrase
        setTypingSpeed(500)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  return (
    <span className="text-xl md:text-2xl font-medium text-zinc-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

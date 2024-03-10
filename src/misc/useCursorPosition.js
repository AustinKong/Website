import { useState, useEffect } from 'react'

/* Hook for getting mouse position */
const useCursorPosition = () => {
  const [
    cursorPosition,
    setCursorPosition
  ] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateCursorPosition)
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return { cursorX: cursorPosition.x, cursorY: cursorPosition.y }
}

export default useCursorPosition
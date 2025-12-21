import { useEffect, useState, useRef } from 'react'

export default function useTypewriter(words = [], { typeSpeed = 80, deleteSpeed = 50, delay = 1200 } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [blink, setBlink] = useState(true)
  const [loopNum, setLoopNum] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (!isDeleting && subIndex === words[index].length) {
        setIsDeleting(true)
        setTimeout(() => {}, delay)
        return
      }

      if (isDeleting && subIndex === 0) {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % words.length)
        setLoopNum((n) => n + 1)
        return
      }

      setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeoutRef.current)
  }, [subIndex, index, isDeleting, words, typeSpeed, deleteSpeed, delay])

  useEffect(() => {
    const blinker = setInterval(() => setBlink((b) => !b), 500)
    return () => clearInterval(blinker)
  }, [])

  return words.length ? words[index].slice(0, subIndex) : ''
}

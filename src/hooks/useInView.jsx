import { useEffect, useState, useRef } from 'react'

export default function useInView(options = { threshold: 0.12 }) {
  const ref = useRef(null)
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIntersecting(true)
          observer.unobserve(el)
        }
      })
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options])

  return [ref, isIntersecting]
}

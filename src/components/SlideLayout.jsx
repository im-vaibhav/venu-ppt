import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useCallback } from 'react'
import './SlideLayout.css'

export default function SlideLayout({ children, total }) {
  const navigate = useNavigate()
  const location = useLocation()

  const currentSlide = parseInt(location.pathname.split('/').pop(), 10)

  const goNext = useCallback(() => {
    if (currentSlide < total) navigate(`/slide/${currentSlide + 1}`)
  }, [currentSlide, total, navigate])

  const goPrev = useCallback(() => {
    if (currentSlide > 1) navigate(`/slide/${currentSlide - 1}`)
  }, [currentSlide, navigate])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') goNext()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  return (
    <div className="slide-wrapper">
      <div className="slide-content">{children}</div>
    </div>
  )
}

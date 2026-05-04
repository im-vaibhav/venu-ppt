import { Routes, Route, Navigate } from 'react-router-dom'
import SlideLayout from './components/SlideLayout'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'
import Slide8 from './slides/Slide8'
import Slide9 from './slides/Slide9'
import Slide10 from './slides/Slide10'
import Slide11 from './slides/Slide11'
import Slide12 from './slides/Slide12'

// Import future slides here as you add them

const slides = [
  { path: '/slide/1',  component: <Slide1 /> },
  { path: '/slide/2',  component: <Slide2 /> },
  { path: '/slide/3',  component: <Slide3 /> },
  { path: '/slide/4',  component: <Slide4 /> },
  { path: '/slide/5',  component: <Slide5 /> },
  { path: '/slide/6',  component: <Slide6 /> },
  { path: '/slide/7',  component: <Slide7 /> },
  { path: '/slide/8',  component: <Slide8 /> },
  { path: '/slide/9',  component: <Slide9 /> },
  { path: '/slide/10', component: <Slide10 /> },
  { path: '/slide/11', component: <Slide11 /> },
  { path: '/slide/12', component: <Slide12 /> },
  // Add more slides here
]

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/slide/1" replace />} />
      {slides.map(({ path, component }) => (
        <Route
          key={path}
          path={path}
          element={
            <SlideLayout total={slides.length}>
              {component}
            </SlideLayout>
          }
        />
      ))}
    </Routes>
  )
}

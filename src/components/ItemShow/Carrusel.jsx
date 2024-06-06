import { useRef } from 'react'
import ItemCarrusel from './ItemCarrusel'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Carrusel = () => {
  const contentRef = useRef(null)
  const phone = window.innerWidth < 850

  const smoothScroll = (element, start, end, duration) => {
    let startTime = null

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime
      }
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      const point = start + (end - start) * progress

      element.scrollLeft = point

      if (timeElapsed < duration) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  const arrowLeft = () => {
    if (contentRef.current) {
      smoothScroll(
        contentRef.current,
        contentRef.current.scrollLeft,
        contentRef.current.scrollLeft - 300,
        500
      )
    }
  }

  const arrowRight = () => {
    if (contentRef.current) {
      smoothScroll(
        contentRef.current,
        contentRef.current.scrollLeft,
        contentRef.current.scrollLeft + 300,
        500
      )
    }
  }

  return (
    <div
      id="news"
      className="w-screen h-screen  flex flex-col  justify-center items-center"
    >
      <div className="w-4/5 flex justify-between items-center">
        <h1 className="text-3xl  text-start mac:w-4/5 phone:w-full overflow-hidden h-24">
          OTROS PRODUCTOS
        </h1>
        {phone ? null : (
          <div className="flex gap-5 p-2">
            <span
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-custom cursor-pointer"
              onClick={() => arrowLeft()}
            >
              <ArrowBackIosNewIcon />
            </span>
            <span
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-custom cursor-pointer"
              onClick={() => arrowRight()}
            >
              <ArrowForwardIosIcon />
            </span>
          </div>
        )}
      </div>
      <div className="w-full phone:h-[75%] mac:h-4/6 flex justify-end">
        <div
          ref={contentRef}
          className="phone:w-full mac:w-[90%] phone:h-[450px] flex items-center overflow-auto scroll  gap-5 p-5"
        >
          <ItemCarrusel />
        </div>
      </div>
    </div>
  )
}

export default Carrusel

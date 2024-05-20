import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_shirt } from '../../../Data/mens_shirt'

const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = data.slice(0, 40).map((item) => <HomeSectionCard product={item} />);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => {console.log(1);setActiveIndex(activeIndex + 1)}
  const syncActiveIndex = (item) => setActiveIndex(item)

  return (
    <div className='relative px-10 lg:px-8'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
        />

        {activeIndex !== items.length - 5 &&
          <Button variant="contained" className="z-50" onClick={slideNext} sx={{
            position: "absolute", top: "8rem", right: "0rem",
            transform: "translateX(50%) rotate(90deg)", backgroundColor: 'white'
          }} aria-label="next">
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: 'black' }} />
          </Button>}

        {activeIndex !== 0 &&
          <Button variant="contained" onClick={slidePrev} className="z-50" sx={{
            position: "absolute", top: "8rem", left: "0rem",
            transform: "translateX(50%) rotate(-90deg)", backgroundColor: 'white'
          }} aria-label="next">
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: 'black' }} />
          </Button>}

      </div>
    </div>
  )
}

export default HomeSectionCarousel

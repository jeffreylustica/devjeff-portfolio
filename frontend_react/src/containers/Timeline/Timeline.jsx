import { useState, useEffect } from 'react'
import './Timeline.scss'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'

const Timeline = () => {
  const [timeline, setTimeline] = useState([])
  const [brands, setBrands] = useState([])
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    const query = '*[_type == "timeline"]'
    const queryBrands = '*[_type == "brands"]'

    client.fetch(query)
      .then(data => {
        const sortedData = data.sort((a,b) => a.id - b.id)
        setTimeline(sortedData)
      })

    client.fetch(queryBrands)
    .then(data => setBrands(data))

  },[])

  const changeActive = (id) => {
    setActiveCard(id)
  }

  const slideLeft= () => {
    setActiveCard(prevActive => {
      return prevActive === 0 ? timeline.length - 1 : prevActive - 1
    })
  }

  const slideRight= () => {
    setActiveCard(prevActive => {
      return prevActive === timeline.length - 1 ? 0 : prevActive + 1
    })
  }

  return (
    <div id='timeline' className='timeline'>
      <div className="container">
        <h2 className="timeline__heading">Timeline</h2>
        <div className="timeline__events">
          {timeline.map((timeline, i) => (
            timeline.id === activeCard &&
            <motion.div 
              initial= {{x: 200, opacity:0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.5, ease: 'easeInOut'}}
              whileInView={{opacity: [0, 1], transition: {duration: .5, delay: .3}}}
              className='timeline__card' 
              key={i}
            >
              <img className='timeline__card__logo' src={urlFor(timeline.imgUrl)} alt='brand' />
              <div className='timeline__card__info'>
                <p className='timeline__card__info__desc'>{timeline.description}</p>
                <div className='timeline__card__info__name'>{timeline.company}</div>
                <span className='timeline__card__info__date'>{timeline.fromDate} - {timeline.toDate}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="timeline__nav">
          {timeline.map((timeline, i) => (
            timeline.id === activeCard && (
              <div className='timeline__nav__chevron' key={i}>
                <motion.span 
                  whileHover={{backgroundColor: 'hsla(0, 0%, 0%, .5)', color: 'hsla(0, 0%,  100%, .95)'}}
                  className='timeline__nav__chevron__left flexCenter' 
                  onClick={slideLeft}>      
                    <HiOutlineChevronLeft />
                </motion.span>
                  <span className='timeline__nav__chevron__date'>{timeline.toDate}</span>
                <motion.span 
                  whileHover={{backgroundColor: 'hsla(0, 0%, 0%, .5)', color: 'hsla(0, 0%, 100%, .95)'}}
                  className='timeline__nav__chevron__right flexCenter' 
                  onClick={slideRight}>
                    <HiOutlineChevronRight />
                </motion.span>        
              </div>
            )
          ))}
          {timeline.map((timeline, i) => (
            <div className='timeline__nav__btn' key={i}>
              <motion.div 
                whileHover={{backgroundColor: 'hsla(167, 94%, 12%, .75)'}}
                className={`timeline__nav__dot ${activeCard === i && 'dot-active'}`} 
                onClick={() => changeActive(i)}>
              </motion.div>
              <span className={`timeline__nav__date ${activeCard === i && 'date-active'}`}>{timeline.toDate}</span>
            </div>
          ))}
        </div>
        <div className='timeline__brands'>
            {brands.map((brand, i) => (
              <motion.img 
              whileHover={{filter: 'grayscale(0)'}}
              whileInView={{opacity: [0, 1], transition: {duration: .5, delay: i - (i * .5)}}}
              key={i} 
              src={urlFor(brand.imgUrl)} 
              alt="brand-logo" 
              className='timeline__brands__img'
            />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
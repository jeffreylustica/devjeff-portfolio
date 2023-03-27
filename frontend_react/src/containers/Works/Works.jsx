import { useEffect, useState } from 'react'
import './Works.scss'
import { urlFor, client } from '../../client'

const Works = () => {
  const [works, setWorks] = useState([])
  const [filteredWorks, setFilteredWorks] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    const query = '*[_type == "works"]'

    client.fetch(query)
      .then(data => {
        setWorks(data)
        setFilteredWorks(data)
      })

  }, [])

  const handleWorkFilter = (category) => {
    setActiveFilter(category)
    setFilteredWorks(works.filter(work => {
      return work.tags.includes(category)
    }))
  }

  return (
    <div id='works' className='works'>
      <div className="container">
        <h2 className="works__heading">My Works</h2>
        <div className="works__filters flexCenter">
          {['All','Web App', 'Mobile App', 'React JS'].map((category, i) => (
            <button 
              key={i} 
              className='works__filters__btn' 
              type='button'
              onClick={() => handleWorkFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="works__projects">
          {filteredWorks.map((work, i) => (
            <div className="works__projects__item" key={i}>
              <img className='works__projects__item__image' src={urlFor(work.imgUrl)} alt="project-image" />
              <div className="works__projects__item__title">
                <span>{work.title}</span>
              </div>
              <p className="works__projects__item__desc">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
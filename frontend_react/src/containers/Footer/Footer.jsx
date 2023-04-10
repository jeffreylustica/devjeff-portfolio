import React from 'react'
import './Footer.scss'

const Footer = ({coprClass}) => {
  return (
    <div className={`footer ${coprClass}`}>
        <div className='copyright'>
            <p>© Jeffrey Lustica - 2022</p>
        </div>
    </div>
  )
}

export default Footer
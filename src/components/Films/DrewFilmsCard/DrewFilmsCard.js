import React from 'react'
import { NavLink } from "react-router-dom";
import css from './DrewFilmsCard.module.css'

const DrewFilmsCard = (item) => {
  return (
    <div>
        <p className={css.title}>{item.title}</p>
        <p className={css.description}>{item.opening_crawl.slice(0, 200) + ' ...'}</p>
      <NavLink className={css.linkButton}  to={`/films/${item.episode_id}`}>
        show more
      </NavLink>
    </div>
  )
}

export default DrewFilmsCard
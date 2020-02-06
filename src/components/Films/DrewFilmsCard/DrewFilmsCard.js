import React from 'react'
import { NavLink } from "react-router-dom";
import css from './DrewFilmsCard.module.css'

const DrewFilmsCard = (item) => {
  const handleTest = e => {
  }
  return (
    <div onClick={(e) => handleTest(e)}>
        <p className={css.title}>{item.title}</p>
        <p className={css.description}>{item.opening_crawl}</p>
      <NavLink to={`/films/${item.episode_id}`}  className={css.buttonMore}>More...</NavLink>
    </div>
  )
}

export default DrewFilmsCard
import React from "react";
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={css.menu}>
        <ul className={css.menuList}>

          <li className={css.menuItem}>
            <NavLink className={css.menuLink} activeClassName={css.activeMenuLink}  to="/films/" >
                films
            </NavLink>
          </li>

          <li className={css.menuItem}>
            <NavLink className={css.menuLink} activeClassName={css.activeMenuLink}  to="/people/" >
                people
            </NavLink>
          </li>

          <li className={css.menuItem}>
            <NavLink className={css.menuLink} activeClassName={css.activeMenuLink}  to="/planets/" >
                planets
            </NavLink>
          </li>

          <li className={css.menuItem}>
            <NavLink className={css.menuLink} activeClassName={css.activeMenuLink}  to="/species/" >
                species
            </NavLink>
          </li>

          <li className={css.menuItem}>
            <NavLink className={css.menuLink} activeClassName={css.activeMenuLink}  to="/starships/" >
                starships
            </NavLink>
          </li>

          <li className={css.menuItem}>
            <NavLink className={css.menuLink} activeClassName={css.activeMenuLink}  to="/vehicles/" >
                vehicles
          </NavLink>
        </li>

        </ul>
    </nav>
  )
};

export default Navbar
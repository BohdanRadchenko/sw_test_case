import React, { useState } from 'react';
import {radio} from '../../../assets/radio'

import css from './GlobalSearchBar.module.css'

const GlobalSearchBar = () => {
  const defaultForm = {
    input : '',
    radio : ''
  }

  const [form, setForm] = useState({})

const changeHandler = e => {
  console.log('changeHandler', e.target.value)
}

const submitHandler = e => {
  console.log('submitHandler, e')
}

  return (<div>
    <form className={css.form} onSubmit={e => submitHandler(e)}>
      <input className={css.input}
             required
             // value={form.name}
             name='name'
             onChange={e => changeHandler(e)}
             minLength="2"
             maxLength="60"
             placeholder="Your name"
             id="name"
             type="text"/>

        <div className="radio">
          <ul className={css.radioList}>
            {radio.map(el => (
              <li key={el.id} className={css.radioItem}>
                <label className={css.radioLabel}>
                  <input type="radio"
                         className={css.radioInput}
                         onChange={e => changeHandler(e)}
                         name='positions_id'
                         value={el.id}
                         checked={el.id === form.positions_id}
                  />
                  {el.name}
                </label>
              </li>
            ))}
          </ul>
        </div>

      <button type="submit" className={css.button}>search</button>
    </form>
    </div>)
}

export default GlobalSearchBar;


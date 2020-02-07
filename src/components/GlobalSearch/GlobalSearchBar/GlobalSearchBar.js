import React, { useState } from 'react';
import {radio} from '../../../assets/radio'
import {connect} from 'react-redux'
import * as globalSearchOperations from '../../../redux/globalSearch/globalSearchOperations'

import css from './GlobalSearchBar.module.css'

const GlobalSearchBar = ({loading, fetchSearch}) => {
  const defaultForm = {
    value : '',
    radio : 'films'
  }
  const [form, setForm] = useState(defaultForm)

const changeHandler = e => {
  setForm({...form , [e.target.name]: e.target.value})
}

const submitHandler = e => {
    e.preventDefault()
  fetchSearch(form)
  setForm(defaultForm)
}

  return (<div className={css.container}>
    <form className={css.form} onSubmit={e => submitHandler(e)}>

        <input className={css.input}
               disabled={loading}
               required
               value={form.value}
               name='value'
               onChange={e => changeHandler(e)}
               minLength="2"
               maxLength="60"
               placeholder="Search..."
               id="name"
             type="text"/>

        <div className="radio">
          <ul className={css.radioList}>
            {radio.map(el => (
              <li key={el.id} className={css.radioItem}>
                <label className={css.radioLabel}>
                  <input type="radio"
                         required
                         className={css.radioInput}
                         onChange={e => changeHandler(e)}
                         name='radio'
                         value={el.value}
                         checked={el.value === form.radio}
                  />
                  {el.value}
                </label>
              </li>
            ))}
          </ul>
        </div>
      <button
        disabled={loading}
        type="submit"
        className={css.button}>search</button>
      </form>
    </div>)
}

const mDTP = {
  fetchSearch :  globalSearchOperations.fetchSearch
}


export default connect(null, mDTP)(GlobalSearchBar);


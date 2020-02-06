import React, { useEffect, useState } from 'react';
import PaginationBar from "../PaginationBar/PaginationBar";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import { Loaders } from "../Loaders";
import * as peopleOperation from '../../redux/people/peopleOperations'
import * as peopleSelectors from '../../redux/people/peopleSelectors'

import css from './People.module.css'

const People = ({fetchPaginationPeople, people, prev, next, history}) => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    fetchPaginationPeople(count)
  }, [count])

  const handleButtonClick = (e) => {
    if (e.target.innerText === 'next') {
      setCount(count + 1)
    }
    if (e.target.innerText === 'prev') {
      setCount(count - 1)
    }
  }

  const handleMoreClick = el => {
    const id = el.url.split('/')[5]
    history.push(`${id}/`)
  }

  return (
    <div className={css.container}>
      {!people && <Loaders/>}
      {people && (
        <ul className={css.list}>
          {people.map((el, i) =>
            <li key={i}
                onClick={() => handleMoreClick(el)}
                className={css.item}>
              <p>{el.name}</p>
            </li>)}
        </ul>
      )}
    <PaginationBar {...{handleButtonClick, next, prev}}/>
  </div>
  )}

const mSTP = state => ({
  people : peopleSelectors.paginationPeople(state),
  next : peopleSelectors.peopleNext(state),
  prev : peopleSelectors.peoplePrev(state),
})

const mDTP = {
  fetchPaginationPeople : peopleOperation.fetchPaginationPeople
}

export default withRouter( connect(mSTP, mDTP)(People));

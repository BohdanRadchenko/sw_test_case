import React, { useEffect, useState } from 'react';
import PaginationBar from "../PaginationBar/PaginationBar";
import {connect} from 'react-redux'
import * as peopleOperation from '../../redux/people/peopleOperations'
import * as peopleSelectors from '../../redux/people/peopleSelectors'
import DrewPeopleCard from "./DrewPeopleCard/DrewPeopleCard";

const People = ({fetchPaginationPeople, people, prev, next}) => {
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

  return (
    <div>
      {people && (
        <ul>
          {people.map((el, i) =>
          <li key={i}>
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

export default connect(mSTP, mDTP)(People);

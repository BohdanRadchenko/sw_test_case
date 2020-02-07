import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as globalSearchSelectors from '../../redux/globalSearch/globalSearchSelectors'
import GlobalSearchBar from "./GlobalSearchBar/GlobalSearchBar";

import css from "./GlobalSearch.module.css";
import GlobalSearchPage from "../../pages/GlobalSearchPage";
import { Loaders } from "../Loaders";

const GlobalSearch = ({search, loading, error, history}) => {

  const handleMoreClick = el => {
    const type = el.url.trim().split('/')[4]
    const id = el.url.trim().split('/')[5]
    history.push(`/${type}/${id}`)
  }

  if(loading) {
    return (
      <div className={css.containerLoading} >
      <GlobalSearchBar loading={loading}/>
      <Loaders/>
      </div>
    )
  }

  return (<div className={css.container}>
    <GlobalSearchBar loading={loading}/>
    {!!search && (
      <>
        {search.length !== 0 && (
          <ul className={css.list}>
            {search.map((el, i) => (
                <li key={i}
                    className={css.item}
                    onClick={() => handleMoreClick(el)}>
                <p className={css.title}>
                  {el.name ? el.name : el.title}
                </p>
                  <p className={css.subtitle}>
                    Just click on this card...
                  </p>
              </li>
            ))}
          </ul>
        )}
      </>
    )}
    </div>)
}

const mSTP = state => ({
  search : globalSearchSelectors.getSearch(state),
  loading : globalSearchSelectors.getLoading(state),
})

export default withRouter(connect(mSTP)(GlobalSearch));
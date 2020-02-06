import React, { Suspense, Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {fetchFilms} from '../redux/films/filmsOperations'
import { connect } from "react-redux";
import {useRoutes} from "../routes";
import { Loaders } from "./Loaders";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import css from './App.module.css'

const routes = useRoutes()


class App extends Component {
  componentDidMount() {
    this.props.fetchFilms()
  }

  render() {
    return (<Suspense fallback={<Loaders/>}>
      <Router>
        <div className={css.container}>
          <div className={css.dashboard}>
            <div className={css.leftSide}>
              <Navbar/>
            </div>
            <div className={css.rigthSide}>
              {routes}
            </div>
          </div>
          <Footer/>
        </div>
      </Router>
    </Suspense>)
  }
}

const mDTP = {
  fetchFilms : fetchFilms
}

export default connect(null, mDTP)(App)

import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {
  AsyncFilms,
  AsyncPeople,
  AsyncPlanets,
  AsyncSpecies,
  AsyncStarships,
  AsyncVehicles,
  AsyncDetailFilms,
  AsyncDetailPeople,
  AsyncDetailPlanets,
  AsyncDetailSpecies,
  AsyncDetailStarships,
  AsyncDetailVehicles,
  AsyncGlobalSearch,
} from './async.routes'

export const useRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/films/" exact >
          <AsyncFilms/>
        </Route>
        <Route path="/films/:id" >
          <AsyncDetailFilms/>
        </Route>
        <Route path="/people/" exact>
          <AsyncPeople/>
        </Route>
        <Route path="/people/:id">
          <AsyncDetailPeople/>
        </Route>
        <Route path="/planets/" exact>
          <AsyncPlanets />
        </Route>
        <Route path="/planets/:id" >
          <AsyncDetailPlanets />
        </Route>
        <Route path="/species/" exact>
          <AsyncSpecies />
        </Route>
        <Route path="/species/:id">
          <AsyncDetailSpecies />
        </Route>
        <Route path="/starships/" exact >
          <AsyncStarships/>
        </Route>
        <Route path="/starships/:id" >
          <AsyncDetailStarships/>
        </Route>
        <Route path="/vehicles/" exact>
          <AsyncVehicles />
        </Route>
        <Route path="/vehicles/:id" >
          <AsyncDetailVehicles/>
        </Route>
        <Route path="/search/">
          <AsyncGlobalSearch />
        </Route>
        <Redirect to="/films/"/>
      </Switch>
    </div>
  )
};
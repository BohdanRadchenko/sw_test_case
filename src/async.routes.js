import {lazy} from 'react';

export const AsyncFilms = lazy(() =>
  import('./pages/FilmsPage'),
);

export const AsyncPeople = lazy(() =>
  import('./pages/PeoplePage'),
);

export const AsyncPlanets = lazy(() =>
  import("./pages/PlanetsPage"),
);

export const AsyncSpecies = lazy(() =>
  import('./pages/SpeciesPage'),
);

export const AsyncStarships = lazy(() =>
  import('./pages/StarshipsPage'),
);

export const AsyncVehicles = lazy(() =>
  import('./pages/VehiclesPage'),
);

// DETAIL PAGES
export const AsyncDetailFilms = lazy(() =>
  import('./pages/DetailFilmsPage'),
);

export const AsyncDetailPeople = lazy(() =>
  import('./pages/DetailPeoplePage'),
);

export const AsyncDetailPlanets = lazy(() =>
  import('./pages/DetailPlanetsPage'),
);

export const AsyncDetailSpecies = lazy(() =>
  import('./pages/DetailSpeciesPage'),
);

export const AsyncDetailStarships = lazy(() =>
  import('./pages/DetailStarshipsPage'),
);

export const AsyncDetailVehicles = lazy(() =>
  import('./pages/DetailVehiclesPage'),
);

export const AsyncGlobalSearch= lazy(() =>
  import('./pages/GlobalSearchPage'),
);



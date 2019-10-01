import { createSelector } from 'reselect';
// selector
const getHomeState = (state) => state.homeState.home;
// reselect function
export const getHomeSelector = createSelector(
  [getHomeState],
  (home) => (home),
);

export default getHomeSelector;

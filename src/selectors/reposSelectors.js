import { createSelector } from 'reselect';
// selector
const getReposState = (state) => state.reposState.repos;
// reselect function
export const getReposSelector = createSelector(
  [getReposState],
  (repos) => (repos),
);

export default getReposSelector;

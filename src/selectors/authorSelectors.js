import { createSelector } from 'reselect';
// selector
const getAuthorState = (state) => state.authorState.author;
// reselect function
export const getAuthorSelector = createSelector(
  [getAuthorState],
  (author) => (author),
);

export default getAuthorSelector;

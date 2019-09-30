import { createSelector } from 'reselect';
// selector
const getAuthorState = (state) => state.authorState.author;
// reselect function
export const getAuthorSelector = createSelector(
  [getAuthorState],
  (author) => ({
    avatarUrl: author.avatar_url,
    name: author.name,
    location: author.location,
    company: author.company,
    bio: author.bio,
    htmlUrl: author.html_url,
  }),
);

export default getAuthorSelector;

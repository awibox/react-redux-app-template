import { GET_REPOS_SUCCESS } from 'actions/types';
import { List } from 'immutable';
import reducer from './reposReducer';

describe('repos reducer', () => {
  const mockData = {
    html_url: 'http://localhost:8888/item',
    name: 'First Repo',
    description: 'Repository',
    language: 'javascript',
    id: 1,
    size: 10,
    stargazers_count: 10,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it('should handle GET_REPOS_SUCCESS', () => {
    const successAction = {
      type: GET_REPOS_SUCCESS,
      payload: [mockData],
    };
    expect(reducer({}, successAction)).toEqual({
      repos: List([
        mockData,
      ]),
    });
  });
});

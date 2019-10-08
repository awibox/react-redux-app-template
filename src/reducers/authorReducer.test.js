import { GET_AUTHOR_SUCCESS } from 'actions/types';
import { Map } from 'immutable';
import reducer from './authorReducer';

describe('author reducer', () => {
  const mockData = {
    avatar_url: 'http://localhost:8888/avatar',
    name: 'John',
    location: 'USA',
    company: 'Google',
    bio: 'Addition information',
    html_url: 'http://localhost:8888/url',
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it('should handle GET_AUTHOR_SUCCESS', () => {
    const successAction = {
      type: GET_AUTHOR_SUCCESS,
      payload: mockData,
    };
    expect(reducer({}, successAction)).toEqual({
      author: Map(mockData),
    });
  });
});

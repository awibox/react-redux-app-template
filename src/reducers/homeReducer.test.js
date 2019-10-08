import { GET_HOME_SUCCESS } from 'actions/types';
import { Map } from 'immutable';
import reducer from './homeReducer';

describe('home reducer', () => {
  const mockData = {
    name: 'Finder',
    description: 'Search engine',
    html_url: 'http://localhost:8888/url',
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it('should handle GET_HOME_SUCCESS', () => {
    const successAction = {
      type: GET_HOME_SUCCESS,
      payload: mockData,
    };
    expect(reducer({}, successAction)).toEqual({
      home: Map(mockData),
    });
  });
});

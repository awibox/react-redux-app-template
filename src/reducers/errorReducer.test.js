import { GET_ERRORS } from 'actions/types';
import reducer from './errorReducer';

describe('error reducer', () => {
  const mockData = {
    message: 'Error 503',
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it('should handle GET_ERRORS', () => {
    const successAction = {
      type: GET_ERRORS,
      payload: mockData,
    };
    expect(reducer({}, successAction)).toEqual(mockData);
  });
});

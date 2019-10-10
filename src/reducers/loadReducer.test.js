import { GET_LOAD_STATUS } from 'actions/types';
import reducer from './loadReducer';

describe('loading reducer', () => {
  const mockData = {
    isLoading: true,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
    });
  });
  it('should handle GET_LOAD_STATUS', () => {
    const successAction = {
      type: GET_LOAD_STATUS,
      payload: mockData,
    };
    expect(reducer({}, successAction)).toEqual(mockData);
  });
});

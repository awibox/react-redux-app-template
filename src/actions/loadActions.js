import { GET_LOAD_STATUS } from 'actions/types';

export const setLoadStatus = (isLoadingStatus) => ({
  type: GET_LOAD_STATUS,
  payload: { isLoading: isLoadingStatus },
});

export default setLoadStatus;

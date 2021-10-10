import { ActionType } from '../actionTypes';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// interface Action {
//   type: string;
//   payload?: any;
// }

const initialState = {
  loading: false,
  error: null,
  data: [],
};
const reducer = (
  state: RepositoriesState = initialState,
  // action: Action
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

// const reducer = (state: RepositoriesState, action: any): RepositoriesState => {
//   switch (action.type) {
//     case 'search_repositories':
//       return { loading: true, error: null, data: [] };
//     case 'search_repositories_success':
//       return { loading: false, error: null, data: action.payload };
//     case 'search_repositories_error':
//       return { loading: false, error: action.payload, data: [] };
//     default:
//       return state;
//   }
// };

export default reducer;

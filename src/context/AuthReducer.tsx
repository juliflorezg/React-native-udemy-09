import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {
      type: 'setFavIcon';
      payload: {name: string; iconLibrary: 'ionicons' | 'fontawesome5'};
    }
  | {type: 'logout'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  console.log(action);

  switch (action.type) {
    case 'signIn': {
      return {
        ...state,
        isLoggedIn: true,
        userName: 'no-username-yet',
      };
    }
    case 'setFavIcon': {
      return {
        ...state,
        favoriteIcon: action.payload.name,
        iconLibrary: action.payload.iconLibrary,
      };
    }
    case 'logout': {
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favoriteIcon: undefined,
        iconLibrary: undefined,
      };
    }
    default:
      return state;
  }
};

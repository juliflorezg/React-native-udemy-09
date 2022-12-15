import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {
      type: 'setFavIcon';
      payload: {name: string; iconLibrary: 'ionicons' | 'fontawesome5'};
    };

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
    default:
      return state;
  }
};

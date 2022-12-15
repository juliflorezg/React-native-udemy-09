import {AuthState} from './AuthContext';

type AuthAction = {type: 'signIn'};

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
    default:
      return state;
  }
};

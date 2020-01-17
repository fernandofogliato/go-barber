import reducer, { INITIAL_STATE } from '~/store/modules/auth/reducer';
import * as Actions from '~/store/modules/auth/actions';

describe('Auth reducer', () => {
  it('SIGN_IN_REQUEST', () => {
    const state = reducer(
      INITIAL_STATE,
      Actions.signInRequest('teste@teste.com', '123456')
    );
    expect(state).toStrictEqual({
      token: null,
      signed: false,
      loading: true,
    });
  });
});

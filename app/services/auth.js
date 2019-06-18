import Service, { inject } from '@ember/service';

const USER_KEY = 'shlack-userid';

export default class AuthService extends Service {

  @inject
  router;

  loginWithUserId(userId) {

    window.localStorage.setItem(USER_KEY, userId);
    this.router.transitionTo('teams');
  }

  logout() {
    window.localStorage.removeItem(USER_KEY);
    this.router.transitionTo('login');
  }

  get currentUserId() {
    return window.localStorage.getItem(USER_KEY);
  }
}

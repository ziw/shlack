import Service, { inject } from '@ember/service';
import { action } from '@ember/object';
import fetch from 'fetch';
import { tracked } from '@glimmer/tracking';

const USER_KEY = 'shlack-userid';

export default class AuthService extends Service {

  @inject
  router;

  @tracked
  currentUser = null;

  loginWithUserId(userId) {
    window.localStorage.setItem(USER_KEY, userId);
    this.router.transitionTo('teams');
  }

  async loadCurrentUser() {
    if(!this.currentUserId) {
      return;
    }
    const userResp = await fetch(`/api/users/${this.currentUserId}`);
    this.currentUser = await userResp.json();
  }

  @action
  logout() {
    window.localStorage.removeItem(USER_KEY);
    this.router.transitionTo('login');
  }

  get currentUserId() {
    return window.localStorage.getItem(USER_KEY);
  }

}

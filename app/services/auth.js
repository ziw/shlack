import Service, { inject } from '@ember/service';
import { action } from '@ember/object';
import fetch from 'fetch';
import { tracked } from '@glimmer/tracking';
import CookiesService from 'ember-cookies/services/cookies';

const USER_KEY = 'shlack-userid';

export default class AuthService extends Service {

  @inject
  router;

/**
  * @type {CookiesService}
  */
 @inject cookies;

  @tracked
  currentUser = null;

  loginWithUserId(userId) {
    this.cookies.write(USER_KEY, userId);
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
    this.cookies.write(USER_KEY, '');
    this.router.transitionTo('login');
  }

  get currentUserId() {
    return this.cookies.read(USER_KEY);
  }

}

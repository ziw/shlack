import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import fetch from 'fetch';

export default class TeamsRoute extends Route {

  @inject
  auth;

  async beforeModel(transition){
    await super.beforeModel(transition);
    if(!this.auth.currentUserId) {
      this.transitionTo('login');
    } else {
      return this.auth.loadCurrentUser();
    }
  }

  model() {
    return fetch('/api/teams').then(resp => resp.json());
  }
}

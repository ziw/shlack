import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import fetch from 'fetch';

export default class LoginRoute extends Route {

  @inject
  auth;

  async beforeModel(transition){
    await super.beforeModel(transition);
    if(this.auth.currentUserId) {
      this.transitionTo('teams');
    }
  }

  async model() {
    const users = fetch('/api/users').then(resp => resp.json());
    return users;
  }
}

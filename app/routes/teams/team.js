import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TeamsTeamRoute extends Route {

  model({ teamId }) {
    return fetch(`/api/teams/${teamId}`).then(resp => resp.json());
  }
}

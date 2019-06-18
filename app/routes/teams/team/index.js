import Route from '@ember/routing/route';

export default class TeamsTeamIndexRoute extends Route {

  async beforeModel(transition) {
    await super.beforeModel(transition);
    const team = this.modelFor('teams.team');
    this.transitionTo('teams.team.channel', team.channels[0].id);
  }
}

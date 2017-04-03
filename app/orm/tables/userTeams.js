export default function loadTables(orm) {
  orm.defineTable({
    name: 'user_teams',

    props: {
      autoId: true,
      timestamps: true
    },

    relations: {

      team() {
        return this.belongsTo('teams', 'team_id');
      },
      user() {
        return this.belongsTo('users', 'user_id');
      }
    },

    scopes: {
      forUser(user) {
        return this.where({user_id: user.id});
      },
      forTeam(team) {
        return this.where({team_id: team.id});
      },
      withOutLoggedInUser(user) {
        return this.whereNotIn('user_id', user.id);
      }
    }
    
  });
}

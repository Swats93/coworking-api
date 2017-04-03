export default function loadTables(orm) {
  orm.defineTable({
    name: 'users',

    props: {
      autoId: true,
      timestamps: true
    },

    relations: {
      teams() {
        return this
          .manyToMany('teams', 'user_teams', 'user_id', 'team_id')
          .withPivot('role', 'created_at', 'updated_at')
        ;
      }
    },

    scopes: {
      forEmail(email) {
        return this.where({email});
      },

      forTeam(team) {
        return this.scope((query) => {
          query
            .join('user_teams', (j) => j.on('users.id', '=', 'user_teams.user_id'))
            .join('teams', (j) => j.on('teams.id', '=', 'user_teams.team_id'))
            .where({
              'teams.id': team.id
            });
        });
      },

      forTeamAndRole(team, role) {
        return this.scope((query) => {
          query
            .join('user_teams', (j) => j.on('users.id', '=', 'user_teams.user_id'))
            .join('teams', (j) => j.on('teams.id', '=', 'user_teams.team_id'))
            .where({
              'teams.id': team.id,
              'user_teams.role': role
            });
        });
      }
    }
  });
}

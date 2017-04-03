export default function loadTables(orm) {

  orm.defineTable({
    name: 'teams',

    props: {
      autoId: true,
      timestamps: true
    },

    relations : {
    	users() {
    		return this.manyToMany('users', 'user_teams', 'team_id', 'user_id');
    	}
    }
    
  });
}

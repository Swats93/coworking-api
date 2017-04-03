
import users from './users';
import teams from './teams';
import userTeams from './userTeams';
import events from './events';
import news from './news';

export default function loadTables(orm) {
  users(orm);
  teams(orm);
  userTeams(orm);
  news(orm);
  events(orm);
}


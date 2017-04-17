
import users from './users';
import teams from './teams';
import userTeams from './userTeams';
import events from './events';
import news from './news';
import locations from './locations';

export default function loadTables(orm) {
  users(orm);
  teams(orm);
  userTeams(orm);
  news(orm);
  events(orm);
  locations(orm);
}


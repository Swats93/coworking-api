import {table} from 'app/orm';
import bcrypt from 'bcrypt';

export default {
  async run(t) {
    console.log('seeding users');

    return table('users', t).insert([
      {	
      	name: 'mithu', 
      	password: await new Promise((resolve) => bcrypt.hash('swati', 10, (_, hash) => resolve(hash))),
      	is_admin: true
      }
    ]);
  }
};

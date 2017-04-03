
import {isString, shuffle} from 'lodash';
import bcrypt from 'bcrypt';
import randToken from 'rand-token';

import {table, cache} from 'app/orm';
import {isUsableObject} from 'app/util';
import config from './config';

const authHash = cache.hash('auth');

export async function login(name, password) {
  console.log({name, password});
  const user = await findUserByCredentials(name, password);
  console.log(user);
  if (user === null || !user.is_admin) {
    return {success: false, token: null, user: null};
  }

  const authKey = await generateUniqueAuthKey(user);
  await authHash.set(authKey, user.id, config.lifetime);

  return {success: true, token: authKey, user};
}

export async function check(authKey) {
  const userId = await authHash.get(authKey);

  if (userId === null) {
    return null;
  }

  const user = await table('users').find({id: userId});

  return isUsableObject(user) ? user : null;
}

export async function logout(authKey) {
  await authHash.del(authKey);

  return true;
}

async function findUserByCredentials(name, password) {
  if (! isString(name) || ! isString(password)) {
    return null;
  }
  const user = await table('users').find({name});
  console.log({user});
  if (! isUsableObject(user)) {
    return null;
  }
  const isValidUser = await bcryptCheck(password, user.password);
  return isValidUser ? user : null;
}

async function bcryptCheck(password, hash) {
  return await new Promise((resolve) => (
    bcrypt.compare(password, hash, (err, res) => {
      if (err) {
        return resolve(false);
      }

      return resolve(res);
    })
  ));
}

async function generateUniqueAuthKey(user) {
  const key = shuffle(randToken.generate(72)).join('');

  const existing = await authHash.get(key);

  if (existing === null) {
    return key;
  } else {
    return await generateUniqueAuthKey(user);
  }
}


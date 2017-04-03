import express from 'express';
import {isUndefined, isString} from 'lodash';

import table from '../../orm';
import {Validator} from 'app/reducer';


const app = express();

const resetPasswordValidator = new Validator({
  ['password'](password) {
    if(!isUndefined(password) && isString(password) && password.length > 4) {
      return null;
    } else {
      return 'Password should be atleast 5 characters long.';
    }
  }
});

app.put('/reset-password', async (req, res) => {
  const errors = await resetPasswordValidator.errors(req.body);
    if (errors) {
      return res.status(400).send(errors);
    }
    console.log(req.user)
	await table('users')
		.where({id: req.user.id})
		.update({password: await new Promise((resolve) => bcrypt.hash(req.body.password, 10, (_, hash) => resolve(hash)))
	})
 	return res.status(200).send({msg: 'user password changes'});
});

export default app;
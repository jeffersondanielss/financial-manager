const bcrypt = require('bcrypt-nodejs');

const getPasswdHash = (passwd) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(passwd, salt);
};

exports.seed = async (knex) => {
  await knex('users').del();

  return knex('users').insert([
    { name: 'Madara', mail: 'madara@mail.com', passwd: getPasswdHash('123') },
  ]);
};

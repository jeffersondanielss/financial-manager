const bcrypt = require('bcrypt-nodejs');
const ValidationError = require('../errors/validationError');

module.exports = ({ db }) => {
  const findAll = () => {
    return db('users').select(['id', 'name', 'mail']);
  };

  const findOne = (filter = {}) => {
    return db('users').where(filter).select().first();
  };

  const getPasswdHash = (passwd) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(passwd, salt);
  };

  const save = async (user) => {
    if (!user.name) throw new ValidationError('Nome é um atributo obrigatório.');
    if (!user.mail) throw new ValidationError('Email é um atributo obrigatório.');
    if (!user.passwd) throw new ValidationError('Senha é um atributo obrigatório.');

    const userDB = await findOne({ mail: user.mail });

    if (userDB) throw new ValidationError('Já existe um usuário com este email.');

    const newUser = { ...user };
    newUser.passwd = getPasswdHash(newUser.passwd);

    return db('users').insert(newUser, ['id', 'name', 'mail']);
  };

  return { findAll, save, findOne };
};

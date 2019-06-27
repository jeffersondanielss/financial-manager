module.exports = ({ db }) => {
  const save = (account) => {
    return db('accounts').insert(account, '*');
  };

  const findAll = () => {
    return db('accounts').select();
  };

  const findById = (id) => {
    return db('accounts').where({ id }).first();
  };

  return { save, findAll, findById };
};

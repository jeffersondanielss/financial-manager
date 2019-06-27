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

  const update = (account, id) => {
    return db('accounts').where({ id }).update(account, '*');
  };

  return {
    save,
    findAll,
    findById,
    update,
  };
};

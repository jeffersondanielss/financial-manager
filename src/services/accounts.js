module.exports = ({ db }) => {
  const save = async (account) => {
    if (!account.name) return { error: 'Nome é um atributo obrigatório.' };
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

  const exclude = (id) => {
    return db('accounts').where({ id }).delete();
  };

  return {
    save,
    findAll,
    findById,
    update,
    exclude,
  };
};

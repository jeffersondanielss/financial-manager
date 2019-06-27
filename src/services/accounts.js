module.exports = ({ db }) => {
  const save = (account) => {
    return db('accounts').insert(account, '*');
  };

  const findAll = () => {
    return db('accounts').select();
  };

  return { save, findAll };
};

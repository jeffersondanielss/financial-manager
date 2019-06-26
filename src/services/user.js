module.exports = ({ db }) => {
  const findAll = () => {
    return db('users').select();
  };

  const save = (user) => {
    return db('users').insert(user, '*');
  };

  return { findAll, save };
};

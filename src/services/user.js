module.exports = ({ db }) => {
  const findAll = () => {
    return db('users').select();
  };

  const save = (user) => {
    if (!user.name) return { error: 'Nome é um atributo obrigatório.' };
    return db('users').insert(user, '*');
  };

  return { findAll, save };
};

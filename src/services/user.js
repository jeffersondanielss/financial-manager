module.exports = ({ db }) => {
  const findAll = (filter = {}) => {
    return db('users').where(filter).select();
  };

  const save = async (user) => {
    if (!user.name) return { error: 'Nome é um atributo obrigatório.' };
    if (!user.mail) return { error: 'Email é um atributo obrigatório.' };
    if (!user.passwd) return { error: 'Senha é um atributo obrigatório.' };

    const userDB = await findAll({ mail: user.mail });

    if (userDB && userDB.length > 0) return { error: 'Já existe um usuário com este email.' };

    return db('users').insert(user, '*');
  };

  const findById = async (id) => {
    const result = await db('users').where({ id }).select();
    if (result && result.length > 0) return Promise.resolve(result);
    return Promise.resolve({ error: 'Usuário não encontrado ou inexistente.' });
  };

  return { findAll, save, findById };
};

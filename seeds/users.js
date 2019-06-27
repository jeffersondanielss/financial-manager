
exports.seed = async (knex) => {
  await knex('users').del();

  return knex('users').insert([
    { name: 'Madara', mail: 'madara@mail.com', passwd: 123 },
  ]);
};

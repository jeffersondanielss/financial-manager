module.exports = ({ services }) => {
  const { user } = services;

  const findAll = (req, res) => {
    user.findAll()
      .then(result => res.status(200).json(result));
  };

  const create = ('/users', async (req, res) => {
    const result = await user.save(req.body);
    res.status(201).json(result[0]);
  });

  return {
    findAll,
    create,
  };
};

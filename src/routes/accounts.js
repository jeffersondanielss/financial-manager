module.exports = ({ services }) => {
  const { accounts } = services;

  const create = async (req, res) => {
    const result = await accounts.save(req.body);
    return res.status(200).json(result[0]);
  };

  const findAll = async (req, res) => {
    const result = await accounts.findAll();
    return res.status(200).json(result);
  };

  const findById = async (req, res) => {
    const result = await accounts.findById(req.params.id);
    return res.status(200).json(result);
  };

  const update = async (req, res) => {
    const result = await accounts.update(req.body, req.params.id);
    return res.status(200).json(result[0]);
  };

  const exclude = async (req, res) => {
    await accounts.exclude(req.params.id);
    return res.status(204).send();
  };

  return {
    create,
    findAll,
    findById,
    update,
    exclude,
  };
};

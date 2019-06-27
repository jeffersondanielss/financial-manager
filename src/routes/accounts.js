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

  return { create, findAll, findById };
};

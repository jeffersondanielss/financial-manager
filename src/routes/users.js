module.exports = ({ services }) => {
  const { user } = services;

  const findAll = async (req, res) => {
    const result = await user.findAll();

    return res.status(200).json(result);
  };

  const create = async (req, res) => {
    const result = await user.save(req.body);
    if (result.error) return res.status(400).json(result);

    return res.status(201).json(result[0]);
  };

  const findById = async (req, res) => {
    const result = await user.findById(req.params.id);
    if (result.error) return res.status(404).json(result);

    return res.status(200).json(result[0]);
  };

  return { findAll, create, findById };
};

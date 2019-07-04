module.exports = ({ services }) => {
  const { user } = services;

  const findAll = async (req, res, next) => {
    try {
      const result = await user.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  };

  const create = async (req, res, next) => {
    try {
      const result = await user.save(req.body);
      return res.status(201).json(result[0]);
    } catch (error) {
      return next(error);
    }
  };

  const findById = async (req, res, next) => {
    try {
      const result = await user.findById(req.params.id);
      return res.status(200).json(result[0]);
    } catch (error) {
      return next(error);
    }
  };

  return { findAll, create, findById };
};

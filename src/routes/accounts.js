module.exports = ({ services }) => {
  const { accounts } = services;

  const create = async (req, res, next) => {
    try {
      const result = await accounts.save(req.body);
      return res.status(200).json(result[0]);
    } catch (error) {
      return next(error);
    }
  };

  const findAll = async (req, res, next) => {
    try {
      const result = await accounts.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  };

  const findById = async (req, res, next) => {
    try {
      const result = await accounts.findById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  };

  const update = async (req, res, next) => {
    try {
      const result = await accounts.update(req.body, req.params.id);
      return res.status(200).json(result[0]);
    } catch (error) {
      return next(error);
    }
  };

  const exclude = async (req, res, next) => {
    try {
      await accounts.exclude(req.params.id);
      return res.status(204).send();
    } catch (error) {
      return next(error);
    }
  };

  return {
    create,
    findAll,
    findById,
    update,
    exclude,
  };
};

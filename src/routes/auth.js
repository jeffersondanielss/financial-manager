const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');

const secret = 'segredo !';

module.exports = ({ services }) => {
  const signin = async (req, res, next) => {
    try {
      const user = await services.user.findOne({ mail: req.body.mail });

      if (bcrypt.compareSync(req.body.passwd, user.passwd)) {
        const payload = {
          id: user.id,
          name: user.name,
          mail: user.mail,
        };

        const token = jwt.encode(payload, secret);
        return res.status(200).json({ token });
      }
    } catch (err) {
      return next(err);
    }
  };

  return { signin };
};

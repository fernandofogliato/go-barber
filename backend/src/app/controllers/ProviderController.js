import User from '../models/User';
import File from '../models/File';

class ProviderController {
  index(req, res) {
    const providers = User.findAll({
      where: { providers: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(providers);
  }
}

export default new ProviderController();
